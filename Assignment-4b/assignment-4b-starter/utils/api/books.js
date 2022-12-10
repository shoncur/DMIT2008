import { BASE_URL } from './base.js'

const getBook = (bookId) => {
    return fetch(`${BASE_URL}/book/${bookId}/`)
        .then((response)=> {
            return response.json()
        }).then((data)=> {
            return data
        })
}

export { getBook }