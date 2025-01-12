import { useEffect } from 'react'
import { useGetGamesQuery } from '../../api/gamesApi'
import { useAppSelector, useAppDispatch } from '../../hooks/react-redux'
import { setGames } from '../../store/slice/gamesSlice'
import GamesList from '../../components/Games/GamesList'
import Categories from '../../components/Categories/Categories'
import styles from './styles.module.css'
import Search from '../../components/Search/Search'

const GamesPage = () => {
	const games = useAppSelector(state => state.gamesSlice.games)
	const page = useAppSelector(state => state.gamesSlice.page)
	const page_size = useAppSelector(state => state.gamesSlice.page_size)
	const dispatch = useAppDispatch()

	const { data, isLoading, error } = useGetGamesQuery({
		page: page,
		page_size: page_size,
	})

	useEffect(() => {
		if (data && JSON.stringify(data) !== JSON.stringify(games)) {
			dispatch(setGames(data.results))
		}
	}, [data])

	return (
		<main className={styles.main}>
			<div className={`${styles.blockSearch} container`}>
				<Categories />
				<Search />
			</div>
			{isLoading && <h1>Loading...</h1>}
			{error && <h1>Error!!!</h1>}
			{games.length !== 0 ? <GamesList games={games} page={page} /> : null}
		</main>
	)
}

export default GamesPage
