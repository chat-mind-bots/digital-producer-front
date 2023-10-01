import * as process from "process";

export const getApiUrlService = () =>
	`${process.env.REACT_APP_MODE === "LOCAL" ? "http" : "https"}://${
		process.env.REACT_APP_API_URL
	}/api`;
