import React from "react";
import Markdown from "react-markdown";
import styles from "../../styles/Main.module.scss";

const Post = ({ post }: any) => {
	return (
		<>
			<div className={styles.postContainer}>
				<div className={styles.postWrapper}>
					<div className={styles.postHeaderGrid}>
						<p className={styles.postTitle}>{post.title}</p>
						<p className={styles.postDate}>{post.dateFormatted}</p>
						<p className={styles.postSubtitle}>{post.sub_title}</p>
					</div>
					<div className={styles.postBody}>
						<Markdown linkTarget={"_blank"}>{post.body}</Markdown>
					</div>
				</div>
			</div>
		</>
	);
};
 
export default Post;
