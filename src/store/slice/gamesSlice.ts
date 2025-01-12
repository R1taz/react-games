import { createSlice } from '@reduxjs/toolkit'
import { IGame } from '../../interfaces/interfaceGames'

interface State {
	games: IGame[]
	page: number
	page_size: number
}

const initialState: State = {
	games: [],
	page: 1,
	page_size: 10,
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
	}),
})

export default gamesSlice.reducer
export const { setGames, setPage } = gamesSlice.actions
