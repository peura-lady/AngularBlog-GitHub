export interface User {
    returnSecureToken?: boolean
    email: string
    password: string
}

export interface FbAuthResponse {
    idToken: string
    expiresIn: string
}

export interface Post {
    id?: string
    title: string
    text: string
    author: string
    date: Date
}

export interface FbCreateResponse {
    name?: string
    // name: string
}