import './App.scss'
import { ProjectList } from './ProjectList'
import Contact from './components/contact/Contact'
import Intro from './components/intro/Intro'
import Projects from './components/projects/Projects'

function App() {
  return (
    <>
      <Intro />
      <Contact />
      <Projects projects={ProjectList} />
    </>
  )
}

export default App
