import React, { useMemo, useRef, useState } from "react";
import Slider from "react-slick";
import "./../assets/scss/Skills.scss";
import SkillDescription, {
	ExperienceProficiencyValue,
} from "./SkillDescription";

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
		<div className="p-4 bg-[var(--clr-blue-300)] flex flex-col md:flex-row">
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
			<div className="min-w-[320px] p-4 my-auto mx-0">
				<Slider
					ref={slider}
					beforeChange={afterChange}
					dots={true}
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
	);
};

export default Skills;
