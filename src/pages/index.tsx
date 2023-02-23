import Image from "next/image";
import Link from "next/link";

export default function Home() {
	return (
		<>
			<section>
				<section>
					<h1>Olá pessoal.</h1>
				</section>
				<br />
				<section>
					<p>
						Sou paranaense do interior, apreciador de doces, gosto de filmes e
						séries de ficção científica.
					</p>
					<p>
						Sempre apaixonado por tecnologia, atualmente estudando
						Desenvolvimento de Software <strong>Back-end Node</strong> na Cubos
						Academy e Técnico em Informática para Internet no IFSULDEMINAS.
					</p>
					<p>
						Formado em administração, carreira desenvolvida na área de gestão
						com mais de 7 anos como gerente, coordenador e supervisor.
					</p>
				</section>
				<br />
				<section>
					<h3>Hards Skills</h3>
					<br />
					<Link href="https://nodejs.org" target="_blank" rel="noreferrer">
						<Image
							src="https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg"
							alt="nodejs "
							width={60}
							height={60}
						/>
					</Link>
					<Link
						href="https://www.postgresql.org"
						target="_blank"
						rel="noreferrer"
					>
						<Image
							src="https://upload.wikimedia.org/wikipedia/commons/2/29/Postgresql_elephant.svg"
							alt="postgresql"
							width={60}
							height={60}
						/>
					</Link>
					<Link href="https://www.mysql.com/" target="_blank" rel="noreferrer">
						<Image
							src="https://www.freepnglogos.com/uploads/logo-mysql-png/logo-mysql-mysql-logo-png-images-are-download-crazypng-21.png"
							alt="mysql"
							width={60}
							height={60}
						/>
					</Link>
					<Link href="https://expressjs.com/" target="_blank" rel="noreferrer">
						<Image
							src="https://wsofter.com/wp-content/uploads/2017/12/node-express.png"
							alt="express"
							width={60}
							height={60}
						/>
					</Link>
					<Link
						href="https://www.w3.org/html/"
						target="\_blank"
						rel="noreferrer"
					>
						<Image
							src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/800px-HTML5_logo_and_wordmark.svg.png"
							alt="html5"
							width={60}
							height={60}
						/>
					</Link>
					<Link
						href="https://www.w3schools.com/css/"
						target="_blank"
						rel="noreferrer"
					>
						<Image
							src="https://brandeps.com/logo-download/C/CSS-3-logo-vector-01.svg"
							alt="css3"
							width={60}
							height={60}
						/>
					</Link>
					<Link
						href="https://developer.mozilla.org/en-US /docs/Web/JavaScript"
						target="_blank"
						rel="noreferrer"
					>
						<Image
							src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/800px-Unofficial_JavaScript_logo_2.svg.png"
							alt="javascript "
							width={60}
							height={60}
						/>
					</Link>
					<Link
						href="https://www.typescriptlang.org/docs/"
						target="_blank"
						rel="noreferrer"
					>
						<Image
							src="https://upload.wikimedia.org/wikipedia/commons/4/4c/Typescript_logo_2020.svg"
							alt="Typescript "
							width={60}
							height={60}
						/>
					</Link>
					<Link
						href="https://www.npmjs.com/package/bcrypt"
						target="_blank"
						rel="noreferrer"
					>
						<Image
							src="https://img.stackshare.io/package/19054/default_2be036aaca5c71baf790e00f1ef80dd37a625905.png"
							alt="bcrypt "
							width={60}
							height={60}
						/>
					</Link>
					<Link
						href="https://axios-http.com/ptbr/docs/intro"
						target="_blank"
						rel="noreferrer"
					>
						<Image
							src="https://axios-http.com/assets/logo.svg"
							alt="axios"
							width={100}
							height={60}
						/>
					</Link>
				</section>
				<br />
				<section>
					<Image
						src="/Linguagens.svg"
						alt="Linguagens Utilizadas"
						width={600}
						height={200}
					/>
				</section>
			</section>
		</>
	);
}
