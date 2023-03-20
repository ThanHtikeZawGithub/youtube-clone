import {useState, useEffect} from 'react';
import {Box, Typography} from '@mui/material';
import Videos from './Videos';
import { FetchFromAPI} from '../utils/fetchFromAPI';
import { useParams } from 'react-router-dom';

const SearchFeed = () => {

    
    const [videos,setVideos] = useState([]);
    const { searchTerm } = useParams();    /*when we want to route url */

    useEffect(()=>{
        FetchFromAPI(`search?part=snippet&q=${searchTerm}`)
        .then((data)=> setVideos(data.items))
    },[searchTerm]);
    
    return(
        <Box p={2} sx={{overflowY:'auto', height:'90vh', flex:2}}>
        <Typography variant='h4' fontWeight='bold' mb={2} sx={{color:'white'}}>
         Search result for: <span style={{color:'#F32503'}}>{searchTerm}</span> videos
        </Typography>
        <Videos video={videos}/>
    </Box>
    )
};

export default SearchFeed