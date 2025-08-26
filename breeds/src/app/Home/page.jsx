"use client";
import styles from "./Home.module.css";
import Link from "next/link";

export default function Home() {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Bem-vindo ao Breeds of Dogs!</h1>
            <p className={styles.description}>
                Descubra diferentes raças de cachorros e suas características
            </p>
            <Link href="/Dogs" className={styles.button}>
                Ver Raças de Cachorros 🐕
            </Link>
        </div>
    );
}