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
                    <button onClick={buscarCachorro} disabled={loading} className={styles.button}>
                        {loading ? "Carregando..." : "🔍 Buscar Raças"}
                    </button>
                </div>
            </div>
            <div className={styles.cardContainer}>
                {cachorros.map((cachorro) => (
                    <div key={cachorro.id} className={styles.cardDog}>
                        <img src={`https://cdn2.thedogapi.com/images/${cachorro.reference_image_id}.jpg`} alt={cachorro.name} className={styles.cardImage} />
                        <h3 className={styles.cardTitle}>{cachorro.name}</h3>
                        <div className={styles.cardText}>
                            <p className={styles.cardInfo}><strong>Grupo:</strong> {cachorro.breed_group || "N/A"}</p>
                            <p className={styles.cardInfo}><strong>Origem:</strong> {cachorro.origin || "N/A"}</p>
                            <p className={styles.cardInfo}><strong>Finalidade:</strong> {cachorro.bred_for || "N/A"}</p>
                            <p className={styles.cardInfo}><strong>Expectativa de vida:</strong> {cachorro.life_span || "N/A"}</p>
                            <p className={styles.cardInfo}><strong>Temperamento:</strong> {cachorro.temperament || "N/A"}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}