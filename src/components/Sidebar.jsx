import { Stack } from '@mui/material'
import { categories } from '../utils/constants'

const selectedCategory = 'New'

const Sidebar = () => (
   <Stack
      direction='row'
      sx={{
         overflowY: 'auto',
         height: { sx: 'auto', md: '95%' },
         flexDirection: { md: 'column' },
      }}
   >
      {categories.map((category) => (
         <button
            className='category-btn'
            key={category.name}
            style={{
               background:
                  category.name === selectedCategory &&
                  '#fc1503',
               color: '#fff',
            }}
         >
            <span
               style={{
                  color:
                     category.name === selectedCategory
                        ? '#fff'
                        : '#fc1503',
                  marginRight: '12px',
               }}
            >
               {category.icon}
            </span>
            <span
               style={{
                  opacity:
                     category.name === selectedCategory
                        ? 1
                        : 0.8,
               }}
            >
               {category.name}
            </span>
         </button>
      ))}
   </Stack>
)

export default Sidebar