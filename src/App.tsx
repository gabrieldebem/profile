import './App.css'
import { BookLayout } from './Layouts/BookLayout'
import { Profile } from './Pages/Profile'
import { Resume } from './Pages/Resume'

function App() {
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
