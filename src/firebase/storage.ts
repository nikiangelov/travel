import firebase from './index';
const storage = firebase.storage();

export const firebaseStorageRef = storage.ref();
const getDownloadUrl = async (itemRef: any): Promise<string> => {
  return itemRef.getDownloadURL();
};
export const firebaseGetImages = async (path: string): Promise<string[]> => {
  return new Promise((resolve, reject) => {
    const listRef = firebaseStorageRef.child(path);
    listRef
      .listAll()
      .then(function(res) {
        const pr: Promise<string>[] = [];
        res.items.forEach(async function(itemRef) {
          pr.push(getDownloadUrl(itemRef));
        });
        Promise.all(pr).then(function(images) {
          resolve(images);
        });
      })
      .catch(function(error) {
        reject(error);
      });
  });
};

export default storage;
