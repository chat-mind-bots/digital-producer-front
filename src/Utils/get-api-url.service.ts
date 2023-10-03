import * as process from "process";

export const getApiUrlService = () =>
	`${process.env.REACT_APP_MODE === "LOCAL" ? "http" : "https"}://back.${
		process.env.REACT_APP_API_URL
	}/api`;
