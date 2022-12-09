export type TasselProps = {
	className?: string;
};

export default function Tassel({ className = "" }: TasselProps) {
	return <div className={`tassel ${className}`}></div>;
}
