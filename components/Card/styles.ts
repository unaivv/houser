import styled from "styled-components"
import { animated } from "@react-spring/web"

export const CardStyled = styled(animated.div)`
	display: flex;
	flex-direction: column;
	width: 100%;
	height: 100%;
	background-color: #fff;
	border-radius: 4px;
	will-change: transform;
	overflow: hidden;
	position: absolute;
	touch-action: pan-y;
	transition: opacity 0.5s ease;
	& * {
		pointer-events: none;
	}
`

export const InfoWrapper = styled.div`
	display: flex;
	flex-direction: column;
	padding: 16px;
	& > * {
		margin-bottom: 8px;
	}
	& > *:last-child {
		margin-bottom: 0;
	}
	& > h3 {
		font-size: 24px;
		margin-bottom: 16px;
	}
`
