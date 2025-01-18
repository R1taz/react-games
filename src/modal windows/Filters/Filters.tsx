import FiltersList from './FiltersList/FiltersList'
import styles from './styles.module.css'

const Filters = () => {
	const platforms = [
		'pc',
		'ocxxx',
		'pczxxzczxczxcc',
		'pcccxz',
		'pczxz',
		'pc',
		'pxsc',
		'pxc',
		'oac',
		'oc',
	]
	const stores = ['cxz', 'cxz', 'cxz', 'cxz', 'cxz', 'cxz', 'cxz', 'cxz', 'cxz']
	const tags = ['cxz', 'cxz', 'cxz', 'cxz', 'cxz', 'cxz', 'cxz', 'cxz', 'cxz']

	return (
		<div className={styles.filters}>
			<h1>Filters</h1>
			<FiltersList title='Platforms' filters={platforms} />
			<FiltersList title='Stores' filters={stores} />
			<FiltersList title='Tags' filters={tags} />
			<button className={styles.show}>show</button>
		</div>
	)
}

export default Filters
