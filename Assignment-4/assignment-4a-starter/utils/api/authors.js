import { BASE_URL } from "./base";

const getAuthor = (authorKey) => {
    return fetch(`${BASE_URL}/authors/${authorKey}.json`)
        .then((response)=> {
            return response.json()
        }).then((data)=> {
            return Promise.resolve(data)
        })
}

const getWorks = (authorKey) => {
    return fetch(`${BASE_URL}/authors/${authorKey}/works.json`)
        .then((response)=> {
            return response.json()
        }).then((data)=> {
            return Promise.resolve(data)
        })
}

export { getAuthor, getWorks }