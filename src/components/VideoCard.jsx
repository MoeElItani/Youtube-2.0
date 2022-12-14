// Imports
import { Link } from 'react-router-dom'
// Material UI
import {
   Typography,
   Card,
   CardContent,
   CardMedia,
} from '@mui/material'
import { CheckCircle } from '@mui/icons-material'

import {
   demoThumbnailUrl,
   demoVideoUrl,
   demoVideoTitle,
   demoChannelUrl,
   demoChannelTitle,
} from '../utils/constants'
const VideoCard = ({
   video: {
      id: { videoId },
      snippet,
   },
}) => {
   return (
      <Card
         sx={{
            width: {
               xs: '353px',
               sm: '95.9vw',
               md: '417px',
            },
            boxShadow: 'none',
            borderRadius: '0',
         }}
      >
         <Link
            to={
               videoId ? `/video/${videoId}` : demoVideoUrl
            }
         >
            <CardMedia
               image={
                  snippet?.thumbnails?.high?.url ||
                  demoThumbnailUrl
               }
               alt={snippet?.title}
               sx={{
                  width: {
                     sx: '44vw',
                     sm: '96vw',
                     md: '27.2vw',
                  },
                  height: {
                     xs: '24vh',
                     sm: '60vh',
                     md: '32vh',
                  },
               }}
            ></CardMedia>
         </Link>
         <CardContent
            sx={{
               backgroundColor: '#1e1e1e',
               height: '106px',
               color: '#fff',
            }}
         >
            <Link
               to={
                  snippet?.channelId
                     ? `/channel/${snippet?.channelId}`
                     : demoChannelUrl
               }
            >
               <Typography
                  variant='subtitle2'
                  fontWeight='bold'
                  color='gray'
               >
                  {snippet.channelTitle || demoChannelTitle}
                  <CheckCircle
                     sx={{
                        fontSize: 12,
                        color: 'gray',
                        ml: '5px',
                     }}
                  />
               </Typography>
            </Link>
            <Link
               to={
                  videoId
                     ? `/video/${videoId}`
                     : demoVideoUrl
               }
            >
               <Typography
                  variant='subtitle1'
                  fontWeight='bold'
                  color='#fff'
               >
                  {snippet.title.slice(0, 60) + '...' ||
                     demoVideoTitle.slice(0, 60)}
               </Typography>
            </Link>
         </CardContent>
      </Card>
   )
}

export default VideoCard
