import CompanyLogo from "../CompanyLogo";
import BadgeList from "../ui/BadgeList";

export type ExperienceCardProps = {
	dateFrom: string;
	dateTo?: string;
	companyName: string;
	companyCity: string;
	companyCountry: string;
	companyLogoSrc?: string;
	jobTitle: string;
	jobDescription: string;
	jobSkills?: string[];
};

export default function ExperienceFragment(props: ExperienceCardProps) {
	const {
		dateFrom,
		dateTo,
		companyName,
		companyCity,
		companyCountry,
		jobTitle,
		jobDescription,
		companyLogoSrc,
		jobSkills = [],
	} = props;

	return (
		<>
			<div className="flex justify-between gap-8">
				<p className="font-bold text-lg text-[var(--clr-blue-500)]">
					{dateFrom} - {dateTo ? dateTo : "Present"}
				</p>
				<p className="font-bold font-jost text-xl text-[var(--clr-blue-600)]">
					{jobTitle}
				</p>
			</div>
			<div className="flex flex-row flex-nowrap items-start gap-2 mt-4">
				{companyLogoSrc && <CompanyLogo src={companyLogoSrc} />}
				<p className="flex-1 tracking-wide font-jost font-bold text-[2rem] text-[var(--clr-blue-700)]">
					{companyName}
				</p>
			</div>

			<p className="mt-1 font-jost text-[var(--clr-blue-400)]">
				{companyCity}, {companyCountry}
			</p>

			<p className="my-6 flex-1 font-bold text-[var(--clr-blue-800)]">
				{jobDescription}
			</p>
			<BadgeList data={jobSkills} />
		</>
	);
}
