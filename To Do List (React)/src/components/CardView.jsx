import { faBan, faScrewdriverWrench } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import styles from "../css/CardView.module.scss"

export default function CardView({ input }) {
  return (
    <div className={styles.cardView}>
      {/* <div className={styles.front}>
        <div className={styles.front__imageArea}>
          <img 
            src={input.imageUrl} 
            alt="삽입된 이미지"
            className={styles.front__image}
          />
        </div>
        <FontAwesomeIcon 
          icon={faScrewdriverWrench} 
          className={styles.front__modifyBtn}
        />
        <FontAwesomeIcon 
          icon={faBan} 
          className={styles.front__deleteBtn}
        />
      </div> */}
      <div className={styles.behind} >
        <div className='title'>
        </div>
        <div className='content'>
        </div>
        <div className='date'>
          <span className='list-head'>-------------- Date --------------</span> <br />
          <span className="date-text"> ~ </span>
        </div>
      </div>
      <div className='complte'>
        <div>
          <span className='list-head'>----------- Complete -----------</span>
        </div>
        <img src='./images/checkBox.png' className='checkBox'  alt="체크박스" ></img>
        <img src='./images/checkedBox.png' className='checkedBox' alt="체크된박스"></img>
      </div>
    </div>
  )
}