import React, { useState, useRef } from "react";
import JoditEditor from "jodit-react";

const TextEditorCabinetAdmin = () => {
	const editor = useRef(null);
	const [content, setContent] = useState("");

	return (
		<div>
			<JoditEditor
				ref={editor}
				value={content}
				config={{
					readonly: false,
				}}
				// tabIndex={1} // tabIndex of textarea
				onBlur={(newContent) => setContent(newContent)} // preferred to use only this option to update the content for performance reasons
				// onChange={(newContent) => {
				// 	// eslint-disable-next-line no-console
				// 	console.log(newContent);
				// }}
			/>
		</div>
	);
};

export default TextEditorCabinetAdmin;
