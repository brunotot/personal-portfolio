import ExperienceFragment from "./../ui/ExperienceFragment";
import Section from "./../ui/Section";
import tsrb from "./../../assets/img/tsrb.png";
import tvz from "./../../assets/img/tvz.png";

export default function Educations() {
	return (
		<Section
			id="education"
			title="Education"
			containerClassName="bg-slate-700 text-slate-200"
		>
			<ExperienceFragment
				aos="zoom-in"
				dateFrom="2013"
				dateTo="2017"
				companyName="Technical School Ruđer Bošković"
				companyCity="Zagreb"
				companyCountry="Croatia"
				companyLogoSrc={tsrb}
				jobTitle="High School Diploma"
				jobSkills={[]}
				jobDescription=""
			/>
			<ExperienceFragment
				aos="zoom-in"
				dateFrom="2018"
				dateTo="2021"
				companyName="Zagreb University of Applied Sciences"
				companyCity="Zagreb"
				companyCountry="Croatia"
				companyLogoSrc={tvz}
				jobTitle="Bachelor's Degree"
				jobSkills={[]}
				jobDescription=""
			/>
		</Section>
	);
}
