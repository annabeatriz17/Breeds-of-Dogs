import styles from "../styles/Header.module.css";
import Image from "next/image";

export default function Header() {
    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <Image src="/icon/faviconn.ico" alt="Latido e Lambida" width={90} height={90} />
                <h1 className={styles.title}>Latido & Lambida</h1>
            </div>
            <nav className={styles.nav}>
                <a href="/Perfil" className={styles.navLink}>Perfil</a>
                <a href="/Apiinfo" className={styles.navLink}>Api</a>
                <a href="/Dogs" className={styles.navLink}>Listagem</a>
                <a href="/Breeds" className={styles.navLink}>Detalhes</a>
                <a href="/Contact" className={styles.navLink}>Contato</a>
            </nav>
        </div>
    );
}
