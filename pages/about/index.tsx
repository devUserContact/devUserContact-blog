import type { NextPage } from "next";
import Markdown from "react-markdown";
import NavBar from "../../components/NavBar";
import { Resume } from "../../assets/Resume"
import styles from "../../styles/Main.module.scss";

const resume = Resume; 

const About: NextPage = () => {
	return (
		<>
			<NavBar />
			<div className={styles.spacer}></div>
			<div className={styles.postBody}>
			<Markdown linkTarget={"_blank"}>{resume}</Markdown>
			</div>
		</>
	);
};
export default About;
