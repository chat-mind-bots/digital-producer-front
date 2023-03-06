import * as Yup from "yup";

import ErrText from "ErrText";

export const ValidationSchema = Yup.object().shape({
	id: Yup.string(),
	name: Yup.string().required(ErrText.FORMIK.REQUIRED),
	description: Yup.string().required(ErrText.FORMIK.REQUIRED),
	question: Yup.string().required(ErrText.FORMIK.REQUIRED),
	answers: Yup.array().of(
		Yup.object().shape({
			id: Yup.string(),
			key: Yup.string().required(ErrText.FORMIK.REQUIRED),
			value: Yup.string().required(ErrText.FORMIK.REQUIRED),
		})
	),
	rightAnswer: Yup.string(),
	rightAnswers: Yup.array().of(Yup.string()),
	isMultiply: Yup.boolean().required(ErrText.FORMIK.REQUIRED),
});
