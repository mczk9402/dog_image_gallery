import styles from 'src/components/p-form.module.scss';

export function Form(props) {
  function handleSubmit(e) {
    e.preventDefault();
    const { breed } = e.target.elements;
    props.onFormSubmit(breed.value);
  }

  return (
    <form className={styles['p-form']} onSubmit={handleSubmit}>
      <div className={styles['p-form__select-wrap']}>
        <select className={styles['p-form__select']} name="breed" defaultValue="shiba">
          <option value="shiba">Shiba</option>
          <option value="akita">Akita</option>
        </select>
      </div>
      <button className={styles['p-form__button']} type="submit">
        Reload
      </button>
    </form>
  );
}
