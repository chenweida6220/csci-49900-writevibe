import React from "react";
import { saveAs } from "file-saver";
import * as quillToWord from "quill-to-word";

const Export = ({ delta }) => {
    const exportToDocx = async() => {
        if (!delta || !delta.ops) {
            alert("The editor is empty! Please add content.");
            return;
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
        saveAs(docAsBlob, "exported-document.docx");
    };

    return <button onClick={exportToDocx}>Export as DOCX</button>;
};

export default Export;