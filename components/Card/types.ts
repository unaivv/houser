import { IProperty } from "../MainCardSwipe/types"

export type ISide = "right" | "left" | "none"

export interface IProps {
	property: IProperty
	setSide: (side: ISide) => void
}
