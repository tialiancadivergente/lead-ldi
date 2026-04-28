import { formatRequestErrorMessage } from "@/app/modules/format-request-error-message";
import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";
import axios from "axios";
import type { PaginaWordpressAliancaWebhookPayload } from "@/lib/webhooks/pagina-wordpress-alianca";

export const usePaginaWordpressAliancaWebhook = () => {
  return useMutation({
    mutationFn: (body: PaginaWordpressAliancaWebhookPayload) => {
      return axios.post<{ success: boolean }>(
        "/api/webhooks/pagina-wordpress-alianca",
        body
      );
    },
    onError: (error) => {
      toast.error(formatRequestErrorMessage(error), {
        duration: 4000,
      });
      return false;
    },
  });
};
