import { useEffect, useState } from 'react';
import styles from "../../styles/Main.module.scss";

export default function Loading() {
  const [toggle, setToggle] = useState<boolean>(true);
  let loadingText = "loading. . ."
    if (toggle === true) {
      loadingText = "loading. . ." 
    } else {
      loadingText = "loading . . ."
    }
  function toggleBoolean() {
    setTimeout(() => {
      setToggle(!toggle);
    }, 1000);
  }
  useEffect(() => {
    toggleBoolean();
  }, [toggleBoolean]);
	return (
		<>
			<div className={styles.blogTitleContainer}>
				<p className={styles.loadingText}>
          {loadingText}
				</p>
			</div>
		</>
	);
}
