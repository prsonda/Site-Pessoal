import "@/styles/globals.css";
import type { AppProps } from "next/app";
import MainComponent from "@/components/MainComponent";

export default function App({ Component, pageProps }: AppProps) {
	return (
		<MainComponent>
			<Component {...pageProps} />
		</MainComponent>
	);
}
