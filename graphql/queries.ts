import {gql} from '@apollo/client';

export const DevGetAllBlogPosts = gql`
	query {
		devGetAllBlogPosts {
			title
			subtitle
			body
			media
			tags
			submission_date
		}
	}
`
