"use client";

import { useState, useEffect } from "react";
import { Spin, Button } from "antd";
import { ArrowLeftOutlined } from "@ant-design/icons";
import Link from "next/link";
import axios from "axios";
import styles from "./[id].module.css";
import DogDetailsCard from "../../components/DogCardDetails";

export default function DogDetails({ params }) {
    const [cachorro, setCachorro] = useState(null);
    const [loading, setLoading] = useState(true);

    const fetchDogDetails = async (id) => {
        try {
            const response = await axios.get("https://api.thedogapi.com/v1/breeds");
            const data = response.data;
            const dog = data.find((item) => item.id === parseInt(id));
            setCachorro(dog);
        } catch (error) {
            console.error("Erro ao buscar os detalhes do cachorro:", error);
            setCachorro(null);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        if (params?.id) {
            fetchDogDetails(params.id);
        }
    }, [params?.id]);

    if (loading) {
        return (
            <div className={styles.container}>
                <div className={styles.loadingWrapper}>
                    <Spin size="large" />
                    <p className={styles.loadingText}>Carregando detalhes do cachorro...</p>
                </div>
            </div>
        );
    }

    if (!cachorro) {
        return (
            <div className={styles.container}>
                <div className={styles.errorWrapper}>
                    <h3>Cachorro não encontrado</h3>
                    <Link href="/Dogs">
                        <Button type="primary" icon={<ArrowLeftOutlined />}>
                            Voltar para lista
                        </Button>
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <Link href="/Dogs">
                    <Button icon={<ArrowLeftOutlined />} className={styles.backButton}>
                        Voltar
                    </Button>
                </Link>
                <h2 className={styles.title}>Detalhes do Cachorro</h2>
            </div>

            <DogDetailsCard cachorro={cachorro} />
        </div>
    );
}