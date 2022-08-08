import { useRouter } from "next/router";
import useFetch from "../../../utils/useFetch";
import Post from "../../../components/Post";
import NavBar from "../../../components/NavBar";
import Loading from "../../../components/Loading";
import styles from "../../../styles/Main.module.scss";

export default function PostPage() {
	const router = useRouter();
	const { posts, dateFormatted } = useFetch();
	console.log(router.query);
	if (dateFormatted) {
		console.log();
		return (
			<>
				<NavBar />
				<div className={styles.spacer}></div>
				<div className={styles.postContainer}>
					{posts.map((post: any, post_id: number) => {
						if (post.id === parseInt(router.query.id)) {
							return (
								<>
									<Post key={post_id} post={post} />
								</>
							);
						}
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
