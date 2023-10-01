import { IBannerDTO } from "Shared/Banner/types/banner-dto.type";
import { IBannerState } from "Shared/Banner/redux/banner.slice";
import { getFrontendUrlService } from "Utils/get-frontend-url.service";

import { tagToDtoServiceArray } from "../../../Tag/services/data/tag-to-dto.service";

const URL = `${getFrontendUrlService()}/`;

export const bannerToDtoServiceObject = (dto: IBannerState): IBannerDTO => {
	const {
		id,
		urlButton,
		textButton,
		styleButton,
		isThirdPartySource,
		tags,
		...other
	} = dto;

	return {
		...other,
		_id: id,
		url_button: isThirdPartySource ? `${URL}${urlButton}` : urlButton,
		text_button: textButton,
		style_button: styleButton,
		is_third_party_source: isThirdPartySource,
		tags: tagToDtoServiceArray(tags),
	};
};
