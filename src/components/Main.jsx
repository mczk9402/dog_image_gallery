import styles from 'src/components/l-main.module.scss';
import { Gallery } from './Gallery';

export function Main() {
  return (
    <main className={styles['l-main']}>
      <Gallery />
    </main>
  );
}
