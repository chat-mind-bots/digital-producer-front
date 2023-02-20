import { ITag } from "Shared/Types/tag.type";
import { UserRoleEnum } from "Shared/Auth/types/role.enum";
import { BannerEnum } from "Shared/Banner/types/banner.enum";
import { ButtonSwitchStyleEnum } from "Components/ButtonSwitchStyle/button-switch-style.enum";

export interface IBannerDTO {
	_id: string;
	title: string;
	type?: BannerEnum;
	role?: UserRoleEnum;
	url_button: string;
	text_button: string;
	style_button?: ButtonSwitchStyleEnum;
	name: string;
	description: string;
	image: string;
	is_third_party_source: boolean;
	tags: ITag[];
	createdAt: string;
	updatedAt: string;
	error?: string;
}
