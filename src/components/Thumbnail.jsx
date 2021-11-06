import styles from 'src/components/c-thumbnail.module.scss';

export function Thumbnail(props) {
  console.log(props);
  return (
    <figure className={styles['c-thumbnail__image-wrap']}>
      <img className={styles['c-thumbnail__image']} src={props.src} alt="cute dog" />
    </figure>
  );
}
