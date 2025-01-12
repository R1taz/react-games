export interface IGame {
	id: number
	slug: string
	name: string
	released: string
	tba: boolean
	background_image: string
	rating: number
	rating_top: number
	ratings: object
	ratings_count: number
	reviews_text_count: string
	added: number
	added_by_status: object
	metacritic: number
	playtime: number
	suggestions_count: number
	updated: string
	esrb_rating: object | null
	platforms: {}[]
}

export interface ResponseGetGames {
	count: number
	next: string | null
	previous: string | null
	results: IGame[]
}

export interface RequestGetGames {
	page: number
	page_size: number
	keywords?: string
}
