// Importing helper modules
//import { ReactComponent as LineSpacingLogo } from "./line-spacing.svg"
// Importing core components
import { Quill } from "react-quill";
import  LineSpacing from "./ToolbarComponents/LineSpacing.js"

  // Add sizes to whitelist and register them
  const Size = Quill.import('attributors/style/size');
  Size.whitelist = ['4px', '6px', '8px', '10px', '12px', '14px', '16px', '18px', '20px'];
  Quill.register(Size, true);

  // Add fonts to whitelist and register them
  const Font = Quill.import("formats/font");
  Font.whitelist = [
    "arial",
    "comic-sans",
    "courier-new",
    "georgia",
    "lucida",
    "mirza",
    "monospace",
    "oxygen",
    "times-new-roman",
    "roboto",
    "sans-serif",
    "ubuntu"
  ];
  Quill.register(Font, true);

  const Background = Quill.import("formats/background");
  Quill.register(Background, true);

  export const modules  = {
      toolbar: {
        container:  "#my-custom-toolbar",
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
          <option value="lucida">Lucida</option>
          <option value="mirza">Mirza</option>
          <option value="monospace">Monospace</option>
          <option value="oxygen">Oxygen</option>
          <option value="times-new-roman">Times New Roman</option>
          <option value="roboto">Roboto</option>
          <option value="sans-serif">Sans Serif</option>
          <option value="ubuntu">Ubuntu</option>
        </select>
        <select className="ql-size" defaultValue="medium">
          <option value="4px">2</option>
          <option value="6px">4</option>
          <option value="8px">6</option>
          <option value="10px">8</option>
          <option value="12px">10</option>
          <option value="14px">12</option>
          <option value="16px">14</option>
          <option value="18px">16</option>
          <option value="20px">18</option>
        </select>    
      </span>
      <LineSpacing />
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
    </div>
  );   

  export default EditorToolbar;
