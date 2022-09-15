import {gql} from '@apollo/client';

export const GetAllBlogPosts = gql`
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
