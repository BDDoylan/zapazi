import axios from "axios";

export const getUser = async () => {
	try {
		const user = await axios.get("http://localhost:5000/auth/getUser", { withCredentials: true });
		return user.data;
	} catch (err) {
		console.log(err);
	}
};
