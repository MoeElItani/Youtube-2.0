// Imports
import { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
// React Player
import ReactPlayer from 'react-player'
// Material UI
import { Stack, Box } from '@mui/system'
import { Typography } from '@mui/material'
import { CheckCircle } from '@mui/icons-material'
// API
import { fetchFromAPI } from '../utils/fetchFromApi'
// Components
import { Videos } from './'

const VideoDetail = () => {
   const [videoDetail, setVideoDetail] = useState(null)
   const [videos, setVideos] = useState(null)

   const { id } = useParams()
   useEffect(() => {
      fetchFromAPI(
         `videos?part=snippet,statistics&id=${id}`
      ).then((data) => setVideoDetail(data.items[0]))
      fetchFromAPI(
         `search?part=snippet&relatedToVideoId=${id}&type=video`
      ).then((data) => setVideos(data.items))
   }, [id])

   if (!videoDetail?.snippet) return 'Loading...'
   if (!videos) return 'Loading...'
   const {
      snippet: { title, channelId, channelTitle },
      statistics: { viewCount, likeCount },
   } = videoDetail

   console.log(videos)

   return (
      <Box minHeight='95vh'>
         <Stack direction={{ xs: 'column', md: 'row' }}>
            <Box flex={1}>
               <Box
                  sx={{
                     width: '100%',
                     position: 'sticky',
                     top: '86px',
                  }}
               >
                  <ReactPlayer
                     url={`https://www.youtube.com/watch?v=${id}`}
                     className='react-player'
                     controls
                  />

                  <Stack
                     direction='row'
                     justifyContent='space-between'
                     sx={{ color: '#fff' }}
                     px={2}
                     py={1.5}
                  >
                     <Link to={`/channel/${channelId}`}>
                        <Typography
                           variant={{
                              sm: 'subtitle1',
                              md: 'h6',
                           }}
                           color='#fff'
                           sx={{ opacity: 0.7 }}
                        >
                           {channelTitle}
                           <CheckCircle
                              sx={{
                                 fontSize: '12px',
                                 color: '#fff',
                                 opacity: '0.7',
                                 ml: '5px',
                              }}
                           />
                        </Typography>
                     </Link>
                     <Stack
                        direction='row'
                        gap='20px'
                        alignItems='center'
                     >
                        <Typography
                           variant='body1'
                           sx={{ opacity: 0.7 }}
                        >
                           {parseInt(
                              viewCount
                           ).toLocaleString()}{' '}
                           views
                        </Typography>
                        <Typography
                           variant='body1'
                           sx={{ opacity: 0.7 }}
                        >
                           {parseInt(
                              likeCount
                           ).toLocaleString()}{' '}
                           likes
                        </Typography>
                     </Stack>
                  </Stack>
                  <Typography
                     color='#fff'
                     variant='h5'
                     fontWeight='bold'
                     px={2}
                  >
                     {title}
                  </Typography>
               </Box>
            </Box>
         <Box
            px={2}
            py={{ md: 1, xs: 5 }}
            justifyContent='center'
            alignItems='center'
         >
            <Videos videos={videos} direction='column' />
         </Box>
         </Stack>
      </Box>
   )
}

export default VideoDetail
