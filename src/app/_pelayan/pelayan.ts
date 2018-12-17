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

export interface IRilisanHome {
    results: [
        {
            poster_path: string,
            adult: boolean,
            overview: string,
            release_date: string,
            genre_ids: [],
            id: number,
            original_title: string,
            original_language: string,
            title: string,
            backdrop_path: string,
            popularity: number,
            vote_count: number,
            video: boolean,
            vote_average: number
        }
    ],
    page: number,
    total_results: number,
    dates: {},
    total_pages: number
}

export interface IPopularHome {
    results: [
        {
            "poster_path": string,
            "adult": false,
            "overview": string,
            "release_date": string,
            "genre_ids": [],
            "id": number,
            "original_title": string,
            "original_language": string,
            "title": string,
            "backdrop_path": string,
            "popularity": number,
            "vote_count": number,
            "video": false,
            "vote_average": number
        }
    ],
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

export interface IGithubLastCommit {
    "sha": "ca594d47252ae9d54de19bbf591f4c54cdacf8da",
    "node_id": "MDY6Q29tbWl0MTUzNTkwODAyOmNhNTk0ZDQ3MjUyYWU5ZDU0ZGUxOWJiZjU5MWY0YzU0Y2RhY2Y4ZGE=",
    "commit": {},
    "url": "https://api.github.com/repos/bifeldy/PTI-TugasAkhir/commits/ca594d47252ae9d54de19bbf591f4c54cdacf8da",
    "html_url": "https://github.com/bifeldy/PTI-TugasAkhir/commit/ca594d47252ae9d54de19bbf591f4c54cdacf8da",
    "comments_url": "https://api.github.com/repos/bifeldy/PTI-TugasAkhir/commits/ca594d47252ae9d54de19bbf591f4c54cdacf8da/comments",
    "author": {},
    "committer": {},
    "parents": [],
    "stats": {},
    "files": []
}

export interface ITentang {
    sekilasInfo: string,
    library: [
        {
            id: number,
            img: string,
            title: string,
            content: string,
            url: string
        }
    ]
}

export interface IStaff {
    id: number,
    cast: [
        {
            cast_id: number,
            character: string,
            credit_id: string,
            gender: number,
            id: number,
            name: string,
            order: number,
            profile_path: string
        }
    ],
    crew: [
        {
            credit_id: number,
            department: string,
            gender: number,
            id: number,
            job: string,
            name: string,
            profile_path: string
        }
    ]
}