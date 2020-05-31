import dynamic from 'next/dynamic';
import { useState } from 'react';

const QuillNoSSRWrapper = dynamic(import('react-quill'), {
  ssr: false,
  loading: () => <p>Loading ...</p>,
});

const modules = {
  toolbar: [
    [{ header: '1' }, { header: '2' }],
    ['bold', 'italic', 'underline', 'strike', 'blockquote'],
    [{ list: 'ordered' }, { list: 'bullet' }],
    [{ align: [] }],
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

export type EditorPropTypes = {
  initialValue?: string | null;
};
export default function Editor({ initialValue }: EditorPropTypes) {
  const [value, setValue] = useState(initialValue || '');
  return (
    <>
      <div className="mb-5">
        <QuillNoSSRWrapper
          modules={modules}
          formats={formats}
          theme="snow"
          value={value}
          placeholder="Въведете текста на вашия пътепис тук..."
          onChange={(content, _delta, _source, editor) => {
            if (editor) {
              // setEditorHTML(editor.getHTML());
            }
            setValue(content);
          }}
        />
      </div>
    </>
  );
}
