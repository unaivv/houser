import { CardStyled, InfoWrapper } from "./styles"
import { useSpring, animated } from "@react-spring/web"
import { useDrag } from "@use-gesture/react"
import { IProps, ISide } from "./types"
import { useEffect, useState } from "react"
import Image from "next/image"
import {
	BsCoin,
	BsMap,
	BsAsterisk,
	BsBoundingBox,
	BsRainbow,
	BsSquare,
} from "react-icons/bs"
import { CiParking1 } from "react-icons/ci"
import { BiHistory, BiBath } from "react-icons/bi"
import { GrStatusGood } from "react-icons/gr"

export default function Card({ property, setSide }: IProps) {
	const [usedProperty, setUsedProperty] = useState<boolean>(false)

	const [disabled, setDisabled] = useState<boolean>(false)

	const [{ x, y }, api] = useSpring(() => ({ x: 0, y: 0 }))

	const [localSide, setLocalSide] = useState<ISide>("none")

	const bind = useDrag(({ down, movement: [mx, my] }) => {
		if (mx > 0) {
			setLocalSide("right")
		} else if (mx < 0) {
			setLocalSide("left")
		}

		const x = down ? mx : 0
		const y = down ? my : 0
		api.start({
			x,
			y,
			immediate: down,
		})
	})

	//console.log(disabled)

	useEffect(() => {
		if (usedProperty) {
			const timeOut = setTimeout(() => {
				setDisabled(false)
			}, 500)
			return () => clearTimeout(timeOut)
		}
	}, [usedProperty])

	const onMouseUp = () => {
		setUsedProperty(true)
		setSide(localSide)
	}

	if (disabled) return null

	return (
		<CardStyled
			style={{
				x,
				y,
				opacity: usedProperty ? 0 : 1,
				pointerEvents: usedProperty ? "none" : "all",
				transform: usedProperty
					? `translate3d(${x.animation.fromValues[0]},${y.animation.fromValues[0]},0)`
					: "",
			}}
			{...bind()}
			onMouseUp={onMouseUp}
		>
			<div style={{ width: "100%", height: "40%", position: "relative" }}>
				<Image src={property.image} alt={"Imagen"} fill />
			</div>
			<InfoWrapper>
				<h3>
					{property.id} {property.title}
				</h3>
				<p>{property.description}</p>
				<p>
					<BsCoin /> {property.price}
				</p>
				<p>
					<BsMap /> {property.location}
				</p>
				<p>
					<BsAsterisk /> {property.type}
				</p>
				<p>
					<BsBoundingBox /> {property.rooms}
				</p>
				<p>
					<BiBath /> {property.bathrooms}
				</p>
				<p>
					<BsSquare /> {property.area}
				</p>
				<p>
					<CiParking1 /> {property.parking}
				</p>
				<p>
					<BiHistory /> {property.year}
				</p>
				<p>
					<GrStatusGood /> {property.status}
				</p>
			</InfoWrapper>
		</CardStyled>
	)
}
