import { ICourseDTO } from "../../types/course-dto.type";
import { ICourseState } from "../../redux/course.slice";
import { OwnerToDtoServiceObject } from "../../../Owner/services/data/owner-to-dto.service";
import { documentToDtoServiceArray } from "../../../Document/services/data/document-to-dto.service";
import { ModuleToDtoServiceArray } from "../../../Module/services/data/module-to-dto.service";
import { noteToDtoServiceArray } from "../../../Note/services/data/note-to-dto.service";
import { priceToDtoServiceObject } from "../../../Price/services/data/price-to-dto.service";
import { tagToDtoServiceArray } from "../../../Tag/services/data/tag-to-dto.service";

export const courseToDtoServiceArray = (
	state: ICourseState[]
): ICourseDTO[] => {
	return state.map((course) => {
		return courseToDtoServiceObject(course);
	});
};

export const courseToDtoServiceObject = (state: ICourseState): ICourseDTO => {
	const {
		id,
		isFree,
		levelDifficulty,
		documents,
		owner,
		subCategory,
		modules,
		notes,
		price,
		logicNumber,
		isEnrolled,
		tags,
		...other
	} = state;

	return {
		...other,
		_id: id,
		is_free: isFree,
		is_enrolled: isEnrolled,
		level_difficulty: levelDifficulty - 1,
		logic_number: logicNumber,
		documents: documents ? documentToDtoServiceArray(documents) : [],
		owner: owner ? OwnerToDtoServiceObject(owner) : undefined,
		sub_category: subCategory,
		modules: modules ? ModuleToDtoServiceArray(modules) : [],
		price: price ? priceToDtoServiceObject(price) : undefined,
		notes: notes ? noteToDtoServiceArray(notes) : [],
		tags: tagToDtoServiceArray(tags),
	};
};
