import { ICourseDTO } from "../../types/course-dto.type";
import { ICourseState } from "../../redux/course.slice";
import { OwnerFromDtoServiceObject } from "../../../Owner/services/data/owner-from-dto.service";
import { ModuleFromDtoServiceArray } from "../../../Module/services/data/module-from-dto.service";
import { tagFromDtoServiceArray } from "../../../Tag/services/data/tag-from-dto.service";
import { userFromDtoServiceArray } from "../../../Auth/services/data/user-from-dto.service";

export const courseFromDtoServiceArray = (
	dto: ICourseDTO[]
): ICourseState[] => {
	return dto.map((course) => {
		return courseFromDtoServiceObject(course);
	});
};

export const courseFromDtoServiceObject = (dto: ICourseDTO): ICourseState => {
	const {
		_id,
		is_free,
		is_enrolled,
		level_difficulty,
		documents,
		owner,
		sub_category,
		modules,
		logic_number,
		tags,
		students_total,
		students,
		...other
	} = dto;

	let lessonLength = 0;

	modules?.map((module) => {
		module.lessons?.map(() => {
			lessonLength = lessonLength + 1;
		});
	});

	return {
		...other,
		id: _id,
		isFree: is_free,
		isEnrolled: is_enrolled,
		levelDifficulty: level_difficulty + 1,
		logicNumber: logic_number,
		documents: documents
			? documents.map((currentDocument) => {
					const { _id, ...other } = currentDocument;

					return {
						...other,
						id: _id,
					};
			  })
			: [],
		owner: owner ? OwnerFromDtoServiceObject(owner) : undefined,
		subCategory: sub_category,
		modules: modules ? ModuleFromDtoServiceArray(modules) : [],
		tags: tagFromDtoServiceArray(tags),
		moduleLength: modules?.length || 0,
		lessonLength,
		studentsTotal: students_total,
		students: students ? userFromDtoServiceArray(students) : [],
	};
};
