"use client";
import styles from "./Home.module.css";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
    return (
        <div className={styles.container}>
            <header className={styles.header}>
                <div className={styles.containerheader}>
                    <h1 className={styles.title}>Latido e Lambida</h1>
                    <Image src="/icon/faviconn.ico" alt="Latido e Lambida" width={40} height={40} />
                </div>
                <nav className={styles.nav}>
                    <Link href="/Dogs" className={styles.navLink}>Cachorros</Link>
                    <Link href="/Racas" className={styles.navLink}>Raças</Link>
                    <Link href="/Apiinfo" className={styles.navLink}>Informações</Link>
                </nav>
            </header>
            
            <div className={styles.card}>
                <section className={styles.profile}>
                    <div className={styles.profileimage}>
                        <Image src="/images/eu.jpg" alt="Cachorro feliz" width={220} height={220} className={styles.avatar} />
                    </div>
                    <div className={styles.profiletext}>
                        <h2 className={styles.profiletitle}>Descubra tudo sobre raças de cachorros!</h2>
                        <p className={styles.profileSubtitle}>
                            Curiosidades, informações, dicas e muito mais para quem ama cães. Navegue, aprenda e compartilhe o amor pelos peludos!
                        </p>
                        <Link href="/Dogs" className={styles.profileButton}>Explorar Raças</Link>
                    </div>
                </section>
                <section className={styles.infocontainer}>
                    <h3 className={styles.infoTitle}>Sobre o projeto</h3>
                    <p className={styles.infoText}>
                        O Latido e Lambida é um espaço dedicado para apaixonados por cachorros. Aqui você encontra informações sobre raças, cuidados, curiosidades e dicas para tornar a vida do seu melhor amigo ainda mais feliz!
                    </p>
                    <blockquote className={styles.frase}>
                        "Não se preocupe em entender. Viver ultrapassa qualquer entendimento." – Charles Chaplin
                    </blockquote>
                </section>
            </div>

            <footer className={styles.footer}>
                <span>© 2025 Latido & Lambida • By Anna Beatriz</span>
            </footer>
        </div>
    );
}