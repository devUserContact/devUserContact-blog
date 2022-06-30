import type { NextPage } from "next";
import { useState, useEffect } from "react";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
	const [postList, setPostList] = useState([]);
	const getPosts = async () => {
		const res = await fetch(
			"https://node-backend-server-ny288.ondigitalocean.app/api/test"
		);
		const data = await res.json();
		setPostList(data);
	};
	useEffect(() => {
		getPosts();
	}, []);
	return (
		<div className={styles.container}>
			<>
				{postList.map((post: any, post_id: number) => {
					return <p key={post_id}>{post.post}</p>;
				})}
			</>
		</div>
	);
};

export default Home;
