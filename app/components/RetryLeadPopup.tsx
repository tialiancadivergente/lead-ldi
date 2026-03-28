"use client";

import {
  LeadCaptureForm,
  type LeadCaptureSubmitData,
} from "@/app/components/form/lead-capture-form";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

interface RetryLeadPopupProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  defaultEmail?: string;
  submitError?: string | null;
  onSubmit: (data: LeadCaptureSubmitData) => void | Promise<void>;
}

export default function RetryLeadPopup({
  open,
  onOpenChange,
  defaultEmail = "",
  submitError,
  onSubmit,
}: RetryLeadPopupProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="w-[calc(100vw-24px)] max-w-[760px] rounded-[24px] border border-[#D9D9D9] bg-[#F5F5F5] p-[14px] sm:w-[calc(100vw-32px)] sm:p-[24px] md:p-[32px] max-h-[90vh] overflow-y-auto">
        <DialogHeader className="gap-6">
          <DialogTitle className="text-center font-mulish text-[18px] font-semibold leading-tight text-[#111111] sm:text-[28px] md:text-[40px] pr-8">
            Preencha com seus dados para participar
          </DialogTitle>
        </DialogHeader>

        <LeadCaptureForm
          formId="retry-lead-popup"
          formName="retry-lead-popup"
          defaultValues={{
            email: defaultEmail,
            ddi: "+55",
          }}
          submitLabel="PARTICIPAR GRATUITAMENTE"
          submittingLabel="ENVIANDO..."
          submitError={submitError}
          onSubmit={onSubmit}
          className="space-y-4 sm:space-y-6"
          emailInputClassName="min-h-[60px] sm:min-h-[72px] rounded-[14px] border border-[#D9D9D9] bg-white px-4 sm:px-6 text-[16px] sm:text-[18px] text-[#111111] placeholder:text-[#5E5E5E]"
          ddiSelectClassName="w-[122px] sm:w-[148px] min-h-[60px] sm:min-h-[72px] rounded-l-[14px] border border-[#D9D9D9] bg-white px-3 sm:px-4 text-[16px] sm:text-[18px] text-[#111111] pl-10 sm:pl-12 shrink-0"
          phoneInputClassName="min-h-[60px] sm:min-h-[72px] rounded-r-[14px] border border-l-0 border-[#D9D9D9] bg-white px-4 sm:px-6 text-[16px] sm:text-[18px] text-[#111111] placeholder:text-[#5E5E5E] min-w-0 flex-1"
          buttonClassName="w-full rounded-[14px] bg-[#29C63F] px-4 sm:px-6 py-4 sm:py-5 font-mulish text-[15px] sm:text-[16px] font-extrabold text-white transition-colors duration-200 hover:bg-[#23b337]"
        />
      </DialogContent>
    </Dialog>
  );
}
