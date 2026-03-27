"use client";

import {
  LeadCaptureForm,
  LeadCaptureSubmitData,
} from "@/app/components/form/lead-capture-form";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

interface DialogCustomProps {
  btLabel?: string;
  btClassName?: string;
  formName: string;
  onSubmit: (data: LeadCaptureSubmitData) => void | Promise<void>;
  submitError?: string | null;
  submitLabel?: string;
  emailInputClassName: string;
  ddiSelectClassName: string;
  phoneInputClassName: string;
  buttonClassName: string;
}

export default function DialogCustom({
  btLabel = "Participar gratuitamente",
  btClassName = "w-full max-w-[300px] h-[50px] bg-[#C0964B] text-white text-sm font-bold mt-8 transition-all duration-200 hover:bg-[#e9cb84] hover:text-black",
  formName,
  onSubmit,
  submitError,
  submitLabel = "Participar gratuitamente",
  emailInputClassName,
  ddiSelectClassName,
  phoneInputClassName,
  buttonClassName,
}: DialogCustomProps) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <button type="button" className={`${btClassName} uppercase`}>
          {btLabel}
        </button>
      </DialogTrigger>

      <DialogContent className="w-[calc(100%-24px)] max-w-[640px] rounded-[16px] border border-[#D9D9D9] bg-[#F5F5F5] p-[16px] sm:p-[20px] md:p-[24px] lg:p-[32px]">
        <DialogHeader className="gap-[20px] md:gap-[24px] lg:gap-[40px]">
          <DialogTitle className="font-mulish font-semibold text-[#111111] text-[18px] sm:text-[20px] md:text-[22px] lg:text-[24px] leading-[100%] tracking-[0] text-center">
            Preencha com seus dados para participar
          </DialogTitle>

          <DialogDescription asChild>
            <div>
              <LeadCaptureForm
                formName={formName}
                onSubmit={onSubmit}
                submitError={submitError}
                submitLabel={submitLabel}
                emailInputClassName={emailInputClassName}
                ddiSelectClassName={ddiSelectClassName}
                phoneInputClassName={phoneInputClassName}
                buttonClassName={buttonClassName}
              />
            </div>
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}
