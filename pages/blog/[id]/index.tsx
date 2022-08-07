import { useRouter } from "next/router";
import Markdown from "react-markdown";
import styles from "../../../styles/Main.module.scss";

export default function PostPage() {
	const router = useRouter();
	return (
		<>
		<div className={styles.spacerDynamicPost}></div>
		<div className={styles.postContainer}>
			<div className={styles.postWrapper}>
				<div className={styles.postHeaderGrid}>
					<p className={styles.postTitle}>{router.query.title}</p>
					<p className={styles.postDate}>{router.query.dateFormatted}</p>
					<p className={styles.postSubtitle}>{router.query.subTitle}</p>
				</div>
				<div className={styles.postBody}>
					<Markdown linkTarget={"_blank"}>{`${router.query.body}`}</Markdown>
				</div>
			</div>
		</div>
		</>	
	);
}
