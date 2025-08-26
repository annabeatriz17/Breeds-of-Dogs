"use client";
import styles from "./Home.module.css";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Welcome to my Profile</h1>
            <div className={styles.card}>
                <p><strong> 2TDS1 - SENAI</strong></p>
                <div className={styles.profile}>
                    <Image
                        src="/images/eu.jpg"
                        alt="Minha foto"
                        width={120}
                        height={120}
                        className={styles.avatar}
                    />
                </div>
                <p style={{fontSize: "20px", marginBottom: "24px"}}>
                    Olá, eu me chamo <strong>Anna Beatriz Ribeiro Valentim</strong>, estou no meu <strong>último ano da escola</strong>, e estou terminando o curso de <strong>Desenvolvimento de Sistemas no Senai</strong>.
                </p>
                
                <p><strong>Docentes:</strong>Thiago Ferreira e Marcelo Carboni</p>
                
                <blockquote className={styles.frase}>
                    "A persistência é o caminho do êxito." – Charles Chaplin
                </blockquote>
            </div>
            <Link href="/Dogs" className={styles.button}>
                Ver Raças de Cachorros 
            </Link>
        </div>
    );
}