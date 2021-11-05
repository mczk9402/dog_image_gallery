import styles from 'src/components/l-header.module.scss';

export function Header() {
  return (
    <header className={styles['l-header']}>
      <h1 className={styles['l-header__title']}>Hello, Word!</h1>
    </header>
  );
}
