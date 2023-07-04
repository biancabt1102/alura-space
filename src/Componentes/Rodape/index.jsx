import facebook from './facebook.svg';
import instagram from './instagram.svg';
import twitter from './twitter.svg';
import styles from './Rodape.module.scss';

export default function Rodape(){
    return(
        <footer className={styles.rodape}>
            <div className={styles.rodape__icones}>
                <a 
                    href="http://www.facebook.com.br" 
                    target='_blank'
                    rel='noreferrer'
                >
                    <img src={facebook} alt="Ícone do Facebook" />
                </a>
                <a 
                    href="http://www.twitter.com.br" 
                    target='_blank'
                    rel='noreferrer'
                >
                    <img src={twitter} alt="Ícone do Twitter" />
                </a>
                <a 
                    href="http://www.intagram.com.br" 
                    target='_blank'
                    rel='noreferrer'
                >
                    <img src={instagram} alt="Ícone do instagram" />
                </a>
            </div>
            <div>
                <p className={styles.rodape.p}>Desenvolvido por Bianca Teixeira</p>
            </div>
        </footer>
    );
}