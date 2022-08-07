import React from "react";
import Router from "next/router";
import Link from "next/link";
import Markdown from "react-markdown";
import styles from "../../styles/Main.module.scss";

const Post = ({ post }: any) => {
	const ROUTE_POST_ID = "blog/[id]";
	return (
			<div className={styles.postContainer}>
				<div className={styles.postWrapper}>
				<Link
					href={{
						pathname: ROUTE_POST_ID,
						query: {
							id: post.id,
							title: post.title,
							dateFormatted: post.dateFormatted,
							subTitle: post.sub_title,
							body: post.body,
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
					<div className={styles.postBody}>
						<Markdown linkTarget={"_blank"}>{post.body}</Markdown>
					</div>
				</div>
			</div>
	);
};

export default Post;
