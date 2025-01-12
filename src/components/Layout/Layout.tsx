import { Outlet } from 'react-router-dom'
import Header from '../Header/Header'
import Navigation from '../Navigation/Navigation'

const Layout = () => {
	return (
		<>
			<Header />
			<Navigation />
			<Outlet />
		</>
	)
}

export default Layout
