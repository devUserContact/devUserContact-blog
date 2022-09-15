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
			setPosts(data.devGetAllBlogPosts);
			setPostsFetched(true);
			if (postsFetched) {
				const postListWithDateFormatted: any = posts.map((post: any, id: number) => {
					const date_formatted = post.submission_date.substring(0, 10);
					id += 1;
					return { ...post, date_formatted, id };
				});
				setPosts(postListWithDateFormatted.reverse());
			}
			setDateFormatted(true);
		}
	}, [data, dateFormatted]);
	return { posts, dateFormatted };
}
