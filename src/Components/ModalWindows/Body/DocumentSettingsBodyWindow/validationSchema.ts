import * as Yup from "yup";

import ErrText from "ErrText";

export const ValidationSchema = Yup.object().shape({
	id: Yup.string(),
	name: Yup.string().required(ErrText.FORMIK.REQUIRED),
	description: Yup.string().required(ErrText.FORMIK.REQUIRED),
	url: Yup.string().required(ErrText.FORMIK.REQUIRED),
});
