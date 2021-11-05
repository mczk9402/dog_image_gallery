import styles from 'src/components/l-footer.module.scss';

export function Footer() {
  return (
    <footer className={styles['l-footer']}>
      <p>Dog images are retrieved from Dog API</p>
      <p>
        <a href="https://dog.ceo/dog-api/about">Donate to Dog API</a>
      </p>
    </footer>
  );
}
