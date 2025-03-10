import { Button } from "@/components/ui/button";

import { Input } from "@/components/ui/input";

export function EnrollmentForm() {
	return (
		<div className="flex">
			<Input type="text" name="zipcode" placeholder="Zipcode" />
			<Button className="">Start Now</Button>
		</div>
	);
}
export function ApplicationForm() {
	return (
		<div className="flex">
			<Input type="email" name="email" placeholder="Your Email" />
			<Button className="">Continue</Button>
		</div>
	);
}
