import styles from './Menu.module.scss';
import icones from './icones.json';
import Icone from './Icone.jsx';

export default function Menu(){
    return(
        <nav className={styles.menu}>
            <ul className={styles.menu__lista}>
                {icones.map(icone => (<Icone key={icone.id} icone={icone} style={styles} />))}
            </ul>
        </nav>
    );
}
