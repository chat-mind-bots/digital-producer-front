import { IModuleDTO } from "../../types/module-dto.type";
import { IModuleState } from "../../redux/module.slice";
import { lessonFromDtoServiceArray } from "../../../Lesson/services/data/lesson-from-dto.service";
import { OwnerFromDtoServiceObject } from "../../../Owner/services/data/owner-from-dto.service";

export const ModuleFromDtoServiceObject = (dto: IModuleDTO): IModuleState => {
	const { _id, logic_number, owner, lessons, ...other } = dto;

	return {
		...other,
		id: _id,
		lessons: lessons ? lessonFromDtoServiceArray(lessons) : [],
		owner: owner ? OwnerFromDtoServiceObject(owner) : undefined,
		logicNumber: logic_number,
	};
};

export const ModuleFromDtoServiceArray = (
	dto: IModuleDTO[]
): IModuleState[] => {
	return dto.map((module) => {
		const { _id, logic_number, owner, lessons, ...other } = module;

		return {
			...other,
			id: _id,
			lessons: lessons ? lessonFromDtoServiceArray(lessons) : [],
			owner: owner ? OwnerFromDtoServiceObject(owner) : undefined,
			logicNumber: logic_number,
		};
	});
};
