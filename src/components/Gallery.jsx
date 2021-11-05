import styles from 'src/components/p-gallery.module.scss';

export function Gallery() {
  return (
    <section className={styles['p-gallery']}>
      <figure className={styles['p-gallery__image-wrap']}>
        <img
          className={styles['p-gallery__image']}
          src="https://images.dog.ceo/breeds/shiba/shiba-8.jpg"
          alt="cute dog"
        />
      </figure>
    </section>
  );
}
