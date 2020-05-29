import dynamic from 'next/dynamic';
import { useState, useRef } from 'react';

const QuillNoSSRWrapper = dynamic(import('react-quill'), {
  ssr: false,
  loading: () => <p>Loading ...</p>,
});

const modules = {
  toolbar: [
    [{ header: '1' }, { header: '2' }],
    ['bold', 'italic', 'underline', 'strike', 'blockquote'],
    [{ list: 'ordered' }, { list: 'bullet' }],
    ['link', 'image', 'video'],
    ['clean'],
  ],
  clipboard: {
    // toggle to add extra line breaks when pasting HTML:
    matchVisual: false,
  },
};
/*
 * Quill editor formats
 * See https://quilljs.com/docs/formats/
 */
const formats = [
  'header',
  'size',
  'bold',
  'italic',
  'underline',
  'strike',
  'blockquote',
  'list',
  'bullet',
  'indent',
  'link',
  'image',
  'video',
];

export default function Editor() {
  const [value, setValue] = useState('');
  const [quillEditor, setQuillEditor] = useState<any>(false);
  return (
    <>
      <div className="text-muted">
        <QuillNoSSRWrapper
          modules={modules}
          formats={formats}
          theme="bubble"
          value={value}
          onChange={(content, delta, source, editor) => {
            // if (!quillEditor) {
            //   setQuillEditor(editor);
            // }
            setValue(content);
          }}
        />
      </div>
      <button
        className="btn btn-success"
        onClick={() => {
          const html = quillEditor.getHTML();
          console.log(html);
        }}
      >
        Save
      </button>
      <style global jsx>{`
        p {
          color: green;
        }
      `}</style>
    </>
  );
}
