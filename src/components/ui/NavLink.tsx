export type NavLinkProps = {
	children: any;
	section?: string;
	href?: string;
	style?: React.CSSProperties;
	className?: string;
	download?: boolean;
	innerRef?: React.LegacyRef<HTMLAnchorElement>;
};

export default function NavLink(props: NavLinkProps) {
	const {
		innerRef: ref,
		children,
		section,
		href,
		style,
		className,
		download = false,
	} = props;

	return (
		<a
			ref={ref}
			className={
				"uppercase font-jost text-tertiary-light transition-colors" +
				(className ? ` ${className}` : "")
			}
			download={download}
			style={style}
			href={href ? href : `#${section}`}
		>
			{children}
		</a>
	);
}
