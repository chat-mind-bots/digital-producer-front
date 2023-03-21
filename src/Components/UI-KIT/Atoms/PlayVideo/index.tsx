import React, { Dispatch, FC, useEffect, useRef } from "react";
import JoLPlayer, { JoLPlayerRef } from "jol-player";

import { ReactComponent as IconPlayVideo } from "Icons/playVideo.svg";

import * as ST from "./styled";
import Colors from "../../../../Colors";

export type PlayVideoProps = {
	isOpen: boolean;
	startVideo?: boolean;
	setStartVideo?: Dispatch<boolean>;
};

const PlayVideo: FC<PlayVideoProps> = ({
	isOpen,
	startVideo,
	setStartVideo,
}) => {
	const videoRef = useRef<JoLPlayerRef>(null!);

	useEffect(() => {
		if (!isOpen) {
			videoRef.current.pause();
		}
	}, [isOpen]);

	return (
		<>
			{!startVideo && (
				<ST.PlayVideo
					isOpen={isOpen}
					onClick={() => {
						videoRef.current.play();
						setStartVideo && setStartVideo(true);
					}}
				>
					<IconPlayVideo />
				</ST.PlayVideo>
			)}

			<ST.Player isOpen={isOpen && !!startVideo}>
				<JoLPlayer
					ref={videoRef}
					// onProgressMouseUp={onProgressMouseUp}
					// onEndEd={onEndEd}
					// onPause={onPause}
					// onProgressMouseDown={onProgressMouseDown}
					// onPlay={onPlay}
					// onTimeChange={onTimeChange}
					// onError={onError}
					// onQualityChange={onQualityChange}
					style={{}}
					option={{
						videoSrc:
							"https://gs-files.oss-cn-hongkong.aliyuncs.com/okr/prod/file/2021/08/31/540p.mp4",
						theme: Colors.BLUE,
						isShowScreenshot: false,
						isShowWebFullScreen: false,
						isShowSet: false,

						poster:
							"https://gs-files.oss-cn-hongkong.aliyuncs.com/okr/prod/file/2021/08/31/1080pp.png",
						language: "en",
						pausePlacement: "center",
						quality: [
							{
								name: "FHD",
								url: "https://gs-files.oss-cn-hongkong.aliyuncs.com/okr/prod/file/2021/08/31/720p.mp4",
							},
							{
								name: "HD",
								url: "https://gs-files.oss-cn-hongkong.aliyuncs.com/okr/prod/file/2021/08/31/540p.mp4",
							},
							{
								name: "SD",
								url: "https://gs-files.oss-accelerate.aliyuncs.com/okr/prod/file/2021/08/31/1630377480138360p.mp4",
							},
						],
					}}
				/>
			</ST.Player>
		</>
	);
};

export default PlayVideo;
