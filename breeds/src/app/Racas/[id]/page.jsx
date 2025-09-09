"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import styles from "../[id]/Racas.moduole.css";

export default function DogDetails({ params }) {
    const { id } = params; 
    const [cachorro, setCachorro] = useState(null);

    useEffect(() => {
        const buscarDetalhesDoCachorro = async () => {
            try {
                const response = await fetch("https://api.thedogapi.com/v1/breeds");
                const data = await response.json();
                const dog = data.find((item) => item.id === parseInt(id));
                setCachorro(dog);
            } catch (error) {
                console.error("Erro ao buscar os detalhes do cachorro:", error);
            }
        };

        buscarDetalhesDoCachorro();
    }, [id]);

    if (!cachorro) {
        return <p>Cachorro não encontrado.</p>;
    }

    return (
        <div className={styles.container}>
            <h1 className={styles.title}>{cachorro.name}</h1>
            <Image
                src={`https://cdn2.thedogapi.com/images/${cachorro.reference_image_id}`}
                alt={cachorro.name}
                className={styles.image}
                width={300}
                height={300}
            />
            <div className={styles.info}>
                <p><strong>Grupo:</strong> {cachorro.breed_group || "N/A"}</p>
                <p><strong>Altura:</strong> {cachorro.height.metric} cm</p>
                <p><strong>Peso:</strong> {cachorro.weight.metric} kg</p>
                <p><strong>Temperamento:</strong> {cachorro.temperament || "N/A"}</p>
                <p><strong>Expectativa de Vida:</strong> {cachorro.life_span || "N/A"}</p>
                <p><strong>Origem:</strong> {cachorro.origin || "N/A"}</p>
                <p><strong>Criado para:</strong> {cachorro.bred_for || "N/A"}</p>
            </div>
        </div>
    );
}