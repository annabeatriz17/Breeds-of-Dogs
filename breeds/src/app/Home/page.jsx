"use client";
import styles from "./Home.module.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Image from "next/image";

export default function Home() {
    return (
        <div className={styles.container}>
            <Header />
            <div className={styles.content}>
                <div className={styles.sessao}>
                    <div className={styles.osso}>
                        <Image src="/images/osso.png" alt="Osso de cachorro" width={300} height={300} />
                    </div>
                    <h1 className={styles.title}>Latido & Lambida</h1>
                    <p className={styles.description}>Pet shop completo com rações premium, banho e tosa, clínica veterinária, leva e traz. Uma linha premium para você e amor aos animais desde 2016!</p>
                </div>
                
                <div className={styles.capa}>
                    <Image src="/images/capa.png" alt="Dog" width={700} height={700} />
                </div>
            </div>
            <div className={styles.section}>
                <p className={styles.subtitle}>VEJA AS FOFURAS</p>
                <h2 className={styles.subtitle2}>Que temos por aqui!</h2>
                <p className={styles.description2}>
                    Aqui na Latido & Lambida Aqui você encontra cachorros hospedados com todo carinho - ideal para quando você precisa viajar. Explore os nossos hóspedes e descubra tudo sobre eles - veja como podemos cuidar do seu melhor amigo também!
                </p>
                
                <div className={styles.dogssection}>
                    <div className={styles.dogs}>
                        <Image src="/images/dog1.png" alt="Dog 1" width={200} height={200} />
                        <Image src="/images/dog2.png" alt="Dog 2" width={200} height={200} />
                        <Image src="/images/dog3.png" alt="Dog 3" width={200} height={200} />
                        <Image src="/images/dog4.png" alt="Dog 4" width={200} height={200} />
                        <Image src="/images/dog5.png" alt="Dog 5" width={200} height={200} />
                        <Image src="/images/dog6.png" alt="Dog 6" width={200} height={200} />
                    </div>
                </div>
            </div>
            <a href="/Dogs" style={styles.link}>
                <button className={styles.button}>
                    <span className={styles.buttonimg}>
                        <Image src="/images/osso2.png" alt="Osso de cachorro" width={40} height={40} />
                    </span>
                    Ver Cachorros
                </button>
            </a>
            
            <Footer />
        </div>
    );
}   