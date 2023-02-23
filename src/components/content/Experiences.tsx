import ExperienceFragment from "./../ui/ExperienceFragment";
import notchLogo from "./../../assets/img/notch-logo.png";
import amplexorLogo from "./../../assets/img/amplexor-logo.jpeg";
import Section from "./../ui/Section";

export default function Experiences() {
	return (
		<Section
			id="experience"
			title="Experience"
			containerClassName="bg-slate-500 text-slate-200"
		>
			<ExperienceFragment
				aos="zoom-in"
				dateFrom="2019"
				dateTo="2020"
				companyName="Amplexor"
				companyCity="Zagreb"
				companyCountry="Croatia"
				companyLogoSrc={amplexorLogo}
				jobTitle="Junior Java Software Developer"
				jobSkills={[
					"javascript",
					"java",
					"css",
					"html",
					"sql",
					"bootstrap",
					"jira",
					"eclipse",
					"jsp",
					"tomcat",
				]}
				jobDescription="Developing Life Sciences Solutions application in a team of 5. 
				Mainly worked on backend with code analysis and bugfixing. Developed skills of source control in CVS with tasks management in Jira."
			/>
			<ExperienceFragment
				aos="zoom-in"
				dateFrom="2021"
				companyName="Notch"
				companyCity="Zagreb"
				companyCountry="Croatia"
				companyLogoSrc={notchLogo}
				jobTitle="Fullstack Software Developer"
				jobSkills={[
					"javascript",
					"springboot",
					"java",
					"sass",
					"css",
					"html",
					"sql",
					"bootstrap",
					"jira",
					"vsc",
					"intellij",
					"jquery",
					"thymeleaf",
					"gitlab",
					"mybatis",
				]}
				jobDescription="Developing Science Information System application in a team of 8. 
Developed strong skills including Vanilla JavaScript, jQuery, Thymeleaf, MyBatis and Java Spring Boot. My position was an all-rounder with having both front-end and back-end features to implement including debugging and bugfixing."
			/>
		</Section>
	);
}
