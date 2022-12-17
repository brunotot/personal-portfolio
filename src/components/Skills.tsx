import React, { useMemo, useRef, useState } from "react";
import Slider from "react-slick";
import "./../assets/scss/Skills.scss";
import SkillDescription, {
	ExperienceProficiencyValue,
} from "./SkillDescription";
import SectionTitle from "./ui/SectionTitle";
import WavyText from "./ui/WavyText";

export type SkillData = { [key: string]: ExperienceProficiencyValue };

export type SkillsProps = {
	data: SkillData;
};

const Skills: React.FC<SkillsProps> = (props) => {
	const { data } = props;
	const skills = useMemo(() => Object.keys(data), []);
	const [activeIndex, setActiveIndex] = useState(0);
	const slider = useRef<Slider>(null);

	function afterChange(currentSlide: number, nextSlide: number) {
		setActiveIndex(nextSlide);
	}

	function onSkillClick(nextSlide: number) {
		setActiveIndex(nextSlide);
		slider.current?.slickGoTo(nextSlide);
	}

	return (
		<div id="skills" className="bg-[var(--clr-blue-300)]">
			<div className="container mx-auto px-8 py-16 flex flex-col md:flex-row-reverse">
				<SectionTitle colorWeight={800} direction="right">
					<WavyText colors="rainbow" text="Skills" useShadow={false} />
				</SectionTitle>
				<div className="gap-x-16 gap-y-4 px-4 pb-4 flex flex-col md:flex-row w-full max-w-full md:max-w-[calc(100%-6rem)]">
					<div className="skills p-4">
						{skills.map((skill, index) => (
							<div
								key={skill}
								data-skill={skill}
								onClick={() => onSkillClick(index)}
								className={`skill cursor-pointer hover:text-[var(--clr-blue-500)] whitespace-nowrap font-jost font-bold text-[var(--clr-blue-800)] ${
									activeIndex === index ? "active" : ""
								}`}
							>
								{skill}
							</div>
						))}
					</div>
					<div className="min-w-[280px] p-4 my-auto mx-0">
						<Slider
							ref={slider}
							adaptiveHeight={true}
							beforeChange={afterChange}
							dots={false}
							arrows={false}
							infinite={true}
							autoplay={true}
							speed={500}
							slidesToShow={1}
							slidesToScroll={1}
						>
							{skills.map((skill) => (
								<div key={skill}>
									<SkillDescription
										proficiency={data[skill]}
										key={skill}
										title={skill}
									/>
								</div>
							))}
						</Slider>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Skills;
