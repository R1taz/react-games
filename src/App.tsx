import { Route, Routes } from 'react-router-dom'
import GamesPage from './pages/games/GamesPage'
import Layout from './components/Layout/Layout'

function App() {
	return (
		<Routes>
			<Route element={<Layout />}>
				<Route path='/games' element={<GamesPage />} />
			</Route>
		</Routes>
	)
}

export default App
