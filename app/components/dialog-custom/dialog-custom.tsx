"use client";

import { LeadCaptureForm, LeadCaptureSubmitData } from "@/app/components/form/lead-capture-form";
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
  submitLabel,
  emailInputClassName,
  ddiSelectClassName,
  phoneInputClassName,
  buttonClassName
}: DialogCustomProps) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <button className={btClassName}>
          {btLabel}
        </button>
      </DialogTrigger>

      <DialogContent className="bg-white">
        <DialogHeader>
          <DialogTitle>Preencha com seus dados para participar</DialogTitle>
          <DialogDescription>
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
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}
