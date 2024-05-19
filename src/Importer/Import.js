import React, { useCallback, useState } from "react";
import './Import.css';
import { ContextHandler } from '../Context/ContextProvider';
import { Grid, Button } from '@mui/material';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import ConvertApi from 'convertapi-js';

const Import = () => {
    const { quillEditor, value, setValue } = React.useContext(ContextHandler);
    const fileInput = React.useRef(null);
    const [file, setFile] = useState(null);
    const convertApi = ConvertApi.auth('wmigeWMXxVJojbqk'); // Api key
    

    const handleFileChange = async (event) => { 
        const file = event.target.files[0];
        setFile(file);
        
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
                setValue(formattedHtml); // Pass the formatted HTML to onContentChange
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

    const handleConvert = async () => {
        fileInput.current.click();
        
    };

    const fetchHtmlContent = async (url) => {
        try {
            const response = await fetch(url);
            const htmlContent = await response.text();
            setValue(htmlContent); // Update the content in the Editor component
        } catch (error) {
            console.error('Failed to fetch HTML content:', error);
            alert('Failed to load the HTML content.');
        }
    };

    return (
        <>
            <Grid item xs={12} htmlFor="fileInput" className="customFileInputButton">
              <Button variant='contained' startIcon={<CloudUploadIcon />} onClick={handleConvert}>Upload File </Button>
            </Grid>
            <input
                type="file"
                id="fileInput"
                className="customFileInput"
                accept=".docx,.txt"         //file types allowed
                onChange={handleFileChange}
                style={{ display: 'none' }} // hide the default file input
                ref={fileInput}
            />
        </>
    );
};

export default Import;
