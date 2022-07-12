import type { NextPage } from 'next'
import styles from "../../styles/Main.module.scss";
export default function BlogTitle() {
  return (
  <>
 		<p className={styles.blogTitle}>devUserContact_blog</p>
 		<p className={styles.blogSubTitle}>
 			sharing my software development journey 
 		</p>
	</>
  );
}; 
