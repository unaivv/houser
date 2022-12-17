import styled from "styled-components"
interface IButtonProps {
	active?: boolean
}

export const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: center;
	width: 100%;
	height: calc(100% - 100px);
	position: relative;
`

export const Discard = styled.div<IButtonProps>`
	position: absolute;
	bottom: 10%;
	left: -80px;
	opacity: ${(p) => (p.active ? 1 : 0.3)};
	transition: opacity 0.3s ease;
`

export const Like = styled.div<IButtonProps>`
	position: absolute;
	bottom: 10%;
	right: -80px;
	opacity: ${(p) => (p.active ? 1 : 0.3)};
	transition: opacity 0.3s ease;
`
