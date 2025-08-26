"use client";
import { useState } from "react";
import axios from "axios";
import styles from "../Dogs/Dogs.module.css";

export default function Home() {
    const [cachorros, setCachorros] = useState([]);
    const [loading, setLoading] = useState(false);

    const buscarCachorro = async () => {
        setLoading(true);
        try {
            const response = await axios.get("https://api.thedogapi.com/v1/breeds");
            const data = response.data;
            
            setCachorros(data);
        } catch (error) {
            console.error("Erro ao buscar os cães:", error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className={styles.container}>
            <div className={styles.card}>
                <h1 className={styles.title}>Cachorros</h1>
                <div className={styles.buttonContainer}>
                    <div className={styles.buttonWrapper}>
                        <button onClick={buscarCachorro} disable={loading} className={styles.button}>
                            {loading ? "Carregando..." : "🔍Buscar Raças"}
                        </button>
                    </div>
                </div>
            </div>

            <div className={styles.cardContainer}>
                {cachorros.map((cachorro) => (
                    <div key={cachorro.id} className={styles.card}>
                        <h3 className={styles.cardTitle}>{cachorro.name}</h3>
                        <img src={`https://cdn2.thedogapi.com/images/${cachorro.reference_image_id}.jpg`} alt={cachorro.name} className={styles.cardImage} />
                        <div className={styles.cardText}>
                        <p className={styles.cardInfo}>Id: {cachorro.id}</p>
                        <p className={styles.cardInfo}>Grupo: {cachorro.breed_group}</p>
                        <p className={styles.cardInfo}>Origem: {cachorro.origin}</p>
                        <p className={styles.cardInfo}>Finalidade: {cachorro.bred_for}</p>
                        <p className={styles.cardInfo}>Expectativa de vida: {cachorro.life_span}</p>
                        <p className={styles.cardInfo}>Temperamento: {cachorro.temperament}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}