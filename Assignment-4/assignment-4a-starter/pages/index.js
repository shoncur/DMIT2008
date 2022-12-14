import {useEffect, useState, Fragment} from 'react'

import Head from 'next/head'

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid';

import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';

import Navbar from '../components/Navbar'

import { POPULAR_AUTHORS } from '../utils/constants/popular_authors';
import { getAuthor, getWorks } from '../utils/api/authors';
import AuthorInfo from '../components/AuthorInfo';


export default function Home() {
  const currentDate = new Date();
  const [authorKey, setAuthorKey] = useState("OL23919A")
  const [authorData, setAuthorData] = useState({
    name: "J. K. Rowling",
    birthdate: "31 July 1965",
    deathdate: "unknown"
  })
  const [worksData, setWorksData] = useState([])

  useEffect(() => {
    changeAuthor()
    console.log(authorKey)
    console.log(authorData)
  }, [authorKey])

  useEffect(() => {
    changeWorks()
  }, [authorKey])

  const changeAuthor = () => {
    getAuthor(authorKey).then((data) => {
      if (data.death_date == null) {
        setAuthorData({
          name: data.name,
          birthdate: data.birth_date,
          deathdate: currentDate.getDate()+' '+(currentDate.getMonth()+1)+' '+currentDate.getFullYear()
        })
      } else {
        setAuthorData({
          name: data.name,
          birthdate: data.birth_date,
          deathdate: data.death_date
        })
      }
    })
  }

  const changeWorks = () => {
    getWorks(authorKey).then((data) => {
      setWorksData({
        bookname: data.entries.title
      })
      console.log(worksData)
    })
  }

  return (
    <div>
      <Head>
        <title>Library App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <main>
        <Container maxWidth="md">
          <Grid container spacing={4}>
            <Grid item xs={8}>
              <Box>
                <Typography
                  component="h1"
                  variant="h4"
                  align="center"
                  color="text.primary"
                  gutterBottom
                >
                  {authorData.name}
                </Typography>
                <Typography  align="center" color="text.primary" paragraph>
                  {authorData.birthdate} - {authorData.deathdate}
                </Typography>
                <TableContainer component={Paper}>
                    <Table>
                    <TableHead>
                        <TableRow>
                        <TableCell>Books in all Languages</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {/* */}
                        <TableRow>
                            <TableCell>
                                Sample Row
                            </TableCell>
                        </TableRow>
                        <AuthorInfo title={worksData}/>
                        {/* */}
                    </TableBody>
                    </Table>
                </TableContainer>


              </Box>
            </Grid>
            <Grid item xs={4}>
              
              <Box sx={{width: '100%'}}>
                <Typography
                  component="h1"
                  variant="h4"
                  align="center"
                  color="text.primary"
                  gutterBottom
                >
                  Popular Authors
                </Typography>
                <List sx={{width: '100%'}}>
                  <Divider />
                  {POPULAR_AUTHORS.map((author, index)=> {
                    return <Fragment key={index}>
                      <ListItem
                        secondaryAction={
                          <Button
                           onClick={() => {
                            setAuthorKey(author.key);
                           }}
                          >show</Button>
                        }
                      >
                        <ListItemText primary={author.name}></ListItemText>
                      </ListItem>
                      <Divider />
                    </Fragment>
                  })}
                </List>
              </Box>
            </Grid>
          </Grid>
          
        </Container>
      </main>
    </div>
  )
}
