import imageSrc from "./../../assets/img/profile-transparent.png";
import placeholderSrc from "./../../assets/img/profile-transparent-tiny.png";
import useImageLoaded from "./../../hooks/useImageLoaded";

export default function ProfileImage() {
	const loading = useImageLoaded(imageSrc);

	return (
		<div>
			<div data-aos="zoom-in">
				<div className="aspect-square w-[50vw] max-w-[800px] overflow-hidden border border-2 border-secondary-dark rounded-full bg-secondary-light lg:rounded-none lg:bg-transparent lg:border-none">
					<div
						className="w-full h-full !bg-cover !bg-no-repeat profile-image"
						style={{
							background: `url(${loading ? placeholderSrc : imageSrc})`,
						}}
					></div>
				</div>
			</div>
		</div>
	);
}
