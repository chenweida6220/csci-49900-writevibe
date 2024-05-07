// Importing helper modules
import React, { useCallback, useMemo, useRef, 
                useState, useEffect, useContext } from "react";

// Importing core components
import QuillEditor from "react-quill";

// Importing styles
import "react-quill/dist/quill.snow.css";
import styles from "./styles.module.css";
import { EditorStyleContext } from "../Context/ContextProvider.js";

// Importing Exporter
import Export from "../Exporter/Export";

// Importing Importer
import Import from "../Importer/Import";

// Importing Editor Toolbar
import EditorToolbar, { modules, formats } from "./EditorToolbar";

const Editor = ({ editorBgColor, editorToolbarColor }) => {
  // Editor state
  const [value, setValue] = useState("");
  // Editor state for exporting using Deltas
  const [delta, setDelta] = useState(null);

  // Editor Style Context
  const { editorStyle } = React.useContext(EditorStyleContext);

  // Editor ref
  const quillRef = useRef(null);
  // Handler to handle button clicked
  // keeping this around for now just because we may add a button that needs to, well, be handled...
  function handler() {
    console.log(value);
  }

  // Handler to handle changes to the text box
  const handleChange = (content, delta, source, editor) => {
    setValue(content);              //update html content
    setDelta(editor.getContents()); //update delta content
  };

  const imageHandler = useCallback(() => {
    // Create an input element of type 'file'
    const input = document.createElement("input");
    input.setAttribute("type", "file");
    input.setAttribute("accept", "image/*");
    input.click();

    // When a file is selected
    input.onchange = () => {
      const file = input.files[0];
      const reader = new FileReader();

      // Read the selected file as a data URL
      reader.onload = () => {
        const imageUrl = reader.result;
        const quillEditor = quillRef.current.getEditor();

        // Get the current selection range and insert the image at that index
        const range = quillEditor.getSelection(true);
        quillEditor.insertEmbed(range.index, "image", imageUrl, "user");
      };

      reader.readAsDataURL(file);
    };
  }, []);

  //Import Functionality
  const handleSetContent = (htmlContent) => {
    setValue(htmlContent);
  };

  //Save and Load content from local storage
  //Load Content if any
  useEffect(() => {
    const savedContent = localStorage.getItem('editorContent');
    if (savedContent) {
        handleSetContent(savedContent);
    }
  }, []);

  //Save Content
  useEffect(() => {
    localStorage.setItem('editorContent', value);
  }, [value]);

  return (
    <div className={styles.wrapper}>
      <label className={styles.label}>Most Fun Writing App</label>
      <EditorToolbar editorToolbarColor= {editorToolbarColor } />
      <QuillEditor
        ref={quillRef}
        className={`${styles.editor} myQuillEditor-${editorStyle.lineHeight}`}
        theme="snow"
        style={{ backgroundColor: editorBgColor }}
        value={value}
        formats={formats}
        modules={modules}
        onChange={handleChange} //Use the handle change function
        placeholder={"Write something awesome..."}
      />      {/*Export the delta to use in Exporter.js*/}
      <div className={styles.exportButton}>
        {<Export delta={delta} quillRef={quillRef} />}
      </div>
      <Import onContentChange={handleSetContent} />
    </div>
  );
};

export default Editor;
