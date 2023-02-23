export type LinkProps = {
	href: string;
	target?: React.HTMLAttributeAnchorTarget;
	type?: LinkType;
	classNameAppend?: string;
	className?: string;
	children: React.ReactNode;
};

export type LinkType = "tel" | "mail" | "basic";

export default function Link(props: LinkProps) {
	const {
		className = "flex gap-2 items-center justify-center font-jost font-medium",
		classNameAppend = "",
		target = "_blank",
		type = "basic",
		href,
		children,
	} = props;
	const hrefPrefix =
		type === "basic" ? "" : type === "tel" ? "tel:" : "mailto:";
	return (
		<a
			className={`${className} ${classNameAppend}`}
			target={target}
			href={`${hrefPrefix}${href}`}
		>
			{children}
		</a>
	);
}
