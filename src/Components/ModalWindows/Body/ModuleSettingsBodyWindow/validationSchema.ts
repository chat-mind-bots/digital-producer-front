import * as Yup from "yup";

import ErrText from "Constants/ErrText";

export const ValidationSchema = Yup.object().shape({
	id: Yup.string(),
	name: Yup.string().required(ErrText.FORMIK.REQUIRED),
	logicNumber: Yup.number().required(ErrText.FORMIK.REQUIRED),
});
