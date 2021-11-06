import styles from 'src/components/p-gallery.module.scss';
import { Loading } from './Loading';
import { Thumbnail } from './thumbnail';

export function Gallery(props) {
  const { urls } = props;

  if (urls == null) {
    return <Loading />;
  }

  return (
    <section className={styles['p-gallery']}>
      {urls.map((url) => {
        return <Thumbnail src={url} key={url} />;
      })}
    </section>
  );
}
