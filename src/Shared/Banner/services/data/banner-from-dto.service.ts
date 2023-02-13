import { IBannerDTO } from "Shared/Banner/types/banner-dto.type";
import { IBannerState } from "Shared/Banner/redux/banner.slice";

export const bannerFromDtoService = (dto: IBannerDTO[]): IBannerState[] => {
	return dto.map((item) => {
		const {
			_id,
			url_button,
			text_button,
			style_button,
			third_party_source,
			...other
		} = item;

		return {
			...other,
			id: _id,
			urlButton: url_button,
			textButton: text_button,
			styleButton: style_button,
			thirdPartySource: third_party_source,
		};
	});
};
