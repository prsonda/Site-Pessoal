import Head from "./Head";
import Footer from "./Footer";
import About from "@/components/About";
import Navbar from "@/components/Navbar";
import styles from "@/styles/MainContainer.module.css";
import styleMain from "@/styles/Main.module.css";
import Logo from "./Logo";
import Contact from "./Contact";

export default function MainComponent({ children }: any) {
	return (
		<>
			<Head />
			<header>
				<Logo></Logo>
				<Navbar></Navbar>
				<Contact></Contact>
			</header>
			<section className={styles.container}>
				<About></About>
				<main className={styleMain.main}>{children}</main>
			</section>
			<Footer />
		</>
	);
}
