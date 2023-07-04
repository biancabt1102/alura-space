import favorito from './favorito.png';
import open from './open.png';

export default function Card({styles, item}) {
  return (
    <li className={styles.galeria__card}>
        <img 
        className={styles.galeria__imagem}
        src={item.imagem} 
        alt={item.titulo} 
        />
        <p className={styles.galeria__descricao}>{item.titulo}</p>
        <div>
        <p>{item.creditos}</p>
        <span>
            <img src={favorito} alt="Ícone coração de curtir" />
            <img src={open} alt="Ícone de abrir modal" />
        </span>
        </div>
    </li>
  );
}
