import { useEffect, useState } from 'react';
import styles from "../../styles/Main.module.scss";

export default function Loading() {
  const [loadingText, setLoadingText] = useState<string>("loading. . .");
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
