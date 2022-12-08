import logo from "./../assets/img/logo.svg";
import styles from "./../assets/scss/Logo.module.scss";

export default function Logo() {
	return (
		<div className={styles["logo"]}>
			<img src={logo} alt="Bruno Tot Logo" />
		</div>
	);
}
