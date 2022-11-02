import { useState } from 'react'

import Head from 'next/head'
import Image from 'next/image'

import Container from '@mui/material/Container'
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';

import NavBar from '../components/NavBar'
import Title from '../components/Title'
import FavouriteBooks from '../components/FavouriteBooks'
import { Alert } from '@mui/material';

const FAVOURITE_BOOKS = [
  {
    title: "Harry Potter and the Philosopher's Stone",
    author: "J.K. Rowling",
    rating: 9
  },
  {
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    rating: 8
  }
]

export default function Home() {
  const [books, setBooks] = useState(FAVOURITE_BOOKS)
  const [title, setTitle] = useState("")
  const [author, setAuthor] = useState("")
  const [rating, setRating] = useState("")

  const [errorMsg, setErrorMsg] = useState("")

  // const postBook = ({title, author, rating}) => {
  //   return fetch(`${}`)
  // }

  const handleSubmit = (event) => {
    event.preventDefault()
    if(title.trim().length === 0) {
      setErrorMsg("Title cannot be empty")
      return
    }
    if(author.trim().length === 0) {
      setErrorMsg("Author cannot be empty")
      return
    }
    if(rating.trim().length === 0 || !isRatingNumber(rating)) {
      setErrorMsg("Rating must be a number, and cannot be empty")
      return
    }

    const newBook = ({title: title, author: author, rating: rating})
    setBooks([...books, newBook])

    // Reset the text fields
    setTitle("")
    setAuthor("")
    setRating("")
    setErrorMsg("")
  }

  const isRatingNumber = (value) => {
    return !isNaN(value)
  }

  return (
    <div>
      <Head>
        <title>Library App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavBar title={"Our Library"} />
      <main>
        <Container sx={{paddingTop: '2rem'}} maxWidth="md">
           <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column', marginBottom: "2rem"}}>
              <Title>Add a New Favourite</Title>
              <form onSubmit={handleSubmit}>
                <Grid container spacing={3}>
                  <Grid item xs={12} sm={5}>
                    <TextField
                      id="title"
                      name="title"
                      label="Book Title"
                      fullWidth
                      variant="standard"
                      value={title}
                      onChange={(event)=> { setTitle(event.target.value) }}
                    />
                  </Grid>
                  <Grid item xs={10} sm={3}>
                    <TextField
                      id="author"
                      name="author"
                      label="Author"
                      fullWidth
                      variant="standard"
                      value={author}
                      onChange={(event)=> { setAuthor(event.target.value) }}
                    />
                  </Grid>
                  <Grid item xs={10} sm={2}>
                    <TextField
                      id="rating"
                      name="rating"
                      label="Rating"
                      fullWidth
                      variant="standard"
                      value={rating}
                      onChange={(event)=> { setRating(event.target.value) }}
                    />
                  </Grid>
                  <Grid item xs={2} sm={2}>
                    <Button variant="contained" sx={{ mt: 1.5, ml: 1 }} type="submit">Add</Button>
                  </Grid>
                  <Grid item xs={10}>
                    {errorMsg !== "" && (
                      <Alert severity='error'>
                        {errorMsg}
                      </Alert>
                    )}
                  </Grid>
                </Grid>
              </form>
           </Paper>
          <FavouriteBooks books={books} />
        </Container>
      </main>
    </div>
  )
}