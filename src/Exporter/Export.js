import React, { useState } from "react";
import { saveAs } from "file-saver";
import * as quillToWord from "quill-to-word";
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
        
        const quillToWordConfig = {
            exportAs: 'blob',
            paragraphStyles: {
                normal: {
                    run: {
                        color: 'color',    //default color
                    },
                    paragraph: {
                        spacing: {
                            line: 240,      //this determines the spacing of the export (this is 1.0)
                        },
                        indent: {
                            right: 150,    //how much space before until next line starts it's a weird measurement (twentieth's of a point)
                        },
                    },                
                },
            },
        };

        //Iterate over ops and customize the style based on the quill delta
        delta.ops.forEach(op => {
            if(op.insert && typeof op.insert === "string" && op.attributes && op.attributes.color) {
                //convert quill's color from "#ffffff" to the regular "ffffff" that is expexted by a docx
                const color = op.attributes.color.replace('#', '');     //replace the # with nothing

                //map to different paragraphStyles based on the content
                //this is a simplified approach applying color directly
                //eventually i need to extend this logic to handle various types of text (e.g., headings, block quotes)
                quillToWordConfig.paragraphStyles.normal.run.color = color;
            }
        });

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