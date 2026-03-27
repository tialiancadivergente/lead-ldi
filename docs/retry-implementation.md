# Retry LDI

## Objective

Provide a standalone retry route that reuses the existing quiz layout and question set, but runs the capture flow in reverse:

1. User answers the quiz first
2. User fills email and WhatsApp at the end
3. The app creates the lead
4. The app submits the quiz answers using the returned `requestId`

## Current Status

### Implemented

1. Added standalone retry routes without changing the original landing-to-quiz flow.
2. Kept the original `/quiz` flow intact.
3. Added retry config in `lib/config/retry-config.ts` for:
   - ActiveCampaign tag
   - tag id
   - WhatsApp destination
   - Meta Pixel
   - GTM
4. Added source-based GTM and Meta Pixel handling for retry.
5. Added compact manual routes:
   - `/redo/v1/t/f`
   - `/redo/v1/o/org`
6. Inverted the retry flow:
   - quiz first
   - lead form last
7. Confirmed the legacy quiz proxy now receives:
   - email
   - phone
   - answers
   - retry metadata

### Remaining

1. Validate the organic route end-to-end in the browser.
2. Confirm whether organic should remain without GTM.
3. Decide the final WhatsApp URL convention the team will send manually.

## Final Flow

The retry route now works like this:

1. User opens a manual retry URL.
2. The app loads the same questions used by the quiz backend.
3. User answers all questions.
4. After the last question, the app shows the email + WhatsApp form.
5. On form submit, the app sends the first lead request.
6. The backend returns `requestId`.
7. The app sends the quiz answers using that `requestId`.
8. The app redirects the user to the correct WhatsApp group.

## Manual Routes

### Traffic

```txt
/redo/v1/t/f
```

### Organic

```txt
/redo/v1/o/org
```

Notes:

- `v1` is the version segment
- `t` resolves to traffic
- `o` resolves to organic
- the last segment is the temperature fallback used by the route

## Configuration

File:

- `lib/config/retry-config.ts`

### Traffic

- `activeCampaignTag`: `[LDI] ABR26`
- `activeCampaignTagId`: `120693`
- `whatsappUrl`: `https://redirects.aliancadivergente.com.br/ldi`
- `metaPixelId`: `2197480187447654`
- `gtmId`: `GTM-WKPB8M8L`

### Organic

- `activeCampaignTag`: `[LDI] ABR26 ORG`
- `activeCampaignTagId`: `120700`
- `whatsappUrl`: `https://redirects.aliancadivergente.com.br/ldi-org`
- `metaPixelId`: `1748628899086420`
- `gtmId`: `null`

## Files Involved

- `app/redo/page.tsx`
- `app/redo/RedoPageClient.tsx`
- `app/redo/[version]/[source]/[temperature]/[[...slug]]/page.tsx`
- `app/components/RedoTracking.tsx`
- `app/components/GoogleTagManager.tsx`
- `app/quiz/container.tsx`
- `lib/config/retry-config.ts`

## Request Sequence

### Step 1: legacy lead registration

Sent to:

- `POST /api/register-lead`

Used to keep the parallel legacy registration behavior.

### Step 2: official lead registration

Sent to:

- `POST /api/lead-registration/start`

This returns the `requestId`.

Example shape:

```json
{
  "email": "lead@example.com",
  "telefone": "+5531999999999",
  "launch": "LDI",
  "season": "ABR26",
  "tag_id": "120693"
}
```

### Step 3: legacy quiz payload

Sent to:

- `POST /api/quiz-proxy`

Example shape:

```json
{
  "email": "lead@example.com",
  "phone": "+5531999999999",
  "source": "traffic",
  "retryTag": "[LDI] ABR26",
  "retryTagId": "120693",
  "answers": {},
  "totalScore": 122.59,
  "faixa": "Faixa E"
}
```

### Step 4: official lead score submission

Sent to:

- `POST /api/lead-score/start`

Example shape:

```json
{
  "lead_registration_request_id": "request-id",
  "form_version_id": "form-version-id",
  "submitted_at": "iso-date",
  "answers": [],
  "raw_payload": {
    "source": "frontend",
    "step": "quiz",
    "gtmData": {}
  }
}
```

## Browser Validation

### Traffic URL

```txt
http://localhost:3000/redo/v1/t/f
```

### Organic URL

```txt
http://localhost:3000/redo/v1/o/org
```

### Expected behavior

1. Questions load.
2. After the last answer, the lead form appears.
3. After form submit, these requests fire:
   - `/api/register-lead`
   - `/api/lead-registration/start`
   - `/api/quiz-proxy`
   - `/api/lead-score/start`
4. Final redirect goes to the correct WhatsApp group.

### Tracker checks

Traffic:

- GTM container `GTM-WKPB8M8L`
- Meta Pixel `2197480187447654`

Organic:

- no retry GTM container unless configured later
- Meta Pixel `1748628899086420`

## Verified Outcome

The traffic retry route was validated with successful responses for:

- `/api/register-lead`
- `/api/lead-registration/start`
- `/api/quiz-proxy`
- `/api/lead-score/start`

The legacy quiz proxy upstream accepted the payload and returned success after email and phone were moved to the final form step.
