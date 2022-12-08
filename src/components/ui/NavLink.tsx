export type NavLinkProps = {
	children: any;
	section?: string;
	href?: string;
	style?: React.CSSProperties;
	className?: string;
};

export default function NavLink(props: NavLinkProps) {
	const { children, section, href, style, className } = props;

	return (
		<a
			className={
				"uppercase font-jost text-[var(--clr-blue-700)]" +
				(className ? ` ${className}` : "")
			}
			style={style}
			href={href ? href : `#${section}`}
		>
			{children}
		</a>
	);
}
