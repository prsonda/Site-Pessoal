import styles from "@/styles/About.module.css";
import Image from "next/image";

export default function Aside() {
	return (
		<>
			<aside className={styles.about}>
				<section>
					<Image src="/Paulo.png" alt="Foto Paulo" width={240} height={280} />
				</section>
				<br />

				<article>
					<h1>Paulo Robson da Silva</h1>
					<br />
					<h3>DADOS PESSOAIS</h3>
					<p> idade: 38 anos</p>
					<p>Estado Civil: Casado </p>
					<p>Filhos: 14 e 11 anos</p>
					<p>Bairro: Sítio Cercado</p>
					<p>Cidade/UF: Curitiba/PR</p>
				</article>
			</aside>
		</>
	);
}
