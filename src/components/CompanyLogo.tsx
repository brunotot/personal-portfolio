import styles from "./../assets/scss/CompanyLogo.module.scss";

export type CompanyLogoProps = {
	src: string;
};

export default function CompanyLogo(props: CompanyLogoProps) {
	return (
		<div
			style={{ backgroundImage: `url("${props.src}")` }}
			className={`${styles["company-logo"]}`}
		></div>
	);
}
