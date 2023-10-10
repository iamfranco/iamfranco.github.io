import './App.css'
import { ProjectList } from './ProjectList'
import Projects from './components/projects/Projects'

function App() {
  return (
    <>
      <h1>Franco<br />Chan<strong>.co</strong></h1>
      <Projects projects={ProjectList} />
    </>
  )
}

export default App
