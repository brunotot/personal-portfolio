import profileMobile from "./../../assets/img/profile-transparent.png";

export default function ProfileImage() {
	return (
		<div data-aos="zoom-in">
			<div className="aspect-square w-[50vw] max-w-[800px] overflow-hidden border border-2 border-secondary-dark rounded-full bg-secondary-light lg:rounded-none lg:bg-transparent lg:border-none">
				<div
					className="w-full h-full !bg-cover !bg-no-repeat profile-image"
					style={{ background: `url(${profileMobile})` }}
				></div>
			</div>
		</div>
	);
}
