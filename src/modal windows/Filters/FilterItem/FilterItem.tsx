import { useState } from 'react'
import styles from './styles.module.css'

const FilterItem = ({ text }: { text: string }) => {
	const [isActive, setIsActive] = useState(false)

	return (
		<div
			onClick={() => setIsActive(prev => !prev)}
			className={
				isActive ? styles.filterItem + ' ' + styles.active : styles.filterItem
			}
		>
			<span>{text}</span>
		</div>
	)
}

export default FilterItem
