import {useState, useEffect} from 'react'

import {useRouter} from 'next/router'

import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import NavBar from '@components/NavBar';
import { getAgency } from '@utils/api/agencies';
import LoadingCircle from '@components/LoadingCircle';
import Grid from '@mui/material/Grid'
import SimpleDetailsCard from '@components/SimpleDetailsCard';

export default function Agency() {
    const [agencyDetails, setAgencyDetails] = useState()

    const router = useRouter()
    const {id} = router.query

    useEffect(()=> {
        getAgency(id).then((data)=> {
            console.log(data)
            setAgencyDetails(data)
            console.log(agencyDetails)
        })
    }, [id])

    return <>
        <NavBar />
        {!agencyDetails ? 
        <LoadingCircle /> :
        <Container sx={{paddingTop:2}} component="main">
            <Grid container>
                <Grid item xs="2">
                    <img
                        src={agencyDetails.logo_url}
                        style={{
                            width: '120px'
                        }}
                    />
                </Grid>
                <Grid item xs="10">
                    <Typography variant="h3">
                        {agencyDetails.name}
                    </Typography>
                </Grid>
                <Grid item xs="4">
                    <Typography variant="h5">
                        Launch Details
                    </Typography>
                    <SimpleDetailsCard
                        title="Total Launches"
                        description={agencyDetails.total_launch_count}
                    />
                    <SimpleDetailsCard
                        title="Successful Launches"
                        description={agencyDetails.successful_launches}
                    />
                </Grid>
                <Grid item xs="4">
                    <Typography variant="h5">
                        Agency Information
                    </Typography>
                    <SimpleDetailsCard
                        title="Administrator"
                        description={agencyDetails.administrator}
                    />
                    <SimpleDetailsCard
                        title="Space Agency Details"
                        description={`Founded ${agencyDetails.founding_year}`}
                        subDescription={agencyDetails.description}
                    />
                </Grid>
            </Grid>
        </Container>
        }
    </>
}