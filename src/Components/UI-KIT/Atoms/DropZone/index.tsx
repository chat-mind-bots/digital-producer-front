import React, { FC, useRef } from "react";
import { toast } from "react-hot-toast";

import { getApiUrlService } from "Utils/get-api-url.service";

import * as ST from "./styled";
import ErrText from "../Input/ErrText";
import { useAppSelector } from "../../../../Hooks/redux";
import RequestStatuses from "../../../../Constants/RequestStatuses";

type DropZoneProps = {
	setUrl: (utl: string) => void;
	errorText?: string;
	isError?: boolean;
	format: ("mp4" | "pdf" | "png" | "jpg")[];
	type: "image" | "video" | "document";
	value?: string;
};

const DropZone: FC<DropZoneProps> = ({
	setUrl,
	errorText,
	isError,
	format,
	type,
	value,
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
				JSON.parse(xhr.response).url && setUrl(JSON.parse(xhr.response).url);
			}
		};
		xhr.upload.addEventListener("progress", ProgressHandler, false);
		xhr.addEventListener("load", SuccessHandler, false);
		xhr.addEventListener("error", ErrorHandler, false);
		xhr.addEventListener("abort", AbortHandler, false);
		xhr.open("POST", `${getApiUrlService()}/file/${type}`);
		xhr.setRequestHeader("Authorization", "Bearer " + token);
		xhr.send(formData);
		xhr.response;
	};

	const ErrorHandler = () => {
		toast.error(
			"Произошла ошибка, с вашей стороны, выполните все инструкции которые написаны в блоке для загрузки"
		);
	};
	const AbortHandler = () => {
		toast.error("Произошла ошибка, попробуйте позже");
	};

	const ProgressHandler = (e: any) => {
		const percent = (e.loaded / e.total) * 100;
		progressRef.current.value = Math.round(percent);
	};

	const SuccessHandler = (e: any) => {
		if (e.srcElement.status === RequestStatuses.SUCCESS_201) {
			toast.success("Файл успешно загружен");
			progressRef.current.value = 0;
		} else {
			ErrorHandler();
			progressRef.current.value = 0;
		}
	};

	const formatCurrent = `${format.map((e) => `.${e}`)}`;

	return (
		<ST.UploadFile>
			<ST.Instruction>
				Нажмите для загрузки {value && "другого"} файла.
			</ST.Instruction>
			<ST.Instruction>
				<ST.InputFile
					type="file"
					name="file"
					ref={uploadRef}
					onChange={UploadFile}
					accept={formatCurrent}
				/>
				{value
					? value
					: `Выберите файл формата: ${formatCurrent},${
							type === "video" ? "Файл не должен превышать 200мб." : ""
					  } Все символы должны быть на латинице также название файла без пробелов.`}
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
