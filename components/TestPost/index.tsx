import React from "react";
import Router from "next/router";
import Link from "next/link";
import Markdown from "react-markdown";
import styles from "../../styles/Main.module.scss";

const TestPost = ({ post }: any) => {
	const ROUTE_POST_ID = "test/[id]";
	return (
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
			as={`test/${post.id}`} 
		>
			<div className={styles.postContainer}>
				<div className={styles.postWrapper}>
					<div className={styles.postHeaderGrid}>
						<a className={styles.postTitle}>{post.title}</a>
						<p className={styles.postDate}>{post.dateFormatted}</p>
						<p className={styles.postSubtitle}>{post.sub_title}</p>
					</div>
					<div className={styles.postBody}>
						<Markdown linkTarget={"_blank"}>{post.body}</Markdown>
					</div>
				</div>
			</div>
		</Link>
	);
};

export default TestPost;
