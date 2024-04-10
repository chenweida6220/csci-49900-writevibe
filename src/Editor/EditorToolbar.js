// Importing helper modules
//import { ReactComponent as LineSpacingLogo } from "./line-spacing.svg"
// Importing core components
import { Quill } from "react-quill";
import  LineSpacing from "./ToolbarComponents/LineSpacing.js"

  // Add sizes to whitelist and register them
  const Size = Quill.import("formats/size");
  Size.whitelist = ["1", "2", "3", "4"];
  Quill.register(Size, true);

  // Add fonts to whitelist and register them
  const Font = Quill.import("formats/font");
  Font.whitelist = [
    "arial",
    "comic-sans",
    "courier-new",
    "georgia",
    "helvetica",
    "lucida"
  ];
  Quill.register(Font, true);

  const Background = Quill.import("formats/background");
  Quill.register(Background, true);

  export const modules  = {
      toolbar: {
        container: "#my-custom-toolbar",
          handlers: {

          }
      },
      clipboard: {
        matchVisual: true,
      }
    };
  

  export const formats = [
    "font",
    "size",
    "header",
    "bold",
    "italic",
    "underline",
    "strike",
    "script",
    //"blockquote",
    "list",
    "bullet",
    "indent",
    "link",
    "toolbar",
    "image",
    "color",
    "background",
    "spacing",
    "align",
    "clean",
  ];


 export const EditorToolbar = ( { editorToolbarColor } ) => (
    <div id="my-custom-toolbar" style={{ backgroundColor: editorToolbarColor }}>
      <span className="ql-formats" style= {{ marginRight: '1px'}} >
        <select className="ql-font" defaultValue="arial">
          <option value="arial">Arial</option>
          <option value="comic-sans">Comic Sans</option>
          <option value="courier-new">Courier New</option>
          <option value="georgia">Georgia</option>
          <option value="helvetica">Helvetica</option>
          <option value="lucida">Lucida</option>
        </select>
        <select className="ql-size" defaultValue="medium">
          <option value="extra-small">Size 1</option>
          <option value="small">Size 2</option>
          <option value="medium">Size 3</option>
          <option value="large">Size 4</option>
        </select>
        <select className="ql-header" defaultValue="3">
          <option value="1">Heading</option>
          <option value="2">Subheading</option>
          <option value="3">Normal</option>
        </select>
      </span>
      <span className="ql-formats" style= {{ marginRight: '1px' }}>
        <button className="ql-bold" />
        <button className="ql-italic" />
        <button className="ql-underline" />
        <button className="ql-strike" />
      </span>
      <span className="ql-formats" style= {{ marginRight: '1px'}}>
        <button className="ql-list" value="ordered" />
        <button className="ql-list" value="bullet" />
        <button className="ql-indent" value="-1" />
        <button className="ql-indent" value="+1" />
      </span>
      <span className="ql-formats" style= {{ marginRight: '1px'}}>
        <button className="ql-script" value="super" />
        <button className="ql-script" value="sub" />
        {/* <button className="ql-blockquote" /> */}
        <button className="ql-direction" />
      </span>
      <span className="ql-formats" style= {{ marginRight: '1px'}}>
        <select className="ql-align" />
        <select className="ql-color" />
        <select className="ql-background" />
      </span>
      <span className="ql-formats" style= {{ marginRight: '1px'}}>
        <button className="ql-link" />
        <button className="ql-image" />
      </span>
      <span className="ql-formats" style= {{ marginRight: '1px'}}>
        <button className="ql-formula" />
        { /* <button className="ql-code-block" /> */ }
        <button className="ql-clean" />
      </span>
    <LineSpacing />
    </div>
  );   

  export default EditorToolbar;
