import type { NextPage } from "next";
import React from "react";
import { useState, useEffect } from "react";
import Markdown from "react-markdown";
import styles from "../../styles/Main.module.scss";
import Loading from "../Loading";

const Posts: NextPage = () => {
	let ENVIRONMENT = process.env.NODE_ENV;
	let apiURL: string = "";
	if (ENVIRONMENT === "development") {
		apiURL = "http://localhost:3001/api/blog-devusercontact/posts";
	} else {
		apiURL =
			"https://node-backend-server-ny288.ondigitalocean.app/api/blog-devusercontact/posts";
	}
	const [posts, setPosts] = useState([]);
	const [postsFetched, setPostsFetched] = useState(false);
	const [dateFormatted, setDateFormatted] = useState(false);
	//	const [postsFormatted, setPostsFormatted] = useState(false);
	useEffect(() => {
		const getPosts = async () => {
			const res = await fetch(apiURL);
			const data = await res.json();
			setPosts(data);
			setPostsFetched(true);
			if (postsFetched) {
				const postListWithDateFormatted: any = posts.map((post: any) => {
					const dateFormatted = post.submission_date.substring(0, 10);
					return { ...post, dateFormatted };
				});
				setPosts(postListWithDateFormatted);
			}
			setDateFormatted(true);
			return;
		};
		getPosts();
	}, [dateFormatted]);
	if (dateFormatted) {
		return (
			<>
				<div className={styles.postContainer}>
					{posts.map((post: any, post_id: number) => {
						return (
							<div className={styles.postWrapper} key={post_id}>
								<div className={styles.postHeaderGrid} key={post_id}>
									<p className={styles.postTitle}>{post.title}</p>
									<p className={styles.postDate}>{post.dateFormatted}</p>
									<p className={styles.postSubtitle}>{post.sub_title}</p>
								</div>
								<div className={styles.postBody}>
									<Markdown>{post.body}</Markdown>
								</div>
							</div>
						);
					})}
				</div>
			</>
		);
	} else {
		return (
			<>
				<Loading />
			</>
		);
	}
};
export default Posts;
