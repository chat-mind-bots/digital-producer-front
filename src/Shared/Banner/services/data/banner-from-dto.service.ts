import { IBannerDTO } from "Shared/Banner/types/banner-dto.type";
import { IBannerState } from "Shared/Banner/redux/banner.slice";

import { tagFromDtoServiceArray } from "../../../Tag/services/data/tag-from-dto.service";

const URL = `${process.env.REACT_APP_URL}/`;

export const bannerFromDtoServiceArray = (
	dto: IBannerDTO[]
): IBannerState[] => {
	return dto.map((banner) => {
		return bannerFromDtoServiceObject(banner);
	});
};

export const bannerFromDtoServiceObject = (dto: IBannerDTO): IBannerState => {
	const {
		_id,
		url_button,
		text_button,
		style_button,
		is_third_party_source,
		tags,
		...other
	} = dto;

	return {
		...other,
		id: _id,
		urlButton: is_third_party_source
			? url_button.replaceAll(URL, "")
			: url_button,
		textButton: text_button,
		styleButton: style_button,
		isThirdPartySource: is_third_party_source,
		tags: tagFromDtoServiceArray(tags),
	};
};
