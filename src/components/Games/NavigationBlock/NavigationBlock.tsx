import { useAppDispatch, useAppSelector } from '../../../hooks/react-redux'
import { setGameKeywords, setPage } from '../../../store/slice/gamesSlice'
import Paginator from '../../Paginator/Paginator'
import styles from './styles.module.css'

const NavigationBlock = () => {
	const page = useAppSelector(state => state.gamesSlice.page)
	const page_size = useAppSelector(state => state.gamesSlice.page_size)
	const total_count = useAppSelector(state => state.gamesSlice.total_count)
	const portion_size = useAppSelector(state => state.gamesSlice.portion_size)
	const keywords = useAppSelector(state => state.gamesSlice.keywords)
	const dispatch = useAppDispatch()

	return (
		<div className={styles.nav}>
			{total_count !== 0 && (
				<div className={styles.paginator}>
					<Paginator
						classActive={styles.active}
						portionSize={portion_size}
						page={page}
						pageSize={page_size}
						totalCount={total_count}
						setCurrentPage={(page: number) => dispatch(setPage(page))}
					/>
				</div>
			)}

			{keywords.trim().length !== 0 && total_count !== 0 && (
				<span
					className={styles.showAll}
					onClick={() => dispatch(setGameKeywords(''))}
				>
					Show all games
				</span>
			)}
		</div>
	)
}

export default NavigationBlock
