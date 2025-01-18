import { Navigate, Route, Routes } from 'react-router-dom'
import GamesPage from './pages/Games/GamesPage'
import Layout from './components/Layout/Layout'

function App() {
	return (
		<Routes>
			<Route element={<Layout />}>
				<Route path='/' element={<Navigate to='/catalog' />} />
				<Route path='/catalog' element={<GamesPage />} />
				<Route path='*' element={<h1>Not found page</h1>} />
			</Route>
		</Routes>
	)
}

export default App
