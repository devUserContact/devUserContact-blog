import React from "react";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Loading from "../Loading";
import TestPost from "../TestPost";
import styles from "../../styles/Main.module.scss";

export default function TestComponent() {
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
	const router = useRouter();
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
				setPosts(postListWithDateFormatted.reverse());
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
							<>
								<TestPost key={post_id} post={post} />
							</>
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
}
