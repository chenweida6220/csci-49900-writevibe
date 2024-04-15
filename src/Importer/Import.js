import React, { useCallback } from "react";
import './Import.css';

const Import = ({ setEditorContent }) => {
    const handleFileChange = useCallback((event) => {
        const file = event.target.files[0];
        if (!file) {
            return;
        }

        if (file.type === "text/plain") { // if the import is a txt file
            const reader = new FileReader();
            reader.onload = (e) => {
                setEditorContent(e.target.result);
            };
            reader.readAsText(file);
        }
        else if (file.type === "application/vnd.openxmlformats-officedocument.wordprocessingml.document") { // if the import is a docx
            convertDocxToHtml(file);
        }
        else {
            alert("File type not supported! Only .docx and .txt are supported.");
        }
    }, [setEditorContent]);

    const convertDocxToHtml = (file) => {
        const formData = new FormData();
        formData.append("file", file);

        fetch('https://v2.convertapi.com/convert/docx/to/html?Secret=ow8KvwVUY1UytJ91', {
            method: 'POST',
            body: formData,
        })
        .then(response => response.json())
        .then(result => {
            // Assuming the HTML content is in result.Files[0].FileData
            // You might need to adjust this based on the actual API response
            const htmlContent = atob(result.Files[0].FileData); // ConvertAPI's FileData is base64 encoded
            setEditorContent(htmlContent);
        })
        .catch(error => {
            console.error('Error converting file:', error);
            alert("Error converting file.");
        });
    };

    return (
        <div className="fileInputWrapper">
            <input
                type="file"
                id="fileInput"
                className="customFileInput"
                accept=".docx,.txt" // file types allowed
                onChange={handleFileChange}
            />
            <label htmlFor="fileInput" className="customFileInputLabel">
                Upload File
            </label>
        </div>
    );
};

export default Import;
