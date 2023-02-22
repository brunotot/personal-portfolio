import profileMobile from "./../../assets/img/profile-transparent.png";

export default function ProfileImage() {
	return (
		<div data-aos="fade-right">
			<div className="aspect-square w-[50vw] max-w-[800px] overflow-hidden border border-2 border-slate-500 rounded-full bg-slate-300 lg:rounded-none lg:bg-transparent lg:border-none">
				<div
					className="w-full h-full !bg-cover !bg-no-repeat"
					style={{ background: `url(${profileMobile})` }}
				></div>
			</div>
		</div>
	);
}
