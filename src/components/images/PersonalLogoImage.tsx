import defaultLogo from "./../../assets/img/logo.png";

export type LogoProps = {
	src?: string;
};

export default function PersonalLogoImage({ src = defaultLogo }: LogoProps) {
	return (
		<div className="rounded-full">
			<a href="#">
				<img
					src={src}
					className="rounded-full aspect-square w-[3rem]"
					alt="Bruno Tot Logo"
				/>
			</a>
		</div>
	);
}
