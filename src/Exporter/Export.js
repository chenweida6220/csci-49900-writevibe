import React, { useState } from "react";
import { saveAs } from "file-saver";
import * as quillToWord from "quill-to-word";
import './Export.css';
import { Button } from "@mui/base";

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
        
        const quillToWordConfig = {
            exportAs: 'blob',
            paragraphStyles: {
                normal: {
                    paragraph: {
                        spacing: {
                            line: 240,      //this determines the spacing of the export (this is 1.0)
                        },
                    },                
                },
            },
        };

        //generate the word doc as a blob
        const docAsBlob = await quillToWord.generateWord(delta, quillToWordConfig);

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
            </div>
            <button className="exportButton" onClick={handleExport}>Export</button>
        </div>
    );
};

export default Export;