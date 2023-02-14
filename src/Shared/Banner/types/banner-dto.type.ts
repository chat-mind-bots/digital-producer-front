import { ITag } from "Shared/Types/tag.type";

export interface IBannerDTO {
	_id: string;
	id: number;
	title: string;
	type: string;
	role: string;
	url_button: string;
	text_button: string;
	style_button: string;
	name: string;
	description: string;
	image: string;
	is_third_party_source: boolean;
	tags: ITag[];
	createdAt: string;
	updatedAt: string;
}
