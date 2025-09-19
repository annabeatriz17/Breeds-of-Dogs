"use client";
import styles from "./Home.module.css";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Home() {
    return (
        <div className={styles.container}>
            <Header />
            <div className={styles.content}>
                <h1 className={styles.title}>Latido & Lambida</h1>
                <p className={styles.description}>Seja bem-vindo</p>
            </div>
            <Footer />
        </div>
    );
}