import { toast, ToastOptions } from "react-toastify";

const TOAST_OPTS: ToastOptions = {
	position: "top-right",
	autoClose: 5000,
	hideProgressBar: false,
	closeOnClick: true,
	pauseOnHover: true,
	draggable: true,
	progress: undefined,
	theme: "dark",
};

class ToastService {
	success(message: string) {
		return toast.success(message, TOAST_OPTS);
	}

	error(message: string) {
		return toast.error(message, TOAST_OPTS);
	}
}

export default new ToastService();
