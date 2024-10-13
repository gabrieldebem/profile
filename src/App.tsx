import { useState } from 'react'
import './App.css'
import { BookLayout } from './Layouts/BookLayout'
import { Profile } from './Pages/Profile'
import { Divider } from '@mui/material'
import { Resume } from './Pages/Resume'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BookLayout>
        <Profile />
        <Resume />
      </BookLayout>
    </>
  )
}

export default App
