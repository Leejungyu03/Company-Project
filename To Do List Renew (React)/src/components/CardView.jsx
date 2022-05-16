import { Card } from "react-bootstrap"
import styles from "../css/CardView.module.scss"

export default function CardView({ input }) {
  return (
    <Card className={styles.cardView}>
      <Card.Img variant="top" src={input.imageUrl} className={styles.card__image} />
      <Card.Body>
        <Card.Title>
          {input.title}
        </Card.Title>
        <Card.Text>
          {input.content}
        </Card.Text>
      </Card.Body>
      <button>asdasd</button>
    </Card>
  )
}