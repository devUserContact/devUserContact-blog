import React from "react";
import Markdown from "react-markdown";
import styles from "../../styles/Main.module.scss";

const PostBody = ({ post }: any) => {
	const ROUTE_POST_ID = "blog/[id]";
	return <Markdown linkTarget={"_blank"}>{post.body}</Markdown>;
};

export default PostBody;
