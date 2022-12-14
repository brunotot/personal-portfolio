export type LinkProps = {
	text?: string;
	href: string;
	target?: React.HTMLAttributeAnchorTarget;
	type?: LinkType;
	icon?: JSX.Element;
	className?: string;
};

export type LinkType = "tel" | "mail" | "basic";

export default function Link(props: LinkProps) {
	const {
		href,
		target = "_blank",
		type = "basic",
		icon,
		text,
		className = "flex flex-nowrap gap-3 items-center justify-center",
	} = props;
	const hrefPrefix =
		type === "basic" ? "" : type === "tel" ? "tel:" : "mailto:";
	return (
		<a
			className={`font-jost font-medium ${className}`}
			target={target}
			href={`${hrefPrefix}${href}`}
		>
			{icon && <span>{icon}</span>}
			{text && <span>{text}</span>}
		</a>
	);
}
