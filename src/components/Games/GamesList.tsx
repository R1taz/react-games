import { IGame } from '../../interfaces/interfaceGames'
import GamesItem from './GamesItem'

interface Props {
	games: IGame[]
}

const GamesList = ({ games }: Props) => {
	return (
		<>
			<div>
				{games.map(game => (
					<GamesItem key={game.id} game={game} />
				))}
			</div>
		</>
	)
}

export default GamesList
