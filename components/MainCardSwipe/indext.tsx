import { useEffect, useState } from "react"
import Card from "components/Card"
import { Discard, Like, Wrapper } from "./styles"
import { ISide } from "../Card/types"
import { IProperty } from "./types"
import { ImCross, ImHeart } from "react-icons/im"

const properties: IProperty[] = [
	{
		image: "/properties/1.jpeg",
		title: "Casa en el centro de la ciudad",
		description:
			"Casa en el centro de la ciudad, con 3 habitaciones, 2 baños, cocina, sala, comedor, patio, cochera, etc.",
		price: 1000000,
		location: "Calle 1 # 2 - 3",
		type: "Casa",
		rooms: 3,
		bathrooms: 2,
		area: 100,
		parking: 1,
		year: 2020,
		status: "Disponible",
		id: 1,
	},
	{
		image: "/properties/1.jpeg",
		title: "Casa en el centro de la ciudad",
		description:
			"Casa en el centro de la ciudad, con 3 habitaciones, 2 baños, cocina, sala, comedor, patio, cochera, etc.",
		price: 1000000,
		location: "Calle 1 # 2 - 3",
		type: "Casa",
		rooms: 3,
		bathrooms: 2,
		area: 100,
		parking: 1,
		year: 2020,
		status: "Disponible",
		id: 2,
	},
	{
		image: "/properties/1.jpeg",
		title: "Casa en el centro de la ciudad",
		description:
			"Casa en el centro de la ciudad, con 3 habitaciones, 2 baños, cocina, sala, comedor, patio, cochera, etc.",
		price: 1000000,
		location: "Calle 1 # 2 - 3",
		type: "Casa",
		rooms: 3,
		bathrooms: 2,
		area: 100,
		parking: 1,
		year: 2020,
		status: "Disponible",
		id: 3,
	},
	{
		image: "/properties/1.jpeg",
		title: "Casa en el centro de la ciudad",
		description:
			"Casa en el centro de la ciudad, con 3 habitaciones, 2 baños, cocina, sala, comedor, patio, cochera, etc.",
		price: 1000000,
		location: "Calle 1 # 2 - 3",
		type: "Casa",
		rooms: 3,
		bathrooms: 2,
		area: 100,
		parking: 1,
		year: 2020,
		status: "Disponible",
		id: 4,
	},
]

export default function MainCardSwipe() {
	const [side, setSide] = useState<ISide>("none")

	useEffect(() => {
		if (side !== "none") {
			const timeout = setTimeout(() => {
				setSide("none")
			}, 500)
			return () => clearTimeout(timeout)
		}
	}, [side])

	return (
		<>
			<Wrapper>
				{properties.map((property) => (
					<Card
						key={property.id}
						property={property}
						setSide={setSide}
					/>
				))}
			</Wrapper>
			<Discard active={side === "left"}>
				<ImCross size={50} />
			</Discard>
			<Like active={side === "right"}>
				<ImHeart size={50} color="red" />
			</Like>
		</>
	)
}
