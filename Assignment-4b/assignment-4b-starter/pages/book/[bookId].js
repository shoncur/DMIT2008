import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { imageList, ImageListItem, ListItemSecondaryAction } from '@mui/material'

import { getBook } from '../../utils/api/books'
import { NavBar } from '../../components/Navbar.js'
import { LoadingCircle } from '../../components/LoadingCircle.js'

export default function Book() {
    const [bookDetails, setBookDetails] = useState()

    const router = useRouter()
    const { bookId } = router.query

    useEffect(() => {
        getBook(bookId).then((data)=> {
            setBookDetails(data)
        })
    }, [bookId])

    return <>
        <NavBar />
        { !bookDetails?
            <LoadingCircle/>
            :
            <ImageList sx={{ width: 500, height: 450 }} cols={3} rowHeight={164}>
                {bookDetails.map((item) => {
                    <ImageListItem key={item.img}>

                    </ImageListItem>
                })}
            </ImageList>
        }
    </>
}