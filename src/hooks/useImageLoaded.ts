import { useEffect, useState } from "react";

export default function useImageLoaded(imgPath: string) {
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const image = new Image();
		image.onload = () => setLoading(false);
		image.src = imgPath;
	}, []);

	return loading;
}
