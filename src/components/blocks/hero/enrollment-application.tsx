"use client";
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { useState } from "react";
import { ApplicationForm, EnrollmentForm } from "./enrollment-application-form";
import { Button } from "@/components/ui/button";

export default function EnrollmentApplicationForm() {
	const [enrolling, setEnrolling] = useState(true);

	return (
		<Card>
			<CardHeader>
				<CardTitle>Card Title</CardTitle>
				<CardDescription>Card Description</CardDescription>
			</CardHeader>
			<CardContent>
				{enrolling ? <EnrollmentForm /> : <ApplicationForm />}
			</CardContent>
			<CardFooter>
				<Button
					variant={"link"}
					type="button"
					onClick={() => setEnrolling(!enrolling)}
					className=""
				>
					{enrolling
						? "Continue with your application"
						: "Back to new Enrollment"}
				</Button>
			</CardFooter>
		</Card>
	);
}
