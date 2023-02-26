import * as Yup from "yup";

import ErrText from "ErrText";

export const ValidationSchema = Yup.object().shape({
	id: Yup.string(),
	title: Yup.string().required(ErrText.FORMIK.REQUIRED),
	tagsColor: Yup.string().required(ErrText.FORMIK.REQUIRED),
});
