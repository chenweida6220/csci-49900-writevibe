import React, { useState, useContext } from "react";
import { saveAs } from "file-saver";
import * as quillToWord from "quill-to-word";
import { pdfExporter } from "quill-to-pdf";
import './Export.css';
import { EditorStyleContext, ContextHandler } from "../Context/ContextProvider";

import { Grid, Button } from '@mui/material';

import GetAppIcon from '@mui/icons-material/GetApp';
const Export = ({ selectedButton, setSelectedButton}) => {
    const [fileName, setFileName] = useState('exported-document');

    const [format, setFormat] = useState('docx');
    const { lineSpacing } = useContext(EditorStyleContext); 
    const { delta } = useContext(ContextHandler);
    //export the quill delta to docx
    const exportToDocx = async () => {
        if (!delta || !delta.ops) {
            alert("The editor is empty! Please add content.");
            return;
        }
        //ask user for file name
        const userFileName = prompt("Please enter a name for your file: (.docx)", fileName);
        if(userFileName) {
            setFileName(userFileName);
        }
        
        const quilToWordConfig = {
            exportAs: 'blob',
            paragraphStyles: {
                normal: {
                    paragraph: {
                        spacing: {
                            line: lineSpacing,
                        }
                    }
                }
            }
        }
    
        //generate the word doc as a blob
        const docAsBlob = await quillToWord.generateWord(delta, quilToWordConfig);

        //Use file-saver to download the docx
        saveAs(docAsBlob, `${userFileName}.docx`);
    }
    //export the quill delta to plain text
    const exportToTxt = () => {
        if(!delta || !delta.ops) {
            alert("The editor is empty! Please add content.");
            return;
        }

        //Ask user for file name
        const userFileName = prompt("Please enter a name for your file: (.txt)", fileName);
        if(userFileName) {
            setFileName(userFileName);
        }

        //convert delta to plain text
        let text = delta.ops.map(op => op.insert).join("");
        const blob = new Blob([text], { type: "text/plain;charset=utf-8" });
        saveAs(blob, `${userFileName}.txt`);
    };

    // Export the quill dela to PDF
    const exportToPDF = async () => {
        if (!delta || !delta.ops) {     // If there is no content to export
            alert("The editor is empty! Please add content.");
            return;
        }

        //ask user for file name
        const userFileName = prompt("Please enter a name for your file: (.pdf)", fileName);
        if(userFileName) {
            setFileName(userFileName);
        }

        //generate the pdf as a blob
        const pdfAsBlob = await pdfExporter.generatePdf(delta);

        //Use file-saver to download the pdf
        saveAs(pdfAsBlob, `${userFileName}.pdf`);
    };
    
    const testButton = () => {
      console.log("Button clicked, Selected Button: "+ selectedButton);
      console.log("Format: "+ format);
    };

    const handleExport = () => {
        // Get name from exportToDocx
        const userFileName = (fileName);
        if (userFileName) setFileName(userFileName);

        //Export based on the format selected
        if (format === 'docx') {
            exportToDocx();
        }
        else if (format === 'txt') {
            exportToTxt();
        }
        else if (format === 'pdf') {
            exportToPDF();
        }
    };

    return (
    <> 
      <Grid item xs={12}>
        <Button variant={selectedButton === 'DOCX' ? "contained" : "outlined"}
          onClick={() => { setSelectedButton('DOCX'); setFormat('docx')}}>DOCX</Button>

        <Button variant={selectedButton === 'TXT' ? "contained" : "outlined"}
          onClick={() => { setSelectedButton('TXT'); setFormat('txt')}}>TXT</Button>

        <Button variant={selectedButton === 'PDF' ? "contained" : "outlined"}
          onClick={() => { setSelectedButton('PDF'); setFormat('pdf')}}>PDF</Button>

        <Button variant="contained" endIcon={<GetAppIcon />} onClick={handleExport}>Export File</Button>
      </Grid>
    </>
    );
};

export default Export;
