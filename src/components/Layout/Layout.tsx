import { Outlet } from 'react-router-dom'
import styles from './styles.module.css'

const Layout = () => {
	return (
		<div>
			<header className={styles.header}>header</header>
			<Outlet />
			<footer className={styles.footer}>footer</footer>
		</div>
	)
}

export default Layout
