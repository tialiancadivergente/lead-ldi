"use client";

import React from "react";
import {
	LeadCaptureSubmitData,
} from "@/app/components/form/lead-capture-form";

import HeroSection from "./hero-section";
import SecondSection from "./SecondSection";
import ThirdSection from "./third-section";
import FourthSection from "./fourth-section";
import Footer from "./footer";
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
			<>
				<HeroSection />
				<SecondSection />
				<ThirdSection />
				<FourthSection />
				<FiveSection />
			</>
		</>
	);
}
