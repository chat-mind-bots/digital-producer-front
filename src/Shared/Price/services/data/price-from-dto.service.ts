import { IPriceDTO } from "../../types/module-dto.type";
import { IPriceState } from "../../redux/price.slice";

export const courseFromDtoServiceArray = (dto: IPriceDTO[]): IPriceState[] => {
	return dto.map((course) => {
		const { ...other } = course;

		return {
			...other,
		};
	});
};

export const noteFromDtoServiceObject = (dto: IPriceDTO): IPriceState => {
	const { ...other } = dto;

	return {
		...other,
	};
};
