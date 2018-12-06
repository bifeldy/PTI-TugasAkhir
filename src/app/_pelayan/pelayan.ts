export interface IPengumuman {
    id: number,
    img: [],
    title: string,
    content: string,
    calendar: [],
    comment: number,
    tags: [],
    user: []
}

export interface IDiskusiHome {
    id: number,
    url: string,
    img: [],
    title: string,
    content: string,
    calendar: [],
    comment: number,
    tags: [],
    user: []
}

export interface IRilisanHome {
    results: [],
    page: number,
    total_results: number,
    dates: {},
    total_pages: number
}

export interface IPopularHome {
    results: [],
    page: number,
    total_results: number,
    total_pages: number
}

export interface IRilisanDetail {
    adult: boolean,
    backdrop_path: string,
    belongs_to_collection: string,
    budget: number,
    genres: [],
    homepage: string,
    id: number,
    imdb_id: number,
    original_language: string,
    original_title: string,
    overview: string,
    popularity: number,
    poster_path: string,
    production_companies: [],
    production_countries: [],
    release_date: string,
    revenue: number,
    runtime: number,
    spoken_languages: string,
    status: string,
    tagline: string,
    title: string,
    video: boolean,
    vote_average: number,
    vote_count: number
}

export interface IGenres {
    genres: []
}