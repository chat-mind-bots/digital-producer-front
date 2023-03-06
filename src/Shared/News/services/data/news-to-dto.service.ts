import { INewsDTO } from "../../types/news-dto.type";
import { INewsState } from "../../redux/news.slice";
import { tagToDtoServiceArray } from "../../../Tag/services/data/tag-to-dto.service";

export const newsToDtoServiceObject = (state: INewsState): INewsDTO => {
	const { id, timeRead, tags, categoryId, ...other } = state;

	return {
		...other,
		_id: id,
		time_read: timeRead,
		category_id: categoryId,
		tags: tags ? tagToDtoServiceArray(tags) : [],
	};
};

export const newsToDtoServiceArray = (state: INewsState[]): INewsDTO[] => {
	return state.map((news) => {
		return newsToDtoServiceObject(news);
	});
};
