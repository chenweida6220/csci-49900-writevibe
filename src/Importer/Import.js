import React, { useCallback } from "react";
import mammoth from 'mammoth';
import './Import.css';
import { ContextHandler } from '../Context/ContextProvider';
import { Grid, Button } from '@mui/material';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';

const Import = () => {
    const { quillEditor } = React.useContext(ContextHandler);
    const fileInput = React.useRef(null);


    const handleButtonClick = () => {
      fileInput.current.click();
    };
    //Function to handle read of the file
    const handleFileChange = useCallback((event) => {
        const file = event.target.files[0];
        if(!file) {
            return;
        }

        if(file.type === "text/plain") {    //if the import is a txt file
            const reader = new FileReader();
            reader.onload = function (e) {
                quillEditor.clipboard.dangerouslyPasteHTML(e.target.result);
            };
            reader.readAsText(file);
        }
        else if (file.type === "application/vnd.openxmlformats-officedocument.wordprocessingml.document") {     //if the import is a docx
            const reader = new FileReader();
            reader.onload = function (e) {
                mammoth.convertToHtml({ arrayBuffer: e.target.result })
                .then((result) => {
                    quillEditor.clipboard.dangerouslyPasteHTML(result.value);
                })
                .catch((err) => console.error(err));
            };
            reader.readAsArrayBuffer(file);
        }
        else {
            alert("File type not supported! Only .docx and .txt are supported.");
        }
    }, [quillEditor]);

    return (
        <>
          {/*  
          <input
            type="file"
            id="fileInput"
            className="customFileInput"
            accept=".docx,.txt"         //file types allowed
            onChange={handleFileChange}
            />
            */}
            <Grid item xs={12} htmlFor="fileInput" className="customFileInputButton">
              <Button variant='contained' startIcon={<CloudUploadIcon />} onClick={handleButtonClick}>Upload File </Button>
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
            {/*
            <label htmlFor="fileInput" className="customFileInputLabel">
                Upload File
            </label>
            */}
        </>
    );
};

export default Import;
