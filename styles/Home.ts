import styled from "styled-components"
import Image from "next/image"

export const MainWrapper = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 100%;
	height: 100vh;
	background-color: #f5f5f5;
`

export const MainContent = styled.div`
	width: 465px;
	max-width: 95%;
	height: 900px;
	max-height: 95%;
	position: relative;
`

export const MainLogo = styled(Image)`
	position: absolute;
	top: 8px;
	left: 10px;
`
