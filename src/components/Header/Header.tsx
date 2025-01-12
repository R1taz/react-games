import styles from './styles.module.css'
import ImageSunSrc from '../../assets/sun.png'

const Header = () => {
	return (
		<header className={styles.header}>
			<div>
				<h1>React Games Library</h1>
				<p>Saturday, 12 January 2025, 17:08</p>
			</div>

			<div className={styles.weather}>
				<img src={ImageSunSrc} alt='Sun' />
				<p>18 °C</p>
			</div>
		</header>
	)
}

export default Header
