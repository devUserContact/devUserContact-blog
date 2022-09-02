import styles from "../../styles/Main.module.scss";

const PostHeader = ({ post }: any) => {
	return (
		<div className={styles.postHeaderGrid}>
			<p className={styles.postTitle}>{post.title}</p>
			<p className={styles.postDate}>{post.date_formatted}</p>
			<p className={styles.postSubtitle}>{post.sub_title}</p>
		</div>
	);
};
export default PostHeader;
