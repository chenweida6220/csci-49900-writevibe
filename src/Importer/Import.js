import React, { useCallback } from "react";
import mammoth from 'mammoth';

const Import = ({ setEditorContent }) => {
    //Function to handle read of the file
    const handleFileChange = useCallback((event) => {
        const file = event.target.files[0];
        if(!file) {
            return;
        }

        const reader = new FileReader();
        reader.onload = function (e) {
            mammoth.convertToHtml({ arrayBuffer: e.target.result })
            .then((result) => {
                setEditorContent(result.value);
            })
            .catch((err) => console.error(err));
        };
        reader.readAsArrayBuffer(file);
    }, [setEditorContent]);

    return (
        <div>
            <input type="file" accept=".docx"onChange={handleFileChange}/>
        </div>
    );
};

export default Import;