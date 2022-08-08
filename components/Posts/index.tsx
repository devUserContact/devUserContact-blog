import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import useFetch from "../../utils/useFetch";
import Loading from "../Loading";
import Post from "../Post";
import styles from "../../styles/Main.module.scss";

export default function Posts() {
	const { posts, dateFormatted } = useFetch();

	if (dateFormatted) {
		return (
			<>
				<div className={styles.postContainer}>
					{posts.map((post: any, post_id: number) => {
						return (
							<>
								<Post key={post_id} post={post} />
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
