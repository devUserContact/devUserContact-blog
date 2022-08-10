import React from "react";
import PostHeaderSansLink from "../PostHeaderSansLink";
import PostBody from "../PostBody";
import styles from "../../styles/Main.module.scss";

const PostSansLink = ({ post }: any) => {
	return (
		<div className={styles.postContainer}>
			<div className={styles.postWrapper}>
				<PostHeaderSansLink post={post} />
				<div className={styles.postBody}>
					<PostBody post={post} />
				</div>
			</div>
		</div>
	);
};

export default PostSansLink;
