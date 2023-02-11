import React, { FC } from "react";

import Loader from "Components/UI-KIT/Loader";
import { useAppSelector } from "Hooks/redux";
import ErrType from "Types/RequestStatusesType";
import ErrStatuses from "RequestStatuses";

import * as ST from "./styled";

type SwitchStatusProps = {
	status?: ErrType;
};

const Initialization = () => {
	const auth = useAppSelector((state) => state.auth);

	return (
		<ST.Initialization>
			<SwitchStatus status={auth.statusCode} />
		</ST.Initialization>
	);
};

const SwitchStatus: FC<SwitchStatusProps> = ({ status }) => {
	switch (status) {
		case ErrStatuses.UNAUTHORIZED:
			return <ST.Title isErr={true}>Произошла ошибка ваш токен умер</ST.Title>;
		case ErrStatuses.PENDING:
			return (
				<>
					<Loader />
					<ST.Title>Пожалуйста, подождите, идет инициализация...</ST.Title>
				</>
			);
		case ErrStatuses.SUCCESS:
			return <ST.Title isCorrect={true}>Успешно</ST.Title>;
		default:
			return <ST.Title>Что-то произошло</ST.Title>;
	}
};
export default Initialization;
