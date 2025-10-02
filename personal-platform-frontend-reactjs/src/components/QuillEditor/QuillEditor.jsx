import { useEffect, useState } from 'react';

const QuillEditor = ({ value, onChange, placeholder }) => {
    const [Quill, setQuill] = useState(null);
    const [editor, setEditor] = useState(null);

    useEffect(() => {
        // Dynamically import Quill only when the component mounts
        import('quill').then(module => {
            setQuill(module.default);
        });
    }, []);

    useEffect(() => {
        if (Quill && !editor) {
            const quill = new Quill('#editor', {
                theme: 'snow',
                placeholder: placeholder,
                modules: {
                    toolbar: [
                        ['bold', 'italic', 'underline'],
                        [{ 'list': 'ordered' }, { 'list': 'bullet' }],
                        ['link'],
                        ['clean']
                    ]
                }
            });

            // Set initial content if any
            if (value) {
                quill.root.innerHTML = value;
            }

            // Handle content changes
            quill.on('text-change', () => {
                if (onChange) {
                    onChange(quill.root.innerHTML);
                }
            });

            setEditor(quill);
        }
    }, [Quill, value, onChange, placeholder, editor]);

    if (!Quill) {
        return (
            <div style={{
                padding: '20px',
                border: '1px solid #ccc',
                borderRadius: '4px',
                textAlign: 'center'
            }}>
                Loading editor...
            </div>
        );
    }

    return (
        <div>
            <div id="editor" style={{ height: '200px' }}></div>
        </div>
    );
};

export default QuillEditor; 