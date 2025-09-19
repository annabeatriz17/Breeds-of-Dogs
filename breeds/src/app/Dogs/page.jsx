"use client";
import { useState, useEffect } from "react";
import axios from "axios";
import styles from "./Dogs.module.css";
import Image from "next/image";
import { useRouter } from "next/navigation";
import Footer from "../components/Footer";

export default function Home() {
    const [cachorros, setCachorros] = useState([]);
    const [loading, setLoading] = useState(true);
    const router = useRouter();

    useEffect(() => {
        const buscarCachorro = async () => {
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
        buscarCachorro();
    }, []);

    const handleCardClick = (id) => {
        router.push(`/Dogs/${id}`);
    };

    return (
        <div className={styles.container}>
            <div className={styles.card}>
                <h1 className={styles.title}>Cachorros Cadastrados</h1>
            </div>
            <div className={styles.cardss}>
                {loading ? (
                    <p>Carregando...</p>
                ) : (
                    cachorros.map((cachorro) => (
                        <div
                            key={cachorro.id}
                            className={styles.cardDog}
                            onClick={() => handleCardClick(cachorro.id)}
                        >
                            <Image
                                src={`https://cdn2.thedogapi.com/images/${cachorro.reference_image_id || "placeholder"}.jpg`}
                                alt={cachorro.name}
                                className={styles.cardImage}
                                width={300}
                                height={300}
                            />
                            <h3 className={styles.cardTitle}>{cachorro.name}</h3>
                            <div className={styles.cardText}>
                                <p className={styles.cardInfo}><strong>Grupo:</strong> {cachorro.breed_group || "N/A"}</p>
                                <p className={styles.cardInfo}><strong>Altura:</strong> {cachorro.height.metric} cm</p>
                                <p className={styles.cardInfo}><strong>Peso:</strong> {cachorro.weight.metric} kg</p>
                            </div>
                        </div>
                    ))
                )}
            </div>
            <Footer />
        </div>
    )
}