import styles from './Tags.module.scss';

export default function Tags() {
  return (
    <div className={styles.tags}>
        <p className={styles.tags.p}>Filtre por tags:</p>
        <ul className={styles.tags__lista}>
            <li className={styles.tags.li}>Estrelas</li>
            <li className={styles.tags.li}>Galáxias</li>
            <li className={styles.tags.li}>Lua</li>
            <li className={styles.tags.li}>Planetas</li>
        </ul>
    </div>
  )
}
