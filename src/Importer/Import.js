import React, { useCallback } from "react";
import mammoth from 'mammoth';
import './Import.css';

const Import = ({ setEditorContent }) => {
    //Function to handle read of the file
    const handleFileChange = useCallback((event) => {
        const file = event.target.files[0];
        if(!file) {
            return;
        }

        if(file.type === "text/plain") {    //if the import is a txt file
            const reader = new FileReader();
            reader.onload = function (e) {
                setEditorContent(e.target.result);
            };
            reader.readAsText(file);
        }
        else if (file.type === "application/vnd.openxmlformats-officedocument.wordprocessingml.document") {     //if the import is a docx
            const reader = new FileReader();
            reader.onload = function (e) {
                mammoth.convertToHtml({ arrayBuffer: e.target.result })
                .then((result) => {
                    setEditorContent(result.value);
                })
                .catch((err) => console.error(err));
            };
            reader.readAsArrayBuffer(file);
        }
        else {
            alert("File type not supported! Only .docx and .txt are supported.");
        }
    }, [setEditorContent]);

    return (
        <div className="fileInputWrapper">
            <input
            type="file"
            id="fileInput"
            className="customFileInput"
            accept=".docx,.txt"         //file types allowed
            onChange={handleFileChange}
            />
            <label htmlFor="fileInput" className="customFileInputLabel">
                Upload File
            </label>
        </div>
    );
};

export default Import;