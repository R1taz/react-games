import Filters from '../../modal windows/Filters/Filters'
import styles from './styles.module.css'
import { useState } from 'react'

const Categories = () => {
	const [open, setOpen] = useState(false)

	return (
		<>
			<div className={`${styles.selectBox}`}>
				<span onClick={() => setOpen(prev => !prev)}>Categories</span>
			</div>

			{open && <Filters />}
		</>
	)
}

export default Categories
