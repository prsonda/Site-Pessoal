import stylesProjects from "@/styles/projects/Projects.module.css";
import stylesItem from "@/styles/projects/Item.module.css";

export default function Products() {
	return (
		<>
			<h1>Projetos já prontos e serão implementados em breve!</h1>
			<section className={stylesProjects.projects}>
				<article className={stylesItem.item}>
					Controle de despesas pessoais
				</article>
				<article className={stylesItem.item}>Sistema bancário</article>
				<article className={stylesItem.item}>
					Consultar resultado da Mega Sena
				</article>
				<article className={stylesItem.item}>Conversor de moedas</article>
			</section>
		</>
	);
}
