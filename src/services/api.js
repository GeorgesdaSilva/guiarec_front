import axios from "axios";

const api = () => {
	var token = JSON.parse(localStorage.getItem('token'));
	return axios.create({
		baseURL: "http://localhost:3000",
		withCredentials: false,
		headers: {
			"Authorization": `Bearer ${token}`,
		},
	});
	
}

export default api;