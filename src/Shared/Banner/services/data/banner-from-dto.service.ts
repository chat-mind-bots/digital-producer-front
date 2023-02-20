import { IBannerDTO } from "Shared/Banner/types/banner-dto.type";
import { IBannerState } from "Shared/Banner/redux/banner.slice";

const URL = `${process.env.REACT_APP_URL}/`;

export const bannerFromDtoServiceArray = (
	dto: IBannerDTO[]
): IBannerState[] => {
	return dto.map((item) => {
		const {
			_id,
			url_button,
			text_button,
			style_button,
			is_third_party_source,
			...other
		} = item;

		return {
			...other,
			id: _id,
			urlButton: is_third_party_source
				? url_button.replaceAll(URL, "")
				: url_button,
			textButton: text_button,
			styleButton: style_button,
			isThirdPartySource: is_third_party_source,
		};
	});
};

export const bannerFromDtoServiceObject = (dto: IBannerDTO): IBannerState => {
	const {
		_id,
		url_button,
		text_button,
		style_button,
		is_third_party_source,
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
	};
};

export const bannerToDtoServiceObject = (dto: IBannerState): IBannerDTO => {
	const {
		id,
		urlButton,
		textButton,
		styleButton,
		isThirdPartySource,
		...other
	} = dto;

	return {
		...other,
		_id: id,
		url_button: isThirdPartySource ? `${URL}${urlButton}` : urlButton,
		text_button: textButton,
		style_button: styleButton,
		is_third_party_source: isThirdPartySource,
	};
};
