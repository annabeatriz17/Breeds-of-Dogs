"use client";
import Link from "next/link";
import styles from "./not-found.module.css";

export default function NotFound() {
  return (
    <div className={styles.containerNotFound}>
      <h1 className={styles.titleNotFound}>
        Página não encontrada 😢
      </h1>
      <p className={styles.textNotFound}>
        O conteúdo que você procura não existe ou foi removido.<br />
        Verifique o endereço ou volte para a página inicial.
      </p>
      <Link href="/Home" className={styles.buttonNotFound}>
        Voltar para a Home
      </Link>
    </div>
  );
}