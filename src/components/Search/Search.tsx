import { useState } from 'react'
import styles from './styles.module.css'

const Search = () => {
	const [value, setValue] = useState('')

	return (
		<div>
			<input
				type='search'
				className={styles.search}
				placeholder='Search...'
				onChange={e => setValue(e.target.value)}
				value={value}
			/>
			<button className={styles.send}>Send</button>
		</div>
	)
}

export default Search
