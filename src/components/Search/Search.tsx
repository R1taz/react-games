import { useState } from 'react'
import styles from './styles.module.css'

interface Props {
	onSubmit: (value: string) => void
}

const Search = ({ onSubmit }: Props) => {
	const [value, setValue] = useState('')

	return (
		<>
			<input
				type='text'
				className={styles.search}
				placeholder='Search...'
				onChange={e => setValue(e.target.value)}
				value={value}
			/>
			<button
				onClick={() => {
					if (value.trim().length === 0) {
						setValue('')
						return
					}
					onSubmit(value)
					setValue('')
				}}
				className={styles.send}
			>
				Send
			</button>
		</>
	)
}

export default Search
