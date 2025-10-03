"use client";
import { useState, useEffect, use } from "react";
import axios from "axios";
import styles from "./[id].module.css";
import DogDetailsCard from "../../components/DogCardDetails";
import Footer from "../../components/Footer";

export default function DogDetalhes({ params }) {
    const [cachorro, setCachorro] = useState(null);
    const unwrappedParams = use(params);

    useEffect(() => {
        const fetchDogDetalhes = async (id) => {
            try {
                const response = await axios.get("https://api.thedogapi.com/v1/breeds");
                const data = response.data;
                const dog = data.find((item) => item.id === parseInt(id));
                setCachorro(dog);
            } catch (error) {
                console.error("Erro ao buscar os detalhes do cachorro:", error);
                setCachorro(null);
            }
        };
        if (unwrappedParams?.id) {
            fetchDogDetalhes(unwrappedParams.id);
        }
    }, [unwrappedParams]);
    return (
        <div className={styles.container}>
                <h2 className={styles.title}>Detalhes do Cachorro</h2>
            <DogDetailsCard cachorro={cachorro} />
            <Footer />
        </div>
    );
}