import React from "react";
import { saveAs } from "file-saver";
import * as quillToWord from "quill-to-word";

const Export = ({ delta }) => {
    const exportToDocx = async() => {
        
        const quillToWordConfig = {
            exportAs: 'blob'
        };

        //generate the word doc as a blob
        const docAsBlob = await quillToWord.generateWord(delta, quillToWordConfig);

        //Use file-saver to download the docx
        saveAs(docAsBlob, "exported-document.docx");
    };

    return <button onClick={exportToDocx}>Export as DOCX</button>;
};

export default Export;