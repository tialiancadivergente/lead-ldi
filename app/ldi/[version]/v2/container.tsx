"use client";

import React from "react";
import {
  LeadCaptureSubmitData,
} from "@/app/components/form/lead-capture-form";

import HeroSection from "./hero-section";
import SecondSection from "./SecondSection";
import ThirdSection from "./third-section";
import FourthSection from "./fourth-section";
import FiveSection from "./five-section";

interface ContainerProps {
  titleRedLine: React.ReactNode | null,
  redLine: React.ReactNode | null,
  formName: string,
  onSubmit: (data: LeadCaptureSubmitData) => void | Promise<void>;
  submitError?: string | null;
}

export default function ContainerTeste({
  titleRedLine,
  redLine,
  formName,
  onSubmit,
  submitError
}: ContainerProps) {
  return (
    <>
      <HeroSection formName={formName} onSubmit={onSubmit} submitError={submitError} />
      <SecondSection formName={formName} onSubmit={onSubmit} submitError={submitError} />
      <ThirdSection formName={formName} onSubmit={onSubmit} submitError={submitError} />
      <FourthSection formName={formName} onSubmit={onSubmit} submitError={submitError} />
      <FiveSection formName={formName} onSubmit={onSubmit} submitError={submitError} />
    </>
  );
}
