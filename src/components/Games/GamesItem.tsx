import { NavLink } from 'react-router-dom'
import { IGame } from '../../interfaces/interfaceGames'
import styles from './styles.module.css'

const GamesItem = ({ game }: { game: IGame }) => {
	return (
		<div className={styles.gameItem}>
			<div className={styles.wrapperImg}>
				<img src={game.background_image} alt='' />
			</div>
			<div>
				<h2 className={styles.title}>{game.name}</h2>
				<p>Released: {game.released}</p>
				<p>Rating: {game.rating}</p>
				<NavLink to=''>Game Information &#8594;</NavLink>
			</div>
		</div>
	)
}

export default GamesItem
