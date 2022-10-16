// Material UI
import { Stack, Box } from '@mui/material'
// Components
import { VideoCard, ChannelCard } from './'
const Videos = ({ videos, justifyContent, direction }) => {
   return (
      <Stack
         direction={direction || 'row'}
         flexWrap='wrap'
         justifyContent={justifyContent}
         gap={2}
      >
         {videos.map((item, index) => (
            <Box key={index}>
               {item.id.videoId && (
                  <VideoCard video={item} />
               )}
               {item.id.channelId && (
                  <ChannelCard channelDetail={item} />
               )}
            </Box>
         ))}
      </Stack>
   )
}

export default Videos
