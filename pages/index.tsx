import type { NextPage } from "next";
import { useState, useEffect } from "react";
import styles from "../styles/Main.module.scss";
import BlogTitle from "./BlogTitle"

const Home: NextPage = () => {
	let ENVIRONMENT = process.env.NODE_ENV;
	let apiURL: string = "";
	const [postList, setPostList] = useState([]);

	const getPosts = async () => {
		const res = await fetch(apiURL);
		const data = await res.json();
		setPostList(data);
	};
	useEffect(() => {
		if (ENVIRONMENT === "development") {
			apiURL = "http://localhost:3001/api/posts";
		} else {
			apiURL =
				"https://node-backend-server-ny288.ondigitalocean.app/api/posts";
		}
		getPosts();
	}, []);
	return (
		<>
			<BlogTitle />
			<div className={styles.postContainer}>
				{postList.reverse().map((post: any, post_id: number) => {
					return (
						<div className={styles.postWrapper} key={post_id}>
							<p className={styles.postBody} key={post_id}>
								{post.post}
							</p>
						</div>
					);
				})}
			</div>
		</>
	);
};

export default Home;
