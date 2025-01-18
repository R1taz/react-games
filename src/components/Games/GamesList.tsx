import { IGame } from '../../interfaces/interfaceGames'
import GamesItem from './GamesItem'
import styles from './styles.module.css'

interface Props {
	games: IGame[]
}

const GamesList = ({ games }: Props) => {
	return (
		<div className={styles.gameList}>
			{games.map(game => (
				<GamesItem key={game.id} game={game} />
			))}
		</div>
	)
}

export default GamesList
