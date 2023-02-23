import Image from "next/image";
import Link from "next/link";
import styles from "@/styles/Logo.module.css";

export default function Logo() {
	return (
		<>
			<section className={styles.logo}>
				<Link href="/">
					<Image src="/Logo.png" alt="Logo Pyber" width={218} height={40} />
				</Link>
			</section>
		</>
	);
}
