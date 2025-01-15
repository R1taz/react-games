import { useState } from 'react'

interface Props {
	classActive: string
	totalCount: number
	page: number
	pageSize: number
	portionSize: number
	setCurrentPage: (page: number) => void
}

const Paginator = ({
	classActive,
	totalCount,
	page,
	pageSize,
	portionSize,
	setCurrentPage,
}: Props) => {
	const portionCount = Math.ceil(totalCount / pageSize / portionSize)
	const [currentPortion, setCurrentPortion] = useState(
		Math.ceil(page / portionSize)
	)

	const leftNumber = (currentPortion - 1) * portionSize + 1
	const rightNumber = Math.min(
		currentPortion * portionSize,
		Math.ceil(totalCount / pageSize)
	)

	const buttons = []
	for (let i = leftNumber; i <= rightNumber; i++) {
		buttons.push(
			<button
				className={i === page ? classActive : ''}
				onClick={() => setCurrentPage(i)}
				key={i}
			>
				{i}
			</button>
		)
	}

	return (
		<>
			<button
				onClick={() => {
					setCurrentPortion(prev => prev - 1)
					setCurrentPage(leftNumber - portionSize)
				}}
				disabled={currentPortion === 1}
			>
				←
			</button>
			{buttons}
			<button
				onClick={() => {
					setCurrentPortion(prev => prev + 1)
					setCurrentPage(rightNumber + 1)
				}}
				disabled={currentPortion === portionCount}
			>
				→
			</button>
		</>
	)
}

export default Paginator
