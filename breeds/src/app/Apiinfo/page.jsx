"use client";
import styles from "./Apiinfo.module.css";
import Footer from "../components/Footer";

export default function ApiInfo() {
  return (
    <div className={styles.apiContainer}>
      <h1 className={styles.apiTitle}>
        API escolhida: The Dog API
      </h1>
      
      <p>
        <strong>Documentação oficial:</strong>{" "}
        <a href="https://thedogapi.com/" target="_blank" rel="noopener noreferrer" className={styles.apiLink}>
          https://thedogapi.com/
        </a>
      </p>
      <p>
        <strong>URL base usada:</strong> <code className={styles.apiCode}>https://api.thedogapi.com/v1/</code>
      </p>
      <p>
        <strong>Endpoint escolhido:</strong> <code className={styles.apiCode}>/breeds</code>
      </p>
      <p>
        <strong>Atributos recebidos:</strong>
        <ul className={styles.apiList}>
          <li><code>id</code></li>
          <li><code>name</code></li>
          <li><code>breed_group</code></li>
          <li><code>origin</code></li>
          <li><code>bred_for</code></li>
          <li><code>life_span</code></li>
          <li><code>temperament</code></li>
          <li><code>height</code></li>
          <li><code>weight</code></li>
          <li><code>reference_image_id</code></li>
        </ul>
      </p>
      <p>
        <strong>Descrição:</strong><br />
        A <b>The Dog API</b> disponibiliza informações detalhadas sobre raças de cachorros, incluindo nome, grupo, origem, finalidade, expectativa de vida, temperamento, altura, peso e imagens. É ideal para projetos que precisam exibir ou pesquisar dados sobre cães.
      </p>

      <Footer />
    </div>
  );
}