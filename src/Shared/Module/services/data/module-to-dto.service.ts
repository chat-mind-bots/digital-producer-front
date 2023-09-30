import { IModuleDTO } from "../../types/module-dto.type";
import { IModuleState } from "../../redux/module.slice";
import { lessonToDtoServiceArray } from "../../../Lesson/services/data/lesson-to-dto.service";
import { OwnerToDtoServiceObject } from "../../../Owner/services/data/owner-to-dto.service";

export const ModuleToDtoServiceObject = (state: IModuleState): IModuleDTO => {
	const { id, logicNumber, owner, lessons, ...other } = state;

	return {
		...other,
		_id: id,
		lessons: lessons ? lessonToDtoServiceArray(lessons) : [],
		owner: owner ? OwnerToDtoServiceObject(owner) : undefined,
		logic_number: logicNumber,
	};
};

export const ModuleToDtoServiceArray = (
	state: IModuleState[]
): IModuleDTO[] => {
	return state.map((module) => {
		const { id, logicNumber, owner, lessons, ...other } = module;

		return {
			...other,
			_id: id,
			lessons: lessons ? lessonToDtoServiceArray(lessons) : [],
			owner: owner ? OwnerToDtoServiceObject(owner) : undefined,
			logic_number: logicNumber,
		};
	});
};
