const convertDate = (date: string): string => {
	const year = date.split("-")[0];
	const month = date.split("-")[1];
	const day = date.split("-")[2].substr(0, 2);

	return `${day}-${month}-${year}`;
};

export default convertDate;
