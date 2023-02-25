import { ImageNameType } from "../../services/ImageService";
import CompanyLogo from "../images/CompanyLogoImage";
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
	jobSkills?: ImageNameType[];
	aos?: string;
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
		aos,
	} = props;

	return (
		<div
			data-aos={aos}
			className="gap-4 bg-tertiary-darker text-tertiary-light flex basis-full md:basis-[calc(50%-1rem)] xl:basis-[calc(33%-2rem)] flex-col p-4 rounded card-shadow border border-primary-darker"
		>
			<div className="flex flex-wrap justify-between gap-x-4">
				<p className="whitespace-nowrap font-bold text-lg text-tertiary-base">
					{dateFrom} - {dateTo ? dateTo : "Present"}
				</p>
				<p className=" font-bold font-jost text-xl text-primary-base">
					{jobTitle}
				</p>
			</div>

			<div>
				<div className="flex flex-row flex-nowrap items-center gap-2">
					{companyLogoSrc && <CompanyLogo src={companyLogoSrc} />}
					<p className="company-name flex-1 leading-none font-jost font-bold text-tertiary-light">
						{companyName}
					</p>
				</div>

				<p className="mt-1 font-jost text-tertiary-base">
					{companyCity}, {companyCountry}
				</p>
			</div>

			<p className="flex-1 font-bold text-tertiary-light">{jobDescription}</p>

			<BadgeList data={jobSkills} variant="outlined" />
		</div>
	);
}
