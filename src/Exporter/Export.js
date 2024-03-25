import React, { useState } from "react";
import { saveAs } from "file-saver";
import * as quillToWord from "quill-to-word";
import { pdfExporter } from "quill-to-pdf";
import './Export.css';

const Export = ({ delta }) => {
    const [fileName, setFileName] = useState('exported-document');

    const [format, setFormat] = useState('docx');
    
    //export the quill delta to docx
    const exportToDocx = async() => {
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
                            line: 240,
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
    const exportToPDF = async() => {
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
            </div>
            <button className="exportButton" onClick={handleExport}>Export</button>
        </div>
    );
};

export default Export;