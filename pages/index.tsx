import Head from "next/head"
import { MainMenu } from "components/MainMenu/intex"
import { MainContent, MainLogo, MainWrapper } from "styles/Home"
import MainCardSwipe from "@/components/MainCardSwipe/indext"

export default function Home() {
	return (
		<>
			<Head>
				<title>Tinder App</title>
				<meta name="description" content="Tinder app clone" />
				<meta
					name="viewport"
					content="width=device-width, initial-scale=1"
				/>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<MainWrapper>
				<MainLogo
					src="/houser.svg"
					alt="Picture of the author"
					width={100}
					height={30}
				/>
				<MainContent>
					<MainMenu />
					<MainCardSwipe />
				</MainContent>
			</MainWrapper>
		</>
	)
}
