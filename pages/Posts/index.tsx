import type { NextPage } from "next";
import React from "react";
import { useState, useEffect } from "react";
import styles from "../../styles/Main.module.scss";

const Posts: NextPage = () => {
	let ENVIRONMENT = process.env.NODE_ENV;
	let apiURL: string = "";
	if (ENVIRONMENT === "development") {
		apiURL = "http://localhost:3001/api/posts";
	} else {
		apiURL = "https://node-backend-server-ny288.ondigitalocean.app/api/posts";
	}
	const [postList, setPostList] = useState([]);
	const [postsFetched, setPostsFetched] = useState(false);
	const [dateFormatted, setDateFormatted] = useState(false);
	//	const [postsFormatted, setPostsFormatted] = useState(false);
	useEffect(() => {
		const getPosts = async () => {
		const res = await fetch(apiURL);
		const data = await res.json();
		setPostList(data);
		setPostsFetched(true);
		if (postsFetched) {
			const postListWithDateFormatted: any = postList.map((post: any) => {
				const dateFormatted = post.created_at.substring(0, 10);
				return { ...post, dateFormatted };
			});
			setPostList(postListWithDateFormatted);
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
					{postList.reverse().map((post: any, post_id: number) => {
						return (
							<div className={styles.postWrapper} key={post_id}>
								<p className={styles.postDate}>{post.dateFormatted}</p>
								<p className={styles.postBody} key={post_id}>
									{post.post}
								</p>
							</div>
						);
					})}
				</div>
			</>
		);
	} else {
		return <>test</>;
	}
};

export default Posts;
