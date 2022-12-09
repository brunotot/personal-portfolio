import EducationFragment from "./fragments/EducationFragment";
import Gallery from "./ui/Gallery";

export default function Educations() {
	return (
		<Gallery
			id="education"
			title="Education"
			titleDirection="right"
			titleColorWeight={300}
			className="bg-[var(--clr-blue-900)]"
			cardsContainerClassName="w-full flex flex-wrap justify-around"
			gapY={16}
			useChildWrapper={false}
		>
			<EducationFragment
				dateFrom="2018"
				dateTo="2021"
				degree="Bachelor's Degree"
				schoolCity="Zagreb"
				schoolCountry="Croatia"
				schoolName="Zagreb University of Applied Sciences"
			/>
			<EducationFragment
				dateFrom="2013"
				dateTo="2017"
				degree="High School Diploma"
				schoolCity="Zagreb"
				schoolCountry="Croatia"
				schoolName="Technical School Ruđer Bošković"
			/>
		</Gallery>
	);
}
