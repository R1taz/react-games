import { useEffect } from 'react'
import { useGetGamesQuery } from '../../api/gamesApi'
import { useAppSelector, useAppDispatch } from '../../hooks/react-redux'
import {
	setGames,
	setKeywords,
	setPage,
	setTotalCount,
} from '../../store/slice/gamesSlice'
import GamesList from '../../components/Games/GamesList'
import Categories from '../../components/Categories/Categories'
import styles from './styles.module.css'
import Search from '../../components/Search/Search'
import Paginator from '../../components/Paginator/Paginator'

const GamesPage = () => {
	const games = useAppSelector(state => state.gamesSlice.games)
	const page = useAppSelector(state => state.gamesSlice.page)
	const page_size = useAppSelector(state => state.gamesSlice.page_size)
	const total_count = useAppSelector(state => state.gamesSlice.total_count)
	const portion_size = useAppSelector(state => state.gamesSlice.portion_size)
	const keywords = useAppSelector(state => state.gamesSlice.keywords)
	const dispatch = useAppDispatch()

	const { data, isFetching, error } = useGetGamesQuery({
		page,
		page_size,
		keywords,
	})

	//if (!isFetching) debugger

	useEffect(() => {
		if (data && JSON.stringify(data) !== JSON.stringify(games)) {
			dispatch(setGames(data.results))
			if (total_count !== data.count) dispatch(setTotalCount(data.count))
		}
	}, [data])

	return (
		<main className={styles.main}>
			<div className={`${styles.blockSearch} container`}>
				<Categories />
				<Search
					onSubmit={(keywords: string) => dispatch(setKeywords(keywords))}
				/>
			</div>

			{!isFetching && total_count === 0 && (
				<div className={`${styles.notFound} container`}>
					<h1>Couldn`t find games based on your keywords</h1>
					<span onClick={() => dispatch(setKeywords(''))}>show all games</span>
				</div>
			)}

			<div className={styles.nav}>
				{!isFetching && keywords.trim().length !== 0 && total_count !== 0 && (
					<span
						className={styles.showAll}
						onClick={() => dispatch(setKeywords(''))}
					>
						Show all games
					</span>
				)}

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
			</div>

			{isFetching && <h1>Loading...</h1>}
			{error && <h1>Error!!!</h1>}
			{games.length !== 0 && total_count !== 0 ? (
				<GamesList games={games} />
			) : null}
		</main>
	)
}

export default GamesPage
