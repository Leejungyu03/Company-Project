import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRef } from "react";
import styles from "../css/header.module.scss"

const Header = ({ positions }) => {
	const blurBackgroundRef = useRef();

	const addPopupPosition = positions.addPopup;

	const openAddPopup = () => {
		addPopupPosition.style.visibility = "visible";
    addPopupPosition.style.opacity = "1";
		blurBackgroundRef.current.style.visibility = "visible";
		blurBackgroundRef.current.style.opacity = "1";
	}

	const closeAddPopup = () => {
		addPopupPosition.style.visibility = "hidden";
    addPopupPosition.style.opacity = "0";
		blurBackgroundRef.current.style.visibility = "hidden";
		blurBackgroundRef.current.style.opacity = "0";
	}

  return (
		<header>
      <div className={styles.notice}>
        떠든 사람 <br/>
        김ㅁㅁ  <br/>
        이ㅁㅁ
      </div>
			<h1>To Do List</h1>
			<FontAwesomeIcon
				icon={faPenToSquare}
        className={styles.openAddPopupBtn}
        onClick={openAddPopup}
			/>
			<div 
				className={styles.blurBackground}
				onClick={closeAddPopup}
				ref={blurBackgroundRef}
			></div>
		</header>
	);
}

export default Header;