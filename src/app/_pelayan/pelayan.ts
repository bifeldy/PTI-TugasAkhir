export interface IPengumumanHome {
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