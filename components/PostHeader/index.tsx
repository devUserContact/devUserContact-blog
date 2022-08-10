import Link from "next/link";
import styles from "../../styles/Main.module.scss";

const PostHeader = ({ post }: any) => {
	const ROUTE_POST_ID = "blog/[id]";
	return (
		<Link
			href={{
				pathname: ROUTE_POST_ID,
				query: {
					id: post.id,
				},
			}}
			as={`blog/${post.id}`}
		>
			<div className={styles.postHeaderGrid}>
				<a className={styles.postTitle}>{post.title}</a>
				<p className={styles.postDate}>{post.dateFormatted}</p>
				<p className={styles.postSubtitle}>{post.sub_title}</p>
			</div>
		</Link>
	);
};
export default PostHeader;
