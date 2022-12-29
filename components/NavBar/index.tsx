import Link from "next/link";
import styles from "../../styles/Main.module.scss";

export default function NavBar() {
	return (
		<>
			<div className={styles.navBarContainer}>
				<p className={styles.navBarText}>
					<Link legacyBehavior href="/">
						<a>/home </a>
					</Link>
				</p>
				<p className={styles.navBarText}>
					<Link legacyBehavior href="/posts">
						<a>/blog </a>
					</Link>
				</p>
				<p className={styles.navBarText}>
					<Link  legacyBehavior href="/about">
						<a>/about </a>
					</Link>
				</p>
			</div>
		</>
	);
}
