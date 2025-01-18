import { useEffect } from 'react'
import { useGetGamesQuery } from '../../api/gamesApi'
import { useAppSelector, useAppDispatch } from '../../hooks/react-redux'
import {
	setGames,
	setGameKeywords,
	setTotalCount,
} from '../../store/slice/gamesSlice'
import GamesList from '../../components/Games/GamesList'
import styles from './styles.module.css'
import SearchBlock from '../../components/Games/SearchBlock/SearchBlock'
import NotFoundElements from '../../components/NotFoundElements/NotFoundElements'
import NavigationBlock from '../../components/Games/NavigationBlock/NavigationBlock'

const GamesPage = () => {
	const page = useAppSelector(state => state.gamesSlice.page)
	const page_size = useAppSelector(state => state.gamesSlice.page_size)
	const total_count = useAppSelector(state => state.gamesSlice.total_count)
	const keywords = useAppSelector(state => state.gamesSlice.keywords)
	const games = useAppSelector(state => state.gamesSlice.games)
	const dispatch = useAppDispatch()

	const { data, isFetching, error } = useGetGamesQuery({
		page,
		page_size,
		keywords,
	})

	useEffect(() => {
		if (data && JSON.stringify(data) !== JSON.stringify(games)) {
			dispatch(setGames(data.results))
			dispatch(setTotalCount(data.count))
		}
	}, [data])

	return (
		<main className={styles.main}>
			<SearchBlock />
			<NavigationBlock />

			{!isFetching && total_count === 0 && (
				<NotFoundElements
					setKeywords={value => dispatch(setGameKeywords(value))}
				/>
			)}

			{isFetching && <h1>Loading...</h1>}
			{error && <h1>Error!!!</h1>}
			{games.length !== 0 && total_count !== 0 ? (
				<GamesList games={games} />
			) : null}
		</main>
	)
}

export default GamesPage
