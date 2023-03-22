import * as Yup from "yup";

import ErrText from "Constants/ErrText";

export const ValidationSchema = Yup.object().shape({
	id: Yup.string(),
	name: Yup.string().required(ErrText.FORMIK.REQUIRED),
	description: Yup.string().required(ErrText.FORMIK.REQUIRED),
	duration: Yup.number().required(ErrText.FORMIK.REQUIRED),
});
