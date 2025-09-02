import Link from 'next/link';
import React from 'react';
import styles from './Not-found.module.css';

export default function NotFound() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Página não encontrada </h1>
      <p className={styles.message}>O conteúdo que você procura não existe ou foi removido.</p>
      <Link href="/Home">
        <button className={styles.button}>
          Voltar para a Home
        </button>
      </Link>
    </div>
  );
}
