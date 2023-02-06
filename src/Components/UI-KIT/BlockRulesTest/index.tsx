import React, { FC } from "react";
import * as ST from "./styled";

type BlockRulesTestProps = {
	array: BlockRulesTestType[];
};

type BlockRulesTestType = {
	id: number;
	rule: string;
};

const BlockRulesTest: FC<BlockRulesTestProps> = ({ array }) => (
	<ST.Rules>
		{array.map((rule) => (
			<ST.Rule key={`Rule-${rule.id}`}>{rule.rule}</ST.Rule>
		))}
	</ST.Rules>
);

export default BlockRulesTest;
