"use client";
import styles from "./apiinfo.module.css";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { Button } from "antd";

export default function Apiinfo() {
  return (
    <div className={styles.container}>
      <Header />
      <h1 className={styles.title}>The Dog API</h1>
      <div className={styles.buttons}>
        <Button type="primary" href="https://api.thedogapi.com/v1/breeds" target="_blank" rel="noopener noreferrer" style={styles.button2}>URL BASE</Button>
        <Button type="primary" href="https://thedogapi.com/" target="_blank" rel="noopener noreferrer">API DOCUMENTATION</Button>
      </div>
      <Footer />
    </div>
  );
}