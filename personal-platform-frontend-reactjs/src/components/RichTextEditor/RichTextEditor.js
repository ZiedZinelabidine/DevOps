import React, { Suspense } from "react";

// Lazy load ReactQuill
const ReactQuill = React.lazy(() => {
  import("react-quill/dist/quill.snow.css"); // Dynamically load styles
  return import("react-quill");
});

const RichTextEditor = ({ value, onChange , height , width , marginBottom}) => {
  return (
    <div style={{ height: height, minHeight: "250px", width:width ,marginBottom: marginBottom}}>
      <Suspense fallback={<div>Loading editor...</div>}>
        <ReactQuill
          value={value}
          onChange={onChange}
          theme="snow"
          style={{
            minHeight: "250px",
            height: "100%",
            backgroundColor: "white",
            width: "100%",
          }}
        />
      </Suspense>
    </div>
  );
};

export default RichTextEditor;
