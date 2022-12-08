import profileMobile from "./../assets/img/profile-mobile.png";
import profileDesktop from "./../assets/img/profile-desktop.png";

export default function ProfilePhoto() {
	return (
		<div>
			<picture>
				<source media="(min-width:769px)" srcSet={profileDesktop} />
				<img
					className="rounded-full md:rounded-none border md:border-none bg-[var(--clr-blue-400)] md:bg-transparent w-[40vw]"
					src={profileMobile}
				/>
			</picture>
		</div>
	);
}
