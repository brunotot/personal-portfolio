export type EducationCardProps = {
	dateFrom: string;
	dateTo: string;
	degree: string;
	schoolName: string;
	schoolCity: string;
	schoolCountry: string;
	skillsLearnt?: string;
};

export default function EducationFragment(props: EducationCardProps) {
	const {
		dateFrom,
		dateTo,
		degree,
		skillsLearnt,
		schoolName,
		schoolCity,
		schoolCountry,
	} = props;

	return (
		<div>
			<p className="font-normal font-chakra text-white text-lg">
				{dateFrom} - {dateTo}
			</p>
			<p className="font-bold tracking-wide font-jost text-2xl text-white mt-4">
				{schoolName}
			</p>

			<p className="mt-1 font-jost text-white">
				{schoolCity}, {schoolCountry}
			</p>
			<p className="mt-6 text-white font-jost font-bold text-lg">{degree}</p>
			{skillsLearnt && <p className="mt-2 text-white">{skillsLearnt}</p>}
		</div>
	);
}
