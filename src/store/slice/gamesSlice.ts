import { createSlice } from '@reduxjs/toolkit'
import { IGame } from '../../interfaces/interfaceGames'

interface State {
	games: IGame[]
	page: number
	page_size: number
	total_count: number
	portion_size: number
	keywords: string
}

const initialState: State = {
	games: [],
	page: 1,
	page_size: 10,
	total_count: 0,
	portion_size: 5,
	keywords: '',
}

const gamesSlice = createSlice({
	name: 'gamesSlice',
	initialState,
	reducers: () => ({
		setGames(state, action) {
			state.games = action.payload
		},
		setPage(state, action) {
			state.page = action.payload
		},
		setTotalCount(state, action) {
			state.total_count = action.payload
		},
		setGameKeywords(state, action) {
			state.page = 1
			state.total_count = 0
			state.keywords = action.payload
		},
	}),
})

export default gamesSlice.reducer
export const { setGames, setPage, setTotalCount, setGameKeywords } =
	gamesSlice.actions
