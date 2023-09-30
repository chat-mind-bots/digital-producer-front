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
				onBlur={(newContent) => setContent(newContent)}
			/>
		</div>
	);
};

export default TextEditorCabinetAdmin;
