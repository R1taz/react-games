import styles from './styles.module.css'

const NotFoundElements = ({
	setKeywords,
}: {
	setKeywords: (value: string) => void
}) => {
	return (
		<div className={`${styles.notFound}`}>
			<h1>Couldn`t find games based on your keywords</h1>
			<span onClick={() => setKeywords('')}>show all games</span>
		</div>
	)
}

export default NotFoundElements
