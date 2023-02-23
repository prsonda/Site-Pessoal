import Image from "next/image";
import Link from "next/link";
import styles from "@/styles/Contact.module.css";

export default function Contact() {
	return (
		<>
			<section className={styles.contact}>
				<Link href="https://www.linkedin.com/in/paulors1206/" target="blank">
					<Image
						src="https://cdn-icons-png.flaticon.com/512/179/179330.png?w=740&t=st=1677124415~exp=1677125015~hmac=b1a4c4c2ce6f08738ecae7be02c5490d1a79bbfb375d2299b1dc502efa17e6fd"
						alt="Linkedin"
						height={40}
						width={40}
					/>
				</Link>
				<Link href="https://discord.gg/PRS#1354" target="blank">
					<Image
						src="https://logodownload.org/wp-content/uploads/2017/11/discord-logo-1-1.png"
						alt="Discord"
						height={40}
						width={40}
					/>
				</Link>
				<Link
					href="https://api.whatsapp.com/send?phone=5541988649142"
					target="blank"
				>
					<Image
						src="https://yata-apix-88af1c26-fee7-4b0c-8d40-492735fcc57c.s3-object.locaweb.com.br/e8f80b913ca542f5b86048412b759818.png"
						alt="WhatsApp"
						height={40}
						width={40}
					/>
				</Link>
			</section>
		</>
	);
}
