import styles from "./Header.module.css";
import Image from "next/image";

export default function Header() {
    return (
        <div className={styles.header}>
            <div className={styles.left}>
                <Image src="/icon/faviconn.ico" alt="Latido e Lambida" width={40} height={40} />
                <h1 className={styles.title}>Latido & Lambida</h1>
            </div>
            <nav className={styles.nav}>
                <a href="/Dogs" className={styles.navLink}>Cachorros</a>
                <a href="/Apiinfo" className={styles.navLink}>Informações</a>
            </nav>
        </div>
    );
}
