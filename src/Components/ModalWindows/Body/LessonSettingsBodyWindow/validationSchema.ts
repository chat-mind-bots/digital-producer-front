import * as Yup from "yup";

import ErrText from "Constants/ErrText";

export const ValidationSchema = Yup.object().shape({
	id: Yup.string(),
	name: Yup.string().required(ErrText.FORMIK.REQUIRED),
	description: Yup.string().required(ErrText.FORMIK.REQUIRED),
	image: Yup.string().required(ErrText.FORMIK.REQUIRED),
	video: Yup.string().required(ErrText.FORMIK.REQUIRED),
	levelDifficulty: Yup.number()
		.required(ErrText.FORMIK.REQUIRED)
		.max(3, "Максимум 3")
		.min(1, "Минимум 1"),
	logicNumber: Yup.number().required(ErrText.FORMIK.REQUIRED),
});
