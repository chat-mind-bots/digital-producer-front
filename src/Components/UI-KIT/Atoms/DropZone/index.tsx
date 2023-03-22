import React, { FC, useRef } from "react";
import toast from "react-hot-toast";

import * as ST from "./styled";
import ErrText from "../Input/ErrText";
import { useAppSelector } from "../../../../Hooks/redux";

type DropZoneProps = {
	setUrl: (utl: string) => void;
	errorText?: string;
	isError?: boolean;
	format: ("mp4" | "pdf" | "png" | "jpg")[];
};

const DropZone: FC<DropZoneProps> = ({
	setUrl,
	errorText,
	isError,
	format,
}) => {
	const auth = useAppSelector((state) => state.auth);
	const uploadRef = useRef<any>();
	const progressRef = useRef<any>();

	const UploadFile = () => {
		const token = auth.token ?? "";
		const file = uploadRef.current.files[0];
		const formData = new FormData();
		formData.append("file", file);
		const xhr = new XMLHttpRequest();
		xhr.onreadystatechange = function () {
			if (xhr.readyState == XMLHttpRequest.DONE) {
				setUrl(JSON.parse(xhr.response).url);
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

	const formatCurrent = `${format.map((e) => `.${e}`)}`;

	return (
		<ST.UploadFile>
			<ST.Instruction>Нажмите для загрузки файла.</ST.Instruction>
			<ST.Instruction>
				<ST.InputFile
					type="file"
					name="file"
					ref={uploadRef}
					onChange={UploadFile}
					accept={formatCurrent}
				/>
				Выберите файл формата:{formatCurrent}, на латиннице без пробелов.
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
