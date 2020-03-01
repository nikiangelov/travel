import React, { useEffect } from 'react';
import Link from 'next/link';
import Layout from '../components/Layout/Layout';
import storage from '../firebase/storage';

const FirebasePage: React.FunctionComponent = () => {
  const storageRef = storage.ref();
  useEffect(() => {
    // Create a reference under which you want to list
    const listRef = storageRef.child('travel');

    // Find all the prefixes and items.
    listRef
      .listAll()
      .then(function(res) {
        res.prefixes.forEach(function(folderRef) {
          // All the prefixes under listRef.
          // You may call listAll() recursively on them.
          console.log(
            '%c folderRef',
            'background-color: green;color:white;',
            folderRef,
          );
        });
        res.items.forEach(function(itemRef) {
          // All the items under listRef.
          itemRef.getDownloadURL().then(function(url) {
            console.log('%c url', 'background-color: green;color:white;', url);
          });
        });
      })
      .catch(function(error) {
        // Uh-oh, an error occurred!
        console.log('%c error', 'background-color: red;color:white;', error);
      });
  });
  return (
    <Layout>
      <h1>Firebase Page</h1>
      <p>This is the about page</p>
      <p>
        <Link href="/">
          <a>Go home</a>
        </Link>
      </p>
    </Layout>
  );
};

export default FirebasePage;
