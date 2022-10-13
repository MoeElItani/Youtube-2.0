// Imports
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
// Material UI
import { Box } from '@mui/system'
// Components
import { Videos, ChannelCard } from './'
// API
import { fetchFromAPI } from '../utils/fetchFromApi'

const ChannelDetail = () => {
   const [videos, setVideos] = useState([])
   const [channelDetail, setChannelDetail] = useState(null)
   const { id } = useParams()
   //  console.log(channelDetail)
   //  console.log(videos)

   useEffect(() => {
      fetchFromAPI(`channels?part=snippet&id=${id}`).then(
         (data) => setChannelDetail(data?.items[0])
      )

      fetchFromAPI(
         `search?channelId=${id}&part=snippet&order=date`
      ).then((data) => setVideos(data?.items))
   }, [id])

   return (
      <Box minHeight='95vh'>
         <Box>
            <div
               style={{
                  background:
                     'linear-gradient(180deg, rgba(164,17,17,1) 0%, rgba(0,0,0,1) 100%)',
                  filter:
                     'progid:DXImageTransform.Microsoft.gradient(startColorstr="#000000",endColorstr="#a41111",GradientType=1)',
                  // width: '100%',
                  height: '300px',
                  zIndex: 10,
               }}
            />
            <ChannelCard
               channelDetail={channelDetail}
               marginTop='-150px'
            />
         </Box>
         <Box display='flex' p='2'>
            <Box
               sx={{
                  mr: { sm: '140px' },
               }}
            />
            <Videos videos={videos} />
         </Box>
      </Box>
   )
}

export default ChannelDetail
