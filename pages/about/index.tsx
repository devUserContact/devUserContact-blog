import type { NextPage } from "next";
import Markdown from "react-markdown";
import NavBar from "../../components/NavBar";
import styles from "../../styles/Main.module.scss";

const resume = `### _Hello_, 
### My name is Maxwell & I am a software developer with a passion for full-stack web development
### 
___
projects: 
- [Tabs to Markdown][1] - Extension for 🦊 Firefox
- [Language Search Tool][2] - Next.js app for searching multiple language sites
___
contact:
- [Email][email]
- [GitHub · devUserContact][3]
- [LinkedIn][4]

[1]:https://addons.mozilla.org/en-US/firefox/addon/tabs-to-markdown/?utm_source=addons.mozilla.org&utm_medium=referral&utm_content=search
[2]:https://language-search-tool.netlify.app/
[email]:mailto:developer.user.contact@protonamil.com "developer.user.contact@protonmail" 
[3]:https://github.com/devUserContact
[4]:https://www.linkedin.com/in/maxwell-wine-a23872221/?original_referer=https%3A%2F%2Fgithub.com%2FdevUserContact
`;

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
