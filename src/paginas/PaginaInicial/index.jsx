import Cabecalho from "../../Componentes/Cabecalho";
import Menu from "../../Componentes/Menu";
import styles from './PaginaInicial.module.scss';
import Banner from "../../Componentes/Banner";
import Rodape from "../../Componentes/Rodape";
import Galeria from "../../Componentes/Galeria";

export default function PaginaInicial(){
    return(
        <>
            <Cabecalho />
            <main>
                <section className={styles.principal}>
                    <Menu />
                    <Banner />
                </section>
            </main>
            <div>
                <Galeria />
            </div>
            <Rodape />
        </>
    );
}