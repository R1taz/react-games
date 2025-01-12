import { useAppDispatch } from '../../hooks/react-redux'
import { IGame } from '../../interfaces/interfaceGames'
import { setPage } from '../../store/slice/gamesSlice'
import GamesItem from './GamesItem'

interface Props {
	page: number
	games: IGame[]
}

const GamesList = ({ page, games }: Props) => {
	const dispatch = useAppDispatch()

	return (
		<>
			<div>
				{games.map(game => (
					<GamesItem key={game.id} game={game} />
				))}
			</div>

			<button onClick={() => dispatch(setPage(page + 1))}>nextPage</button>
		</>
	)
}

export default GamesList
