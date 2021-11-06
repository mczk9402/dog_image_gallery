import styles from 'src/components/p-gallery.module.scss';
import { Loading } from 'src/components/Loading';
import { Thumbnail } from 'src/components/Thumbnail';

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
