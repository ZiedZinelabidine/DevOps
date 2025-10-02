const DisplayRawHtml = ({ content }) => {
  // Preprocess the content to force white text
  const forceWhiteText = (html) => {
    return html.replace(/color:\s*[^;]+;/gi, 'color: white !important;');
  };

  const processedContent = content ? forceWhiteText(content) : '';
  return (
    <div 
      style={{ all: 'unset', color: 'white !important' }}
      dangerouslySetInnerHTML={{ __html: processedContent }} 
    />
  );
};

export default DisplayRawHtml;