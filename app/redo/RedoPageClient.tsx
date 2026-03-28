"use client";

import { Suspense, useCallback, useEffect, useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";
import TagManager from "react-gtm-module";
import RedoTracking from "@/app/components/RedoTracking";
import RetryLeadPopup from "@/app/components/RetryLeadPopup";
import { type LeadCaptureSubmitData } from "@/app/components/form/lead-capture-form";
import ContainerQuest from "@/app/quiz/container";
import { formatRequestErrorMessage } from "@/app/modules/format-request-error-message";
import {
  isMultipleInputType,
  isOpenInputType,
} from "@/app/modules/lead-score/lead-score-input-type";
import {
  buildLeadScoreAnswerItems,
  readQuestTesteUrlContext,
} from "@/app/modules/lead-score/lead-score-transformers";
import {
  calculateTotalScore,
  formatAnswersForTracking,
  resolveFaixaByTotalScore,
} from "@/app/modules/lead-score/lead-score-tracking-helpers";
import type { AnswerValue } from "@/app/modules/lead-score/lead-score.types";
import { useGetLeadScoreQuestions } from "@/app/modules/lead-score/hook/use-get-lead-score-questions";
import { useCreateLeadScoreStart } from "@/app/modules/lead-score/hook/use-create-lead-score-start";
import { useCreateLeadCapture } from "@/app/modules/lead-capture/hook/use-create-lead-capture";
import type { LeadRegistrationPayload } from "@/app/modules/lead-capture/lead-capture.model";
import useUserIP from "@/app/hooks/useUserIP";
import {
  TRACKING_GA_PROPERTY_ID,
  TRACKING_LEADSCORE_EVENT_ID,
  TRACKING_LEADSCORE_EVENT_NAME,
  TRACKING_LEADSCORE_RESPONSES_WEBHOOK,
  TRACKING_LEADSCORE_SUMMARY_WEBHOOK,
} from "@/lib/config/tracking";
import { DEFAULT_QUEST_FORM_VERSION_ID } from "@/lib/config/quest-config";
import { LEAD_TRACK_CONFIG } from "@/lib/config/lead-track-config";
import {
  getRetryChannelConfig,
  resolveRetrySource,
  type RetrySource,
} from "@/lib/config/retry-config";
import {
  getTrackingCookies,
  getTrackingPageInfo,
  getTrackingUtmInfo,
} from "@/lib/tracking/lead-tracking-browser";
import { getTagByTemperatureOro } from "@/lib/temperature-utils";
import { sendLeadScoreTracking } from "@/lib/tracking/leadScoreTracking";
import { sendLeadTracking } from "@/lib/tracking/leadTracking";

interface RedoPageClientProps {
  initialSource?: string | null;
  initialTheme?: string | null;
  initialTemperature?: string | null;
  initialVersion?: string | null;
}

interface RedoLeadContact {
  email: string;
  phone: string;
}

function RedoPageContent({
  initialSource,
  initialTheme,
  initialTemperature,
  initialVersion,
}: RedoPageClientProps) {
  const searchParams = useSearchParams();
  const [answers, setAnswers] = useState<Record<string, AnswerValue>>({});
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [formVersionId, setFormVersionId] = useState<string>("");
  const [leadRegistrationRequestId, setLeadRegistrationRequestId] = useState("");
  const [temperature, setTemperature] = useState(initialTemperature || "f");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [domain, setDomain] = useState<string>("");
  const [temperatura, setTemperatura] = useState<string | null>(
    initialTemperature || null
  );
  const [launch, setLaunch] = useState<string>("[ORO][MAR26]");
  const [theme, setTheme] = useState(initialTheme || "1");
  const [retrySource, setRetrySource] = useState<RetrySource>(
    resolveRetrySource(initialSource)
  );
  const [isLeadFormVisible, setIsLeadFormVisible] = useState(false);
  const [leadFormError, setLeadFormError] = useState<string | null>(null);

  const userIp = useUserIP();
  const mutationCreateLeadScoreStart = useCreateLeadScoreStart();
  const mutationCreateLeadCapture = useCreateLeadCapture();
  const { launch: leadLaunch, season, tag_id } = LEAD_TRACK_CONFIG;
  const manualVersion = initialVersion || "v1";

  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

    setDomain(window.location.hostname);
  }, []);

  useEffect(() => {
    const temperatureParam = searchParams.get("temperature") || initialTemperature;
    setTemperatura(temperatureParam);
  }, [initialTemperature, searchParams]);

  useEffect(() => {
    if (!temperatura) {
      return;
    }

    const calculatedLaunch = getTagByTemperatureOro(temperatura);
    if (calculatedLaunch) {
      setLaunch(calculatedLaunch);
    }
  }, [temperatura]);

  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

    const { formVersionId, leadRegistrationRequestId, temperature, theme } =
      readQuestTesteUrlContext(
        window.location.search,
        DEFAULT_QUEST_FORM_VERSION_ID
      );

    const urlParams = new URLSearchParams(window.location.search);
    const sourceParam = urlParams.get("source") || urlParams.get("src");
    const resolvedTemperature = temperature || initialTemperature || "f";
    const resolvedTheme = theme || initialTheme || "1";

    setFormVersionId(formVersionId);
    setLeadRegistrationRequestId(leadRegistrationRequestId || "");
    setTemperature(resolvedTemperature);
    setTheme(resolvedTheme);
    setRetrySource(
      resolveRetrySource(sourceParam || initialSource || resolvedTemperature)
    );
    setEmail(urlParams.get("email") || "");
    setPhone(urlParams.get("phone") || urlParams.get("telefone") || "");
  }, [initialSource, initialTemperature, initialTheme]);

  const retryChannelConfig = useMemo(() => {
    return getRetryChannelConfig(retrySource);
  }, [retrySource]);

  const {
    data: questions = [],
    isPending: isQuestionsPending,
    isFetching: isQuestionsFetching,
    error: questionsError,
    refetch: refetchQuestions,
    dataUpdatedAt: questionsDataUpdatedAt,
  } = useGetLeadScoreQuestions(formVersionId);

  const isFetchingQuestions =
    !formVersionId || isQuestionsPending || isQuestionsFetching;
  const isSubmittingAnswers =
    mutationCreateLeadScoreStart.isPending || mutationCreateLeadCapture.isPending;

  const fetchError = useMemo(() => {
    if (!questionsError) {
      return null;
    }

    return formatRequestErrorMessage(questionsError);
  }, [questionsError]);

  useEffect(() => {
    if (!questionsDataUpdatedAt) {
      return;
    }

    setAnswers({});
    setCurrentQuestion(0);
    setSubmitError(null);
    setSubmitSuccess(false);
    setIsLeadFormVisible(false);
    setLeadFormError(null);
  }, [questionsDataUpdatedAt]);

  const whatsappUrl = useMemo(() => {
    return retryChannelConfig.whatsappUrl;
  }, [retryChannelConfig.whatsappUrl]);

  const fetchQuestions = useCallback(async () => {
    await refetchQuestions();
  }, [refetchQuestions]);

  const currentQuestionData = questions[currentQuestion];
  const selectedValue = currentQuestionData
    ? answers[currentQuestionData.id]
    : "";
  const selectedSingleValue =
    typeof selectedValue === "string" ? selectedValue : "";
  const selectedMultipleValue = Array.isArray(selectedValue)
    ? selectedValue
    : [];

  const isCurrentQuestionAnswered = useMemo(() => {
    if (!currentQuestionData) {
      return false;
    }

    if (!currentQuestionData.required) {
      return true;
    }

    if (isMultipleInputType(currentQuestionData.inputType)) {
      return selectedMultipleValue.length > 0;
    }

    return selectedSingleValue.trim().length > 0;
  }, [
    currentQuestionData,
    selectedMultipleValue.length,
    selectedSingleValue,
  ]);

  const handleAnswer = (value: string) => {
    if (!currentQuestionData) {
      return;
    }

    setAnswers((previous) => ({
      ...previous,
      [currentQuestionData.id]: value,
    }));
  };

  const handleMultipleAnswer = (value: string) => {
    if (!currentQuestionData) {
      return;
    }

    setAnswers((previous) => {
      const previousValue = previous[currentQuestionData.id];
      const selectedItems = Array.isArray(previousValue) ? previousValue : [];
      const exists = selectedItems.includes(value);
      const nextItems = exists
        ? selectedItems.filter((item) => item !== value)
        : [...selectedItems, value];

      return {
        ...previous,
        [currentQuestionData.id]: nextItems,
      };
    });
  };

  const handleBack = () => {
    if (isLeadFormVisible) {
      setIsLeadFormVisible(false);
      return;
    }

    if (currentQuestion > 0) {
      setCurrentQuestion((previous) => previous - 1);
    }
  };

  const submitLeadScore = async (
    requestIdOverride?: string,
    leadContactOverride?: RedoLeadContact
  ) => {
    const effectiveRequestId = requestIdOverride || leadRegistrationRequestId;
    const effectiveEmail = leadContactOverride?.email || email;
    const effectivePhone = leadContactOverride?.phone || phone;

    if (!effectiveRequestId) {
      throw new Error("requestId nao encontrado para enviar as respostas.");
    }

    const totalScore = calculateTotalScore(questions, answers);
    const faixa = resolveFaixaByTotalScore(totalScore);
    const formattedAnswers = formatAnswersForTracking(questions, answers);

    const detailedAnswers: Record<string, string> = {};
    Object.entries(answers).forEach(([questionId, answerValue]) => {
      const questionObj = questions.find((question) => question.id === questionId);
      const selectedOption = questionObj?.options.find((opt) =>
        Array.isArray(answerValue)
          ? answerValue.includes(opt.value)
          : opt.value === answerValue
      );

      if (!questionObj) {
        return;
      }

      const valueStr =
        typeof answerValue === "string"
          ? answerValue
          : Array.isArray(answerValue)
            ? answerValue.join(", ")
            : "";
      detailedAnswers[questionObj.question] = selectedOption?.label || valueStr;
    });

    const gtmData = {
      email: effectiveEmail,
      phone: effectivePhone,
      answers: formattedAnswers,
      totalScore,
      faixa,
      temperature: temperatura,
      source: retrySource,
    };

    const legacyPayload = {
      ...gtmData,
      detailedAnswers,
      domain,
      launch,
      retryTag: retryChannelConfig.activeCampaignTag,
      retryTagId: retryChannelConfig.activeCampaignTagId,
      utm_source: searchParams.get("utm_source") || "",
      utm_medium: searchParams.get("utm_medium") || "",
      utm_campaign: searchParams.get("utm_campaign") || "",
      utm_content: searchParams.get("utm_content") || "",
      utm_term: searchParams.get("utm_term") || "",
      path: window.location.pathname,
    };

    const leadScoreAnswers: string[] = questions.slice(0, 10).map((question) => {
      const answerValue = answers[question.id];
      if (answerValue === undefined || answerValue === null) {
        return "";
      }

      if (isOpenInputType(question.inputType)) {
        return typeof answerValue === "string"
          ? answerValue
          : answerValue.join(", ");
      }

      if (Array.isArray(answerValue)) {
        return answerValue
          .map((item) => {
            const selectedOption = question.options?.find(
              (opt) => opt.value === item
            );
            return selectedOption?.label || item;
          })
          .join(", ");
      }

      const selectedOption = question.options?.find(
        (opt) => opt.value === answerValue
      );
      return selectedOption?.label || answerValue || "";
    });

    if (TagManager.dataLayer) {
      TagManager.dataLayer({
        dataLayer: {
          event: "leadscore",
          ...gtmData,
        },
      });
    }

    const eventId =
      TRACKING_LEADSCORE_EVENT_ID ||
      `${Date.now()}.${Math.random().toString().slice(2, 8)}`;

    try {
      await sendLeadTracking(
        {
          baseUrl: TRACKING_LEADSCORE_SUMMARY_WEBHOOK,
          eventName: TRACKING_LEADSCORE_EVENT_NAME,
          eventId,
          gaPropertyId: TRACKING_GA_PROPERTY_ID,
        },
          {
            leadEmail: effectiveEmail || undefined,
            leadPhone: effectivePhone || undefined,
            ipAddress: userIp ?? null,
            extraParams: {
            faixa,
            totalScore: totalScore.toFixed(1),
            temperature: temperatura ?? undefined,
            source: retrySource,
            retry_tag_id: retryChannelConfig.activeCampaignTagId,
            domain,
            launch,
            path: window.location.pathname,
          },
        }
      );
    } catch (error) {
      console.error("Erro ao enviar leadscore resumo:", error);
    }

    try {
      await sendLeadScoreTracking({
        baseUrl: TRACKING_LEADSCORE_RESPONSES_WEBHOOK,
        gaPropertyId: TRACKING_GA_PROPERTY_ID,
        answers: leadScoreAnswers,
        extras: {
          email: effectiveEmail || undefined,
          phone: effectivePhone || undefined,
          faixa,
          totalScore: Number(totalScore.toFixed(1)),
          source: retrySource,
          retryTagId: retryChannelConfig.activeCampaignTagId,
        },
      });
    } catch (error) {
      console.error("Erro ao enviar leadscore tracking:", error);
    }

    try {
      const response = await fetch("/api/quiz-proxy", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(legacyPayload),
      });
      await response.json();
    } catch (error) {
      console.error("Error:", error);
    }

    const payload = {
      lead_registration_request_id: effectiveRequestId,
      form_version_id: formVersionId,
      submitted_at: new Date().toISOString(),
      answers: buildLeadScoreAnswerItems(questions, answers),
      raw_payload: {
        source: "frontend",
        step: "quiz",
        gtmData,
      },
    };

    await mutationCreateLeadScoreStart.mutateAsync(payload);
  };

  const handleNext = async () => {
    if (!currentQuestionData) {
      return;
    }

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion((previous) => previous + 1);
      return;
    }

    setIsLeadFormVisible(true);
  };

  const handleLeadCaptureSubmit = async (data: LeadCaptureSubmitData) => {
    try {
      setLeadFormError(null);
      setSubmitError(null);
      setSubmitSuccess(false);

      const resolvedTagId = tag_id(temperatura || temperature);
      const { currentUrl, currentPath, currentPage } = getTrackingPageInfo();
      const { utmObject, getUtmValue } = getTrackingUtmInfo();
      const cookies = getTrackingCookies();

      const payloadDynamo = {
        email: data.email,
        phone: data.normalizedPhone,
        temperature: temperatura || temperature,
        tipo: `retry-${retrySource}`,
        version: manualVersion,
        parametroCompleto: `${currentPage}${currentPath}`,
        domain: currentPage,
        uri: currentPage,
        tagId: resolvedTagId,
        launch: leadLaunch,
        path: window.location.pathname,
      };

      try {
        await fetch("/api/register-lead", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(payloadDynamo),
        });
      } catch (error) {
        console.error("Erro ao registrar lead no dynamo:", error);
      }

      const payload: LeadRegistrationPayload = {
        email: data.email,
        telefone: data.normalizedPhone,
        launch: leadLaunch,
        season,
        tag_id: resolvedTagId,
        page: currentPage,
        path: currentPath,
        utm_source: getUtmValue("utm_source"),
        utm_medium: getUtmValue("utm_medium"),
        utm_campaign: getUtmValue("utm_campaign"),
        utm_content: getUtmValue("utm_content"),
        utm_term: getUtmValue("utm_term"),
        utm_id: getUtmValue("utm_id"),
        utms: utmObject,
        metadados: {
          url: currentUrl,
          referer: document.referrer || "",
          ip: "",
          user_agent: navigator.userAgent || "",
          cookies,
          temperature: (temperatura || temperature) as "f" | "m" | "q" | "org",
        },
      };

      const response = await mutationCreateLeadCapture.mutateAsync(payload);
      const requestId = response.data?.requestId;

      if (!requestId) {
        throw new Error("requestId nao retornado na resposta.");
      }

      setLeadRegistrationRequestId(requestId);
      setEmail(data.email);
      setPhone(data.normalizedPhone);

      await submitLeadScore(requestId, {
        email: data.email,
        phone: data.normalizedPhone,
      });
      setSubmitSuccess(true);
      window.location.href = whatsappUrl;
    } catch (error) {
      console.error("Erro ao finalizar fluxo de retry:", error);
      setLeadFormError(formatRequestErrorMessage(error));
    }
  };

  return (
    <>
      <RedoTracking
        source={retrySource}
        gtmId={retryChannelConfig.gtmId}
        metaPixelId={retryChannelConfig.metaPixelId}
      />
      <RetryLeadPopup
        open={isLeadFormVisible}
        onOpenChange={setIsLeadFormVisible}
        defaultEmail={email}
        submitError={leadFormError}
        onSubmit={handleLeadCaptureSubmit}
      />
      <ContainerQuest
        isFetchingQuestions={isFetchingQuestions}
        fetchError={fetchError}
        fetchQuestions={fetchQuestions}
        currentQuestionData={currentQuestionData}
        submitError={submitError}
        submitSuccess={submitSuccess}
        totalQuestions={questions.length}
        selectedSingleValue={selectedSingleValue}
        selectedMultipleValue={selectedMultipleValue}
        handleAnswer={handleAnswer}
        handleMultipleAnswer={handleMultipleAnswer}
        currentQuestion={currentQuestion}
        handleBack={handleBack}
        handleNext={handleNext}
        isCurrentQuestionAnswered={isCurrentQuestionAnswered}
        isSubmittingAnswers={isSubmittingAnswers}
        whatsappUrl={whatsappUrl}
        theme={theme}
        finalActionLabel={
          currentQuestion === questions.length - 1 ? "CONTINUAR" : undefined
        }
      />
    </>
  );
}

export default function RedoPageClient({
  initialSource,
  initialTheme,
  initialTemperature,
  initialVersion,
}: RedoPageClientProps) {
  return (
    <Suspense fallback={null}>
      <RedoPageContent
        initialSource={initialSource}
        initialTheme={initialTheme}
        initialTemperature={initialTemperature}
        initialVersion={initialVersion}
      />
    </Suspense>
  );
}
