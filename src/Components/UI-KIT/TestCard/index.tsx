import React, { FC } from "react";
import { Link } from "react-router-dom";

import Time from "Components/UI-KIT/Atoms/Time";
import LevelDifficulty from "Components/UI-KIT/Atoms/LevelDificulty";
import { ReactComponent as StatusFalse } from "Icons/StatusFalse.svg";
import { ReactComponent as StatusTrue } from "Icons/StatusTrue.svg";

import * as ST from "./styled";
import { ITestState } from "../../../Shared/Test/redux/test.slice";

const TestCard: FC<ITestState> = ({
	// id,
	name,
	description,
	// question,
	// answers,
	// rightAnswer,
	// owner,
	// createdAt,
	// updatedAt,
}) => (
	<Link to={"url"}>
		<ST.TestCard>
			<ST.Title>{name}</ST.Title>
			<ST.Description>{description}</ST.Description>
			<LevelDifficulty
				data={{
					curren: 2,
					max: 3,
				}}
			/>
			<Time value={`Время для прохождения: ${"@"} часа`} />
			<ST.Info>
				<StatusFalse />
				Максимум:{"@"}/{"@"}
			</ST.Info>
			<ST.Info>
				<StatusFalse />
				Для зачета:{"@"}/{"@"}
			</ST.Info>
			{status ? (
				<ST.Info>
					<StatusTrue />
					Пройден
				</ST.Info>
			) : (
				<ST.Info>
					<StatusFalse />
					Не пройден
				</ST.Info>
			)}
		</ST.TestCard>
	</Link>
);

export default TestCard;
