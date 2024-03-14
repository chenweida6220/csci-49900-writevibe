// Importing helper modules
import { useCallback, useMemo, useRef, useState } from "react";

// Importing core components
import QuillEditor from "react-quill";

// Importing styles
import "react-quill/dist/quill.snow.css";
import styles from "./styles.module.css";

// Importing Exporter
import Export from "../Exporter/Export";

const Editor = () => {
  // Editor state
  const [value, setValue] = useState("");
  // Editor state for exporting using Deltas
  const [delta, setDelta] = useState("null");

  // Editor ref
  const quill = useRef();

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
        const quillEditor = quill.current.getEditor();

        // Get the current selection range and insert the image at that index
        const range = quillEditor.getSelection(true);
        quillEditor.insertEmbed(range.index, "image", imageUrl, "user");
      };

      reader.readAsDataURL(file);
    };
  }, []);

  const modules = useMemo(() => ({
      toolbar: {
        container: [
          [{ font : []}],
          [{ header: [2, 3, 4, false] }],
          ["bold", "italic", "underline", "blockquote"],
          [{ color: [] }], [{ background: [] }],
          [
            { list: "ordered" },
            { list: "bullet" },
            { indent: "-1" },
            { indent: "+1" },
          ],
          [{ align: [] }], 
          ["link", "image"],
          ["clean"],
        ],
        handlers: {
          image: imageHandler,
        },
      },
      clipboard: {
        matchVisual: true,
      },
    }),
    [imageHandler]
  );

  const formats = [
    "header",
    "bold",
    "italic",
    "underline",
    "strike",
    "blockquote",
    "list",
    "bullet",
    "indent",
    "link",
    "image",
    "color",
    "clean",
  ];

  return (
    <div className={styles.wrapper}>
      <label className={styles.label}>Placeholder</label>
      <QuillEditor
        ref={(el) => (quill.current = el)}
        className={styles.editor}
        theme="snow"
        value={value}
        formats={formats}
        modules={modules}
        onChange={handleChange} //Use the handle change function
      />
      {/*Export the delta to use in Exporter.js*/}
      <div className={styles.exportButton}>
        {delta && <Export delta={delta} />}
      </div>
    </div>
  );
};

export default Editor;