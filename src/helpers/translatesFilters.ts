interface Params {
	translate: number
	currentElement: number
	ulList: React.MutableRefObject<HTMLUListElement | null>
	setCurrentElement: React.Dispatch<React.SetStateAction<number>>
	setTranslate: React.Dispatch<React.SetStateAction<number>>
}

export const translateLeft = ({
	translate,
	currentElement,
	ulList,
	setCurrentElement,
	setTranslate,
}: Params) => {
	const itemOuterWidth =
		ulList.current?.children[currentElement - 1]?.clientWidth

	if (itemOuterWidth! + translate! >= 0) {
		setTranslate(0)
		setCurrentElement(1)
		return
	}

	setCurrentElement(prev => prev - 1)
	setTranslate(prev => itemOuterWidth! + prev)
}

export const translateRight = ({
	translate,
	currentElement,
	ulList,
	setCurrentElement,
	setTranslate,
}: Params) => {
	const itemOuterWidth =
		ulList.current?.children[currentElement - 1]?.clientWidth

	const nextTranslate = -itemOuterWidth! + translate!
	const divViewWidth = ulList.current?.clientWidth!

	let ulWidth = 0

	for (let i = 0; i < ulList.current?.children.length!; i++) {
		ulWidth += ulList.current?.children[i].clientWidth!
	}

	if (nextTranslate < divViewWidth - ulWidth) {
		if (translate !== divViewWidth - ulWidth) {
			setCurrentElement(prev => prev + 1)
		}
		setTranslate(divViewWidth - ulWidth)
	} else {
		setTranslate(prev => -itemOuterWidth! + prev)
		setCurrentElement(prev => prev + 1)
	}
}
