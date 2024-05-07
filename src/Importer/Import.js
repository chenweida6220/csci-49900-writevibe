import React, { useState } from 'react';
import ConvertApi from 'convertapi-js';
import './Import.css';

function Import ({ onContentChange }) {
    const [file, setFile] = useState(null);
    const convertApi = ConvertApi.auth('wmigeWMXxVJojbqk'); // Api key
    

    const handleFileChange = (event) => {
        setFile(event.target.files[0]);
    };

    const handleConvert = async () => {
        if (!file) {
            alert('Please select a file first.');
            return;
        }

        const fileType = file.type;

        // Handling text files
        if (fileType === "text/plain") {
            const reader = new FileReader();
            reader.onload = function (e) {
                const formattedHtml = `<div class="preformatted-text">${e.target.result}</div>`; // Preserves formatting of .txt files
                onContentChange(formattedHtml); // Pass the formatted HTML to onContentChange
            };
            reader.readAsText(file);
            return;
        }

        // Handling DOCX files using convertAPI
        if (fileType === "application/vnd.openxmlformats-officedocument.wordprocessingml.document") {
            const params = convertApi.createParams();
            params.add('file', file);

            try {
                const result = await convertApi.convert('docx', 'html', params);
                const url = result.files[0].Url;
                fetchHtmlContent(url); // Fetch the HTML content from ConvertAPI result
            } catch (error) {
                console.error('Error during conversion:', error);
                alert('Conversion failed.');
            }
            return;
        }

        alert("Unsupported file type. Only .txt and .docx files are supported.");
    };

    const fetchHtmlContent = async (url) => {
        try {
            const response = await fetch(url);
            const htmlContent = await response.text();
            onContentChange(htmlContent); // Update the content in the Editor component
        } catch (error) {
            console.error('Failed to fetch HTML content:', error);
            alert('Failed to load the HTML content.');
        }
    };

    // Helper function to escape HTML characters to prevent XSS attacks
    // const escapeHtml = (text) => {
    //     return text.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&#039;');
    // };

    return (
        <div className="file-input-container">
            <input
                type="file" 
                className="file-input"
                onChange={handleFileChange} 
                accept=".docx,.txt" 
            />
            <button 
                className="import-button"
                onClick={handleConvert}>Import
            </button>
        </div>
    );
}

export default Import;  
