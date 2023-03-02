import { INewsDTO } from "../../types/news-dto.type";
import { INewsState } from "../../redux/news.slice";
import { tagFromDtoServiceArray } from "../../../Tag/services/data/tag-from-dto.service";

export const newsFromDtoServiceObject = (dto: INewsDTO): INewsState => {
	const { _id, time_read, tags, category_id, ...other } = dto;

	return {
		...other,
		id: _id,
		timeRead: time_read,
		categoryId: category_id,
		tags: tags ? tagFromDtoServiceArray(tags) : [],
	};
};

export const newsFromDtoServiceArray = (dto: INewsDTO[]): INewsState[] => {
	return dto.map((news) => {
		return newsFromDtoServiceObject(news);
	});
};
