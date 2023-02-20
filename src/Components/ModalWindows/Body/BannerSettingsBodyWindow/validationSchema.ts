import * as Yup from "yup";

import ErrText from "ErrText";
// import RequestStatuses from "RequestStatuses";
// import { BannerEnum } from "Shared/Banner/types/banner.enum";

export const ValidationSchema = Yup.object().shape({
	id: Yup.string(),
	title: Yup.string().required(ErrText.FORMIK.REQUIRED),
	// type: Yup.string().required(ErrText.FORMIK.REQUIRED),
	// role: Yup.string().required(ErrText.FORMIK.REQUIRED),
	urlButton: Yup.string().required(ErrText.FORMIK.REQUIRED),
	textButton: Yup.string().required(ErrText.FORMIK.REQUIRED),
	styleButton: Yup.string().required(ErrText.FORMIK.REQUIRED),
	name: Yup.string().required(ErrText.FORMIK.REQUIRED),
	description: Yup.string().required(ErrText.FORMIK.REQUIRED),
	image: Yup.string().required(ErrText.FORMIK.REQUIRED),
	isThirdPartySource: Yup.bool().required(ErrText.FORMIK.REQUIRED),
	tags: Yup.array().of(
		Yup.object().shape({
			id: Yup.number(),
			name: Yup.string().required(ErrText.FORMIK.REQUIRED),
			background: Yup.string().required(ErrText.FORMIK.REQUIRED),
			color: Yup.string().required(ErrText.FORMIK.REQUIRED),
		})
	),
	// createdAt: Yup.string().required(ErrText.FORMIK.REQUIRED),
	// updatedAt: Yup.string().required(ErrText.FORMIK.REQUIRED),
	// statusCode: Yup.string().required(ErrText.FORMIK.REQUIRED),
});
