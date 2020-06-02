import dynamic from 'next/dynamic';
import { firebaseStorageRef } from '../../firebase/storage';

const QuillNoSSRWrapper = dynamic(import('react-quill'), {
  ssr: false,
  loading: () => <p>Loading ...</p>,
});
const getRandomString = () => {
  return Math.floor(Math.random() * 1445823).toString(16);
};
const uploadFile = async (file: File): Promise<string> => {
  const randomString = getRandomString();
  const timestamp = Math.floor(Date.now() / 1000);
  const newFileName = `${randomString}-${timestamp}.jpg`;
  const newFile = new File([file], newFileName, { type: 'image/jpeg' });
  const userUploadImagesRef = firebaseStorageRef.child(
    `uploads/${newFile.name}`,
  );
  const snapshot = await userUploadImagesRef.put(newFile);
  const imageUrl = await snapshot.ref.getDownloadURL();
  return imageUrl;
};
const imageHandler = function(this: any) {
  const input = document.createElement('input');
  input.setAttribute('type', 'file');
  input.setAttribute('accept', 'image/*');
  input.click();
  input.onchange = async () => {
    const file = input!.files![0];
    const range = this.quill.getSelection();

    // Insert temporary loading placeholder image
    this.quill.insertEmbed(
      range.index,
      'image',
      `/images/uploader-placeholder.png`,
    );

    // Move cursor to right side of image (easier to continue typing)
    this.quill.setSelection(range.index + 1);

    const uploadedImageUrl = await uploadFile(file);

    // Remove placeholder image
    this.quill.deleteText(range.index, 1);

    this.quill.insertEmbed(range.index, 'image', uploadedImageUrl);
  };
};
const toolbarOptions = [
  [{ header: '1' }, { header: '2' }],
  ['bold', 'italic', 'underline', 'strike', 'blockquote'],
  [{ list: 'ordered' }, { list: 'bullet' }],
  // [{ align: [] }],
  ['link', 'image', 'video'],
  ['clean'],
];
const modules = {
  toolbar: {
    container: toolbarOptions,
    handlers: {
      image: imageHandler,
    },
  },
  clipboard: {
    // toggle to add extra line breaks when pasting HTML:
    matchVisual: true,
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
  return (
    <>
      <div className="mb-5">
        <QuillNoSSRWrapper
          modules={modules}
          formats={formats}
          theme="snow"
          defaultValue={initialValue || ''}
          placeholder="Въведете текста на вашия пътепис тук..."
        />
      </div>
    </>
  );
}
