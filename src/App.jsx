import './App.css'
import { Route, Routes } from 'react-router';
import Header from './components/Header'
import Home from './components/Home';
import Projects from './components/Projects';
import SingleProject from './components/SingleProject';
import AboutMe from './components/AboutMe';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {

  return (
    <div className='app-wrapper'>
      <Header />
      <main className="app-content">
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/projects" element={<Projects/>} />
          <Route path="/projects/:title" element={<SingleProject/>} />
          <Route path="/aboutme" element={<AboutMe/>} />
          <Route path="/getintouch" element={<Contact/>} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App
