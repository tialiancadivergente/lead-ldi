# Retry LDI

## Objective

Create a retry page based on the existing quiz flow, reusing the same layout and the same questions, while keeping destination, tag, and tracking configurable by source:

- Traffic
- Organic

## Status

### Done

1. Mapped the current funnel flow:
   - landing page lead capture in `app/ldi/[version]/v1/index.tsx` and `app/ldi/[version]/v2/index.tsx`
   - initial capture proxy in `app/api/lead-registration/start/route.ts`
   - current quiz in `app/quiz/page.tsx` with layout in `app/quiz/container.tsx`
2. Confirmed the provided tags already match the current base:
   - traffic: `120693`
   - organic: `120700`
3. Created the initial retry configuration in `lib/config/retry-config.ts`.
4. Opened the initial retry route in `app/redo/page.tsx`, temporarily reusing the flow from `app/quiz/page.tsx`.
5. Created `app/redo/layout.tsx` by reusing the quiz layout already in use.
6. Replaced the temporary alias route with a dedicated `/redo` page that still preserves the current quiz payload contract.
7. Connected `/redo` to `source` / `src` query params with fallback to `temperature`.
8. Connected the final WhatsApp redirect to `lib/config/retry-config.ts`.
9. Added source-based GTM and Meta Pixel initialization for `/redo`.
10. Updated the global GTM loader to skip `/redo`, preventing the wrong container from loading before source resolution.
11. Kept the existing landing flow unchanged, so `/redo` remains available only as a manually distributed route.
12. Added a short retry route pattern using compact path params:
   - `/redo/v1/o/f`
   - `/redo/v1/t/f`

### Remaining

1. Validate the final redirect to the correct WhatsApp group.
2. Test lead capture and answer submission payloads with real homologation data when `/redo` is opened from a manual link.
3. Confirm whether organic should stay without GTM or receive a dedicated container later.
4. Define the final manual URL pattern to send over WhatsApp.
5. Decide whether the team will standardize on the compact route format as the only manual URL pattern.

## Initial Configuration Applied

File: `lib/config/retry-config.ts`

### Source: Traffic

- `activeCampaignTag`: `[LDI] ABR26`
- `activeCampaignTagId`: `120693`
- `whatsappUrl`: `https://redirects.aliancadivergente.com.br/ldi`
- `metaPixelId`: `2197480187447654`
- `gtmId`: `GTM-WKPB8M8L`

### Source: Organic

- `activeCampaignTag`: `[LDI] ABR26 ORG`
- `activeCampaignTagId`: `120700`
- `whatsappUrl`: `https://redirects.aliancadivergente.com.br/ldi-org`
- `metaPixelId`: `1748628899086420`
- `gtmId`: `null`

Note:
- For `traffic`, the current project GTM container was used: `GTM-WKPB8M8L`.
- For `organic`, no GTM container was provided yet, so it remains `null` to avoid applying an incorrect container by guesswork.

## Current Flow Being Reused

Current project behavior:

1. The existing landing page flow remains unchanged and still redirects to `/quiz`.
2. The retry flow is now available as an independent manual route.
3. When `/redo` or `/redo/[source]` is opened with the required params, it:
   - fetches questions by `formVersionId`
   - sends summary tracking
   - sends detailed answer tracking
   - sends answers to the official lead score backend
   - redirects to the WhatsApp group

## Base Files For This Implementation

- `app/quiz/page.tsx`
- `app/quiz/container.tsx`
- `lib/config/quest-config.ts`
- `lib/temperature-utils.ts`
- `app/api/lead-registration/start/route.ts`
- `app/modules/lead-score/lead-score-transformers.ts`
- `app/modules/lead-score/lead-score-tracking-helpers.ts`
- `lib/tracking/leadTracking.ts`
- `lib/tracking/leadScoreTracking.ts`

## Planned Retry Method

### Frontend

Initial strategy:

1. Expose a dedicated retry route without diverging from the current quiz in the first step.
2. Reuse `container.tsx` to preserve layout and UX.
3. Swap only the configuration layer by source:
   - tag
   - pixel
   - GTM
   - WhatsApp group
4. Keep reading `requestId`, `email`, `phone`, and source from the query string.

### Backend / Integration

For now, the retry flow should continue to use the same backend integration already in place:

- `POST /api/lead-registration/start`
- `POST /api/quiz-proxy`
- lead score mutation via `useCreateLeadScoreStart`

If retry requires a dedicated endpoint later, that still needs confirmation.

## Initial Route Opened

- `/redo`

Current implementation:

- `app/redo/page.tsx` is now a dedicated page wrapper for the shared retry client
- `app/redo/layout.tsx` reexports the layout already used in the quiz
- `app/redo/[version]/[source]/[temperature]/[[...slug]]/page.tsx` exposes the compact short-params route
- `app/redo/RedoPageClient.tsx` centralizes the actual retry page logic

Current result:

- the new route uses exactly the same layout, questions, and behavior as the current quiz
- the route now resolves source from compact route params first, then `source`, `src`, or `temperature`
- the compact short route injects source and temperature directly from the path
- the final WhatsApp redirect is now driven by `lib/config/retry-config.ts`
- the official answer submission payload contract remains unchanged
- summary tracking and detailed tracking now include retry metadata (`source`, `retry tag id`)
- GTM now initializes only from the resolved retry source on `/redo`
- Meta Pixel now initializes from the resolved retry source on `/redo`

## Payload Compatibility

The main backend contract remains the same:

- `lead_registration_request_id`
- `form_version_id`
- `submitted_at`
- `answers`
- `raw_payload`

The retry flow still posts the same answer structure through `useCreateLeadScoreStart`.

What changed:

- tracking payloads now include retry metadata
- the legacy `/api/quiz-proxy` payload now includes `retryTag` and `retryTagId`
- the final redirect no longer depends on `temperature`; it depends on resolved retry source
- the existing landing entry remains on `/quiz`
- retry is exposed as a separate manual route and does not replace the original funnel entry

## Validation Guide

### Recommended Test URLs

Traffic:

```txt
/redo/v1/t/f?requestId=TEST123&email=teste%40mail.com&phone=5511999999999
```

Organic:

```txt
/redo/v1/o/org?requestId=TEST123&email=teste%40mail.com&phone=5511999999999
```

Generic route with fallback:

```txt
/redo?requestId=TEST123&source=traffic&temperature=f
```

### What Must Happen

1. The page opens with the same layout as `/quiz`.
2. Questions load normally.
3. The CTA below the form opens the correct WhatsApp URL:
   - traffic: `https://redirects.aliancadivergente.com.br/ldi`
   - organic: `https://redirects.aliancadivergente.com.br/ldi-org`
4. On submit, the flow still sends:
   - summary tracking webhook
   - detailed lead score tracking webhook
   - `POST /api/quiz-proxy`
   - official lead score submission via `useCreateLeadScoreStart`
5. After submit, the page redirects to the correct WhatsApp URL.

### Browser Checks

Open DevTools and validate:

1. `Network`
   - `POST /api/quiz-proxy` is fired
   - the lead score request is fired after the last answer
2. `Elements`
   - on `/redo/traffic`, GTM script/container for `GTM-WKPB8M8L` is present
   - on `/redo/organic`, no GTM container should be initialized for retry unless one is configured later
3. `Console`
   - no hydration warning
   - no runtime error preventing question fetch
4. `Meta Pixel`
   - traffic should initialize pixel `2197480187447654`
   - organic should initialize pixel `1748628899086420`

### Payload Checks

For `POST /api/quiz-proxy`, confirm these retry fields are present:

```json
{
  "source": "traffic",
  "retryTag": "[LDI] ABR26",
  "retryTagId": "120693"
}
```

For organic, expected values:

```json
{
  "source": "organic",
  "retryTag": "[LDI] ABR26 ORG",
  "retryTagId": "120700"
}
```

For the official lead score submission, the contract must still include:

```json
{
  "lead_registration_request_id": "request-id",
  "form_version_id": "form-version-id",
  "submitted_at": "iso-date",
  "answers": [],
  "raw_payload": {}
}
```

### Manual Validation Flow

1. Open a manually assembled retry URL.
2. Confirm the page loads and questions appear.
3. Answer the quiz and finish the flow.
4. Confirm the final redirect reaches the correct WhatsApp group.

## Existing Payloads To Reuse

### 1. Initial Lead Capture

Source:
- `app/ldi/[version]/v1/index.tsx`
- `app/ldi/[version]/v2/index.tsx`

Main payload sent to `POST /api/lead-registration/start`:

```json
{
  "email": "lead@exemplo.com",
  "telefone": "5511999999999",
  "launch": "LDI",
  "season": "ABR26",
  "tag_id": "120693",
  "page": "https://dominio.com",
  "path": "/rota-atual",
  "utm_source": "facebook",
  "utm_medium": "cpc",
  "utm_campaign": "campanha",
  "utm_content": "criativo",
  "utm_term": "keyword",
  "utm_id": "utm-id",
  "utms": {},
  "metadados": {
    "url": "https://dominio.com/rota-atual",
    "referer": "https://origem.com",
    "ip": "",
    "user_agent": "Mozilla/5.0 ...",
    "cookies": {},
    "temperature": "f"
  }
}
```

### 2. Legacy Parallel Registration Payload

Source:
- `app/ldi/[version]/v1/index.tsx`
- `app/ldi/[version]/v2/index.tsx`

Sent to `POST /api/register-lead`:

```json
{
  "email": "lead@exemplo.com",
  "phone": "5511999999999",
  "temperature": "f",
  "tipo": "redline-headline",
  "version": "v1",
  "parametroCompleto": "https://dominio.com/rota-atual",
  "domain": "https://dominio.com",
  "uri": "https://dominio.com",
  "tagId": "120693",
  "launch": "LDI",
  "path": "/rota-atual",
  "formFields": {}
}
```

### 3. Official Quiz Answer Submission

Source:
- `app/quiz/page.tsx`

Payload sent by `mutationCreateLeadScoreStart.mutateAsync(payload)`:

```json
{
  "lead_registration_request_id": "request-id",
  "form_version_id": "2228a3ba-b79e-41b0-90a0-47cac5816209",
  "submitted_at": "2026-03-27T00:00:00.000Z",
  "answers": [
    {
      "question_id": "question-id",
      "option_id": "option-id",
      "answered_at": "2026-03-27T00:00:00.000Z"
    }
  ],
  "raw_payload": {
    "source": "frontend",
    "step": "quiz",
    "gtmData": {
      "email": "lead@exemplo.com",
      "phone": "5511999999999",
      "answers": {},
      "totalScore": 0,
      "faixa": "Faixa E"
    }
  }
}
```

### 4. Lead Score Summary Tracking

Source:
- `app/quiz/page.tsx`
- `lib/tracking/leadTracking.ts`

Sent to `TRACKING_LEADSCORE_SUMMARY_WEBHOOK`:

```json
{
  "leadEmail": "lead@exemplo.com",
  "leadPhone": "5511999999999",
  "ipAddress": "127.0.0.1",
  "extraParams": {
    "faixa": "Faixa A",
    "totalScore": "180.3",
    "temperature": "f",
    "domain": "dominio.com",
    "launch": "[ORO][MAR26]",
    "path": "/quiz"
  }
}
```

### 5. Detailed Answer Tracking

Source:
- `app/quiz/page.tsx`
- `lib/tracking/leadScoreTracking.ts`

Structure sent to `TRACKING_LEADSCORE_RESPONSES_WEBHOOK`:

```json
{
  "answers": [
    "Resposta 1",
    "Resposta 2"
  ],
  "extras": {
    "email": "lead@exemplo.com",
    "phone": "5511999999999",
    "faixa": "Faixa A",
    "totalScore": 180.3
  }
}
```

## Decisions Taken In This Step

1. Retry will be handled by source (`traffic` and `organic`) instead of mixing retry rules into the existing `temperature` abstraction.
2. ActiveCampaign tags will stay centralized in a dedicated config file.
3. WhatsApp group destinations will be centralized in that same config.
4. Organic GTM remains pending confirmation.
5. The retry route follows the English naming standard and uses a 4-letter path: `/redo`.

## Pending Confirmations

1. Will the final route remain `/redo`, or will it be split into source-specific URLs such as `/redo/traffic` and `/redo/organic`?
2. Will retry originate from the current landing page or be accessed directly from ads or manual links?
3. Will `formVersionId` remain the same as the current quiz, or will the backend expose a new form version?
4. Is there a dedicated GTM container for organic? If yes, what is the ID?
5. Do the 2 requested pages mean:
   - a retry quiz with 2 source variations
   - or 2 separate thank-you pages?

## Recommended Next Step

1. Connect `/redo` to the source config in `lib/config/retry-config.ts`.
2. Parametrize WhatsApp, tag, Pixel, and GTM by source.
3. Define whether source will come from query string, path segment, or temperature.
4. Test the end-to-end flow with a real `requestId`.
