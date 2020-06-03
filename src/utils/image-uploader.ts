import { firebaseStorageRef } from '../firebase/storage';

const getRandomString = () => {
  return Math.floor(Math.random() * 1445823).toString(16);
};
const uploadFile = async (
  file: File,
  path: string = 'uploads/',
): Promise<string> => {
  const randomString = getRandomString();
  const timestamp = Math.floor(Date.now() / 1000);
  const newFileName = `${randomString}-${timestamp}.jpg`;
  const newFile = new File([file], newFileName, { type: 'image/jpeg' });
  const userUploadImagesRef = firebaseStorageRef.child(
    `${path}${newFile.name}`,
  );
  const snapshot = await userUploadImagesRef.put(newFile);
  const imageUrl = await snapshot.ref.getDownloadURL();
  return imageUrl;
};
export const imageUploadHandler = async function(
  uploadPath?: string,
): Promise<any> {
  return new Promise((resolve, reject) => {
    const input = document.createElement('input');
    input.setAttribute('type', 'file');
    input.setAttribute('accept', 'image/*');
    input.click();
    input.onchange = async () => {
      try {
        const file = input!.files![0];
        const uploadedImageUrl = await uploadFile(file, uploadPath);
        input.remove();
        if (uploadedImageUrl) {
          resolve(uploadedImageUrl);
        } else {
          reject('Not uploaded');
        }
      } catch (error) {
        reject(error);
      }
    };
  });
};
