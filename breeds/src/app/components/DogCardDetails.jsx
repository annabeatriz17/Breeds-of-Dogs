import { Card, Descriptions } from "antd";
import { PictureOutlined } from "@ant-design/icons";
import styles from "../styles/DogCardDetails.module.css";

export default function DogDetailsCard({ cachorro }) {
    return (
        <div className={styles.conatiner}>
            <Card className={styles.cards}>
                <div className={styles.imagecachorro}>
                    {cachorro.reference_image_id ? (
                        <img
                            src={`https://cdn2.thedogapi.com/images/${cachorro.reference_image_id}.jpg`}
                            alt={cachorro.name}
                            className={styles.image}
                        />
                    ) : (
                        <PictureOutlined className={styles.placeholderIcon} />
                    )}
                </div>
                <h3 className={styles.dogName}>Nome: {cachorro.name}</h3>
            </Card>


            <Card title="Informações do Cachorro" className={styles.card}>
                <Descriptions column={1} bordered>
                    <Descriptions.Item label="Grupo">
                        {cachorro.breed_group || "N/A"}
                    </Descriptions.Item>
                    <Descriptions.Item label="Altura">
                        {cachorro.height.metric} cm
                    </Descriptions.Item>
                    <Descriptions.Item label="Peso">
                        {cachorro.weight.metric} kg
                    </Descriptions.Item>
                    <Descriptions.Item label="Temperamento">
                        {cachorro.temperament || "N/A"}
                    </Descriptions.Item>
                    <Descriptions.Item label="Expectativa de Vida">
                        {cachorro.life_span || "N/A"}
                    </Descriptions.Item>
                    <Descriptions.Item label="Origem">
                        {cachorro.origin || "N/A"}
                    </Descriptions.Item>
                    <Descriptions.Item label="Criado para">
                        {cachorro.bred_for || "N/A"}
                    </Descriptions.Item>
                </Descriptions>
            </Card>
        </div>
    );
}