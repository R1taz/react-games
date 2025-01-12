import { useAppDispatch } from '../../hooks/react-redux'
import { IGame } from '../../interfaces/interfaceGames'
import { setPage } from '../../store/slice/gamesSlice'

interface Props {
	page: number
	games: IGame[]
}

const GamesList = ({ page, games }: Props) => {
	const dispatch = useAppDispatch()

	return (
		<>
			{games.length && (
				<>
					{
						<ul>
							{games.map(game => (
								<li key={game.id}>
									<h2>{game.name}</h2>
								</li>
							))}
						</ul>
					}

					<button onClick={() => dispatch(setPage(page + 1))}>nextPage</button>
				</>
			)}
		</>
	)
}

export default GamesList
