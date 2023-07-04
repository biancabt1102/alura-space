import Tags from "../Tags";
import fotos from './fotos.json';
import Cards from "./Cards";
import styles from './Galeria.module.scss';

export default function Galeria() {
  return (
    <section className={styles.galeria}>
      <h2>Navegue pela galeria</h2>
      <Tags />
      <Cards styles={styles} itens={fotos} />
    </section>
  );
}