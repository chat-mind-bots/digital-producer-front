import { IPriceDTO } from "../../types/module-dto.type";
import { IPriceState } from "../../redux/price.slice";

export const priceToDtoServiceArray = (state: IPriceState[]): IPriceDTO[] => {
	return state.map((course) => {
		const { ...other } = course;

		return {
			...other,
		};
	});
};

export const priceToDtoServiceObject = (dto: IPriceDTO): IPriceState => {
	const { ...other } = dto;

	return {
		...other,
	};
};
