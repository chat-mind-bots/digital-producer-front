import * as Yup from "yup";

import ErrText from "Constants/ErrText";

export const ValidationSchema = Yup.object().shape({
	id: Yup.string(),
	name: Yup.string().required(ErrText.FORMIK.REQUIRED),
	description: Yup.string().required(ErrText.FORMIK.REQUIRED),
	image: Yup.string().required(ErrText.FORMIK.REQUIRED),
	timeRead: Yup.string().required(ErrText.FORMIK.REQUIRED),
	role: Yup.string().required(ErrText.FORMIK.REQUIRED),
	categoryId: Yup.string(),
	tags: Yup.array().of(
		Yup.object().shape({
			id: Yup.string(),
			name: Yup.string().required(ErrText.FORMIK.REQUIRED),
			background: Yup.string().required(ErrText.FORMIK.REQUIRED),
			color: Yup.string().required(ErrText.FORMIK.REQUIRED),
		})
	),
});
