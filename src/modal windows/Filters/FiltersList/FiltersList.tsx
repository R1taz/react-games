import { useRef, useState } from 'react'
import FilterItem from '../FilterItem/FilterItem'
import styles from './styles.module.css'
import {
	translateLeft,
	translateRight,
} from '../../../helpers/translatesFilters'
import arrowNext from '../../../assets/arrowNext.png'
import arrowPrev from '../../../assets/arrowPrevious.png'

interface Props {
	title: string
	filters: string[]
}

const FiltersList = ({ title, filters }: Props) => {
	const [translate, setTranslate] = useState(0)
	const [currentElement, setCurrentElement] = useState(1)
	const ulList = useRef<HTMLUListElement | null>(null)

	const paramsForTranslateFunc = {
		translate,
		currentElement,
		ulList,
		setCurrentElement,
		setTranslate,
	}

	return (
		<>
			<h2>{title}</h2>
			<div className={styles.filtersList}>
				<button
					onClick={() => translateLeft(paramsForTranslateFunc)}
					className={styles.leftButton}
				>
					<img src={arrowPrev} alt='' />
				</button>

				<div>
					<ul ref={ulList} style={{ transform: `translate(${translate}px)` }}>
						{filters.map((platform, index) => (
							<li key={index}>
								<FilterItem key={index} text={platform} />
							</li>
						))}
					</ul>
				</div>

				<button
					onClick={() => translateRight(paramsForTranslateFunc)}
					className={styles.rightButton}
				>
					<img src={arrowNext} alt='' />
				</button>
			</div>
		</>
	)
}

export default FiltersList
