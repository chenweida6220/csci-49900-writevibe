import React, { useState, useContext } from "react";
import { saveAs } from "file-saver";
import * as quillToWord from "quill-to-word";
import { pdfExporter } from "quill-to-pdf";
import './Export.css';
import { EditorStyleContext } from "../Context/ContextProvider";
import ConvertApi from 'convertapi-js';

const Export = ({ quillRef, delta }) => {
    const [fileName, setFileName] = useState('exported-document');
    const [format, setFormat] = useState('docx');
    const { lineSpacing } = useContext(EditorStyleContext); 

    const convertApi = ConvertApi.auth('wmigeWMXxVJojbqk'); // Authenticate

    // For testing purposes
    const exportToHTML = async () => {
        if (!quillRef.current) {
            alert("The editor is not properly initialized.");
            return;
        }

        // Check if there is content in the editor
        const editor = quillRef.current.getEditor();
        const editorElement = editor.root.innerHTML; // Accessing the innerHTML directly from the editor's root
        if (!editorElement.trim()) {  // Check if the HTML is just whitespace
            alert("The editor is empty! Please add content.");
            return;
        }

        // Ask user for file name
        const userFileName = prompt("Please enter a name for your file: (.html)", fileName);
        if (userFileName) {
            setFileName(userFileName);
        }
        else {
            return; // Editor did not receive a filename, cancel export
        }

        // Create a Blob object containing the HTML content
        const blob = new Blob([editorElement], { type: "text/html;charset=utf-8" });

        // Use file-saver to prompt the user to save the file
        saveAs(blob, `${userFileName}.html`);
    };



    //export the quill delta to docx
    const exportToDocx = async () => {
        if (!quillRef.current) {
            alert("The editor is not properly initialized.");
            return;
        }

        //ask user for file name
        const userFileName = prompt("Please enter a name for your file: (.docx)", fileName);
        if(userFileName) {
            setFileName(userFileName);
        }
        else
        {
            return;
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
    };

    //export the quill delta to plain text
    const exportToTxt = () => {
        if (!delta || !delta.ops) {
            alert("The editor is empty! Please add content.");
            return;
        }

        //Ask user for file name
        const userFileName = prompt("Please enter a name for your file: (.txt)", fileName);
        if (userFileName) {
            setFileName(userFileName);
        }
        else {
            return; // Editor did not receive a filename, cancel export
        }

        //convert delta to plain text
        let text = delta.ops.map(op => op.insert).join("");
        const blob = new Blob([text], { type: "text/plain;charset=utf-8" });
        saveAs(blob, `${userFileName}.txt`);
    };

    // Export the quill delta to PDF
    const exportToPDF = async () => {
        if (!delta || !delta.ops) {     // If there is no content to export
            alert("The editor is empty! Please add content.");
            return;
        }

        //ask user for file name
        const userFileName = prompt("Please enter a name for your file: (.pdf)", fileName);
        if (userFileName) {
            setFileName(userFileName);
        }
        else {
            return; // Editor did not receive a filename, cancel export
        }

        //generate the pdf as a blob
        const pdfAsBlob = await pdfExporter.generatePdf(delta);

        //Use file-saver to download the pdf
        saveAs(pdfAsBlob, `${userFileName}.pdf`);
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
        else if (format === 'html') {
            exportToHTML();
        }
    };

    return (
        <div>
            <div className="fileTypeExport">
                <button
                    className={format === 'docx' ? 'active' : ''}
                    onClick={() => setFormat('docx')}
                >
                    DOCX
                </button>
                <button
                    className={format === 'txt' ? 'active' : ''}
                    onClick={() => setFormat('txt')}
                >
                    TXT
                </button>
                <button
                    className={format === 'pdf' ? 'active' : ''}
                    onClick={() => setFormat('pdf')}
                >
                    PDF
                </button>
                <button
                    className={format === 'html' ? 'active' : ''}
                    onClick={() => setFormat('html')}
                >
                    HTML
                </button>
            </div>
            <button className="exportButton" onClick={handleExport}>Export</button>
        </div>
    );
};

export default Export;
