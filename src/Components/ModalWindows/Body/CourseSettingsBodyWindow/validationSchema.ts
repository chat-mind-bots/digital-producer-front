import * as Yup from "yup";

import ErrText from "Constants/ErrText";

export const ValidationSchema = Yup.object().shape({
	id: Yup.string(),
	name: Yup.string().required(ErrText.FORMIK.REQUIRED),
	description: Yup.string().required(ErrText.FORMIK.REQUIRED),
	image: Yup.string().required(ErrText.FORMIK.REQUIRED),
	video: Yup.string().required(ErrText.FORMIK.REQUIRED),
	isFree: Yup.boolean().required(ErrText.FORMIK.REQUIRED),
	language: Yup.string().required(ErrText.FORMIK.REQUIRED),
	category: Yup.string().required(ErrText.FORMIK.REQUIRED),
	price: Yup.object().shape({
		actual: Yup.number(),
		discount: Yup.number(),
	}),
	levelDifficulty: Yup.number()
		.required(ErrText.FORMIK.REQUIRED)
		.max(3, "Максимум 3")
		.min(1, "Минимум 1"),
	logicNumber: Yup.number(),
	subCategory: Yup.string().required(ErrText.FORMIK.REQUIRED),
	notes: Yup.array().of(
		Yup.object().shape({
			id: Yup.string(),
			name: Yup.string().required(ErrText.FORMIK.REQUIRED),
			value: Yup.string().required(ErrText.FORMIK.REQUIRED),
		})
	),
	tags: Yup.array().of(
		Yup.object().shape({
			id: Yup.string(),
			name: Yup.string().required(ErrText.FORMIK.REQUIRED),
			background: Yup.string().required(ErrText.FORMIK.REQUIRED),
			color: Yup.string().required(ErrText.FORMIK.REQUIRED),
		})
	),
});
