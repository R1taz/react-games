import { NavLink } from 'react-router-dom'
import styles from './styles.module.css'
import { checkLinkActive } from '../../helpers/checkLinkActive'

const Navigation = () => {
	return (
		<nav className={`${styles.nav} container`}>
			<NavLink to='/news' className={checkLinkActive}>
				Gaming News
			</NavLink>
			<NavLink to='/catalog' className={checkLinkActive}>
				Game Catalog
			</NavLink>
			<NavLink to='/reviews' className={checkLinkActive}>
				Game Reviews
			</NavLink>
			<NavLink to='/profile' className={checkLinkActive}>
				Profile
			</NavLink>
		</nav>
	)
}

export default Navigation
