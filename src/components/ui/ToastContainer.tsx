import { ToastContainer as Toastify } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function ToastContainer() {
	return (
		<Toastify
			position="top-right"
			autoClose={5000}
			hideProgressBar={false}
			newestOnTop={false}
			closeOnClick
			rtl={false}
			pauseOnFocusLoss
			draggable
			pauseOnHover
			theme="dark"
		/>
	);
}
