const sortPosition = (array: any[]) =>
	array.sort((a, b) => {
		const x = a.logicNumber;
		const y = b.logicNumber;

		return x < y ? -1 : x > y ? 1 : 0;
	});

export default sortPosition;
