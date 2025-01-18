import { useAppDispatch } from '../../../hooks/react-redux'
import { setGameKeywords } from '../../../store/slice/gamesSlice'
import Categories from '../../Categories/Categories'
import Search from '../../Search/Search'
import styles from './styles.module.css'

const SearchBlock = () => {
	const dispatch = useAppDispatch()

	return (
		<div className={`${styles.blockSearch} container`}>
			<Categories />
			<Search
				onSubmit={(keywords: string) => dispatch(setGameKeywords(keywords))}
			/>
		</div>
	)
}

export default SearchBlock
