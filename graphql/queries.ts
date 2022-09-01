import {gql} from '@apollo/client';

export const GetAllBlogPosts = gql`
	query {
		getAllBlogPosts {
			title
			sub_title
			body
			media
			tags
			submission_date
		}
	}
`
