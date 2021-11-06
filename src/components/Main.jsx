import { useEffect, useState } from 'react';
import { fetchImages } from 'src/pages/api';
import styles from 'src/components/l-main.module.scss';
import { Gallery } from './Gallery';
import { Form } from './Form';

export function Main() {
  const [urls, setUrls] = useState(null);

  useEffect(() => {
    fetchImages('shiba').then((urls) => {
      setUrls(urls);
    });
  }, []);

  function reloadImage(breed) {
    fetchImages(breed).then((urls) => {
      setUrls(urls);
    });
  }

  return (
    <main className={styles['l-main']}>
      <Form onFormSubmit={reloadImage} />
      <Gallery urls={urls} />
    </main>
  );
}
