import ExperienceFragment from "./fragments/ExperienceFragment";
import notchLogo from "./../assets/img/notch-logo.png";
import amplexorLogo from "./../assets/img/amplexor-logo.jpeg";
import Gallery from "./ui/Gallery";

export default function Experiences() {
	return (
		<Gallery
			id="experience"
			title="Experience"
			titleDirection="left"
			cardsContainerClassName="flex flex-col justify-center gap-8"
		>
			<ExperienceFragment
				dateFrom="2021"
				companyName="Notch"
				companyCity="Zagreb"
				companyCountry="Croatia"
				companyLogoSrc={notchLogo}
				jobTitle="Fullstack Software Developer"
				jobSkills={[
					"JavaScript",
					"Spring Boot",
					"Java",
					"jQuery",
					"SASS",
					"Cascading Style Sheets (CSS)",
					"HTML5",
					"SQL",
					"Thymeleaf",
					"Bootstrap",
					"GitLab",
					"MyBatis",
					"JIRA",
					"Microsoft Visual Studio Code",
					"IntelliJ IDEA",
				]}
				jobDescription="Developing Science Information System application in a team of 8. 
Developed strong skills including Vanilla JavaScript, jQuery, Thymeleaf, MyBatis and Java Spring Boot. My position was an all-rounder with having both front-end and back-end features to implement including debugging and bugfixing."
			/>

			<ExperienceFragment
				dateFrom="2019"
				dateTo="2020"
				companyName="Amplexor"
				companyCity="Zagreb"
				companyCountry="Croatia"
				companyLogoSrc={amplexorLogo}
				jobTitle="Junior Java Software Developer"
				jobSkills={[
					"JavaScript",
					"Java",
					"Cascading Style Sheets (CSS)",
					"HTML5",
					"SQL",
					"Bootstrap",
					"JIRA",
					"Eclipse",
					"JavaServer Pages (JSP)",
					"Tomcat",
					"DQL",
				]}
				jobDescription="Developing Life Sciences Solutions application in a team of 5. 
				Mainly worked on backend with code analysis and bugfixing. Developed skills of source control in CVS with tasks management in Jira."
			/>
		</Gallery>
	);
}
