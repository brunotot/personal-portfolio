import placeholderSrc from "./../../assets/img/profile-transparent-tiny.png";
import imageSrc from "./../../assets/img/profile-transparent.png";
import useImageLoaded from "./../../hooks/useImageLoaded";

export default function ProfileImage() {
  const loading = useImageLoaded(imageSrc);

  return (
    <div className="flex h-full w-full justify-center lg:justify-end lg:relative lg:left-24">
      <div data-aos="zoom-in" className="h-full">
        <div className="aspect-square mx-auto w-[55vw] max-w-[380px] lg:mx-0 lg:h-full lg:w-auto lg:max-w-none overflow-hidden border border-2 border-secondary-dark rounded-full bg-secondary-light lg:rounded-none lg:bg-transparent lg:border-none">
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
