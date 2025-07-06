import React from 'react'
import './App.css'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Header from './components/header/Header'
import Home from './components/Home/Home'
import About from './components/about/About'
import Skills from './components/skills/Skills'
import Projects from './components/projects/Projects'
import Qualification from './components/qualification/Qualification'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'
import ScrollUp from './components/scrollup/ScrollUp'

const App = () => {
  return (
    <div>
      <Header />
      <main className='main'>
        <Home/>
        <About />
        <Skills />
        <Projects />
      {/*  <Services />*/}
        <Qualification />
        <Contact />
        <Footer />
      </main>
      <ScrollUp />
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
        style={{ fontSize: "14px" }}
        toastStyle={{
          background: "#333",
          color: "#fff",
          borderRadius: "8px",
          boxShadow: "0 4px 12px rgba(0, 0, 0, 0.15)",
          padding: "16px",
          margin: "8px",
          minWidth: "300px"
        }}
        progressStyle={{
          background: "linear-gradient(to right, #4a90e2, #67b26f)"
        }}
      />
    </div>
  )
}

export default App
