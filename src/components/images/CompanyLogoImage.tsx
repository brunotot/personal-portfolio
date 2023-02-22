export type CompanyLogoProps = {
	src: string;
};

export default function CompanyLogoImage({ src }: CompanyLogoProps) {
	return (
		<div
			style={{ backgroundImage: `url("${src}")` }}
			className="w-[3rem] aspect-square rounded bg-no-repeat bg-[length:100%_100%]"
		></div>
	);
}
