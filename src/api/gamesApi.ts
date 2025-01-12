import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { BASE_URL } from '../constants/constants'
import { RequestGetGames, ResponseGetGames } from '../interfaces/interfaceGames'

const apiKey = import.meta.env.VITE_GAMES_API_KEY

const gamesApi = createApi({
	reducerPath: 'gamesApi',
	baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
	endpoints: builder => ({
		getGames: builder.query<ResponseGetGames, RequestGetGames>({
			query: ({ page, page_size, keywords }) => ({
				url: '',
				params: {
					key: apiKey,
					page: page,
					page_size: page_size,
					search: keywords,
					search_precise: true,
				},
			}),
		}),
	}),
})

export default gamesApi
export const { useGetGamesQuery } = gamesApi
