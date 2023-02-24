import styles from "@/styles/About.module.css";
import Image from "next/image";

export default function Aside() {
	return (
		<>
			<aside className={styles.about}>
				<section>
					<Image
						className={styles.imagemAlternativa}
						src="/Paulo.png"
						alt="Foto Paulo"
						width={240}
						height={280}
					/>
				</section>
				<br />

				<article>
					<h1>Paulo Robson da Silva</h1>
					<br />
					<p>
						Desenvolvimento de Software Back-end Nodejs | Javascript |
						PostgreSQL | MySQL | API REST | Expressar
					</p>
				</article>
			</aside>
		</>
	);
}
