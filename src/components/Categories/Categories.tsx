import styles from './styles.module.css'
import { useState } from 'react'

const Categories = () => {
	const [open, setOpen] = useState(false)

	return (
		<>
			<div className={`${styles.selectBox}`}>
				<span onClick={() => setOpen(prev => !prev)}>Categories</span>
			</div>

			<div style={{ display: open ? 'block' : 'none' }}>Categories Select</div>
		</>
	)
}

export default Categories
