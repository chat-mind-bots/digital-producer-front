import React, { Dispatch, FC, useState } from "react";

import { ReactComponent as IconSearch } from "Icons/IconSearch.svg";

import * as ST from "./styled";

export type FocusType = boolean;

export type SearchProps = {
	value: string | null;
	setValue: Dispatch<string>;
	placeholder: string;
};

const Search: FC<SearchProps> = ({ value, setValue, placeholder }) => {
	const [focus, setFocus] = useState<FocusType>(false);

	return (
		<ST.Search>
			<ST.SearchWrapper
				isFocus={focus}
				value={value || ""}
			>
				<IconSearch />
				<ST.SearchElement
					placeholder={placeholder}
					onFocus={() => setFocus(true)}
					onBlur={() => setFocus(false)}
					value={value || ""}
					isFocus={focus}
					onChange={(e) => {
						setValue(e.target.value);
					}}
				/>
			</ST.SearchWrapper>
			<ST.SearchList />
		</ST.Search>
	);
};

export default React.memo(Search);
