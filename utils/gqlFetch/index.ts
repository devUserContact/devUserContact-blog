import { useState, useEffect } from "react";
import { useQuery } from "@apollo/client";
import { GetAllBlogPosts } from "../../graphql/queries";

export default function gqlFetch() {
	const [posts, setPosts] = useState([]);
	const [postsFetched, setPostsFetched] = useState(false);
	const [dateFormatted, setDateFormatted] = useState(false);
	const { data } = useQuery(GetAllBlogPosts, {
		variables: {},
	});

	useEffect(() => {
		if (data) {
			setPosts(data.getAllBlogPosts);
			setPostsFetched(true);
		}
		if (postsFetched) {
			const postListWithDateFormatted: any = posts.map((post: any) => {
				console.log(post)
				const dateFormatted = post.submission_date.substring(0, 10);
				return { ...post, dateFormatted };
			});
			setPosts(postListWithDateFormatted.reverse());
		}
		return setDateFormatted(true);
	}, [data, dateFormatted]);
	console.table(posts)
	return { posts };
}
