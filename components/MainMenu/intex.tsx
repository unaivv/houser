import { CenterText, Wrapper } from "./styles"
import { BsPersonSquare, BsChat } from "react-icons/bs"

export function MainMenu() {
	return (
		<Wrapper>
			<BsPersonSquare size={20} />
			<CenterText>Profile</CenterText>
			<BsChat size={20} />
		</Wrapper>
	)
}
