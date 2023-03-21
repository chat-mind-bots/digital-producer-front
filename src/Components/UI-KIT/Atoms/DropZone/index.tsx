import React, { FC, useRef } from "react";
import toast from "react-hot-toast";

import * as ST from "./styled";
import ErrText from "../Input/ErrText";

type DropZoneProps = {
	setUrl: (utl: string) => void;
	errorText?: string;
	isError?: boolean;
};

const DropZone: FC<DropZoneProps> = ({ setUrl, errorText, isError }) => {
	const uploadRef = useRef<any>();
	const progressRef = useRef<any>();

	const UploadFile = () => {
		const token =
			"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6IlN2YXRvc2xhdiIsInN1YiI6NDg3NDQ2MTk5LCJyb2xlcyI6WyJVU0VSIiwiUFJPRFVDRVIiLCJBRE1JTiJdLCJpYXQiOjE2NzkzOTAzNzUsImV4cCI6MTY3OTQ3Njc3NX0.EjVsFURibVyWBr6_x89TKPtEVn0tiTwDSbltioLyswg";
		const file = uploadRef.current.files[0];
		const formData = new FormData();
		formData.append("file", file);
		const xhr = new XMLHttpRequest();
		xhr.onreadystatechange = function () {
			if (xhr.readyState == XMLHttpRequest.DONE) {
				setUrl(
					`file:///Users/svyatoslaczhilin/Documents/GitHub/back-dp-2023/${
						JSON.parse(xhr.response).image_path
					}`
				);
			}
		};
		xhr.upload.addEventListener("progress", ProgressHandler, false);
		xhr.addEventListener("load", SuccessHandler, false);
		xhr.addEventListener("error", ErrorHandler, false);
		xhr.addEventListener("abort", AbortHandler, false);
		xhr.open("POST", "http://localhost:5050/file/upload");
		xhr.setRequestHeader("Authorization", "Bearer " + token);
		xhr.send(formData);
		xhr.response;
	};

	const ErrorHandler = () => {
		toast.error("Произошла ошибка, попробуйте позже");
	};
	const AbortHandler = () => {
		toast.error("Произошла ошибка, попробуйте позже");
	};

	const ProgressHandler = (e: any) => {
		const percent = (e.loaded / e.total) * 100;
		progressRef.current.value = Math.round(percent);
	};

	const SuccessHandler = () => {
		toast.success("Файл успешно загружен");
		progressRef.current.value = 0;
	};

	return (
		<ST.UploadFile>
			<ST.Instruction>Нажмите для загрузки файла</ST.Instruction>
			<ST.Instruction>
				<ST.InputFile
					type="file"
					name="file"
					ref={uploadRef}
					onChange={UploadFile}
				/>
				SVG, PNG, JPG or GIF
				<ST.Progress
					ref={progressRef}
					value="0"
					max="100"
				/>
			</ST.Instruction>
			{isError && <ErrText value={errorText} />}
		</ST.UploadFile>
	);
};

export default DropZone;
