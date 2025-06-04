import React, { useState } from 'react';
import Footer from './components/Footer';
import Home from './components/Home'
import Nav from './components/Navbar'
import About from './components/About'
import memoryGameImg from './components/img/memory-game.png';
import chatBotImg from './components/img/chatbot.png';
import todoListImg from './components/img/todolist.png';
import virtualAssitanceImg from './components/img/virtual-assitance.png';
import weatherappImg from './components/img/weather-app.png';
import currencyConvetorImg from './components/img/currency-convetor.png';
import rockpaperscissorImg from './components/img/rock-paper-scissor.png';


import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

function App() {

 const [searchTerm, setSearchTerm] = useState('');

  const Project_List = [
    {
      
      img: memoryGameImg,
      title: "Memory Game",
      desc: "It is one of best Game in which we choose same cards",
      tech: "HTML ,CSS ,JavaScript",
      link: 'https://dhairya1208.github.io/Memory-Game/',
      updated: "12 Feb 2025"
    },
    { 
      img: chatBotImg,
      title: "ChatBot",
      desc: "It supports text and image inputs, displays real-time typing animations, and has a modern, responsive UI.",
      tech: "HTML ,CSS ,JavaScript",
      link: 'https://dhairya1208.github.io/chatboat/',
      updated: "18 Feb 2025"
    },
    { 
      img: todoListImg,
      title: "Todo-List",
      desc: "It allows users to add, delete, and mark tasks as complete with a clean and responsive interface.",
      tech: "HTML ,CSS ,JavaScript ,React",
      link: 'https://dhairya1208.github.io/Todo-List/',
      updated: "25 May 2025"
    },
     { 
      img: virtualAssitanceImg,
      title: "Virtual Assitance",
      desc: "It can perform tasks like telling the time, searching the web, and providing voice feedback with a smart UI.",
      tech: "HTML ,CSS ,JavaScript",
      link: 'https://dhairya1208.github.io/Virtual-Assistant/',
      updated: "20 Feb 2025"
    },
    { 
      img: currencyConvetorImg,
      title: "Currency Convetor",
      desc: "A real-time currency converter app that uses exchange rate APIs to convert between multiple currencies.",
      tech: "HTML ,CSS ,JavaScript",
      link: 'https://dhairya1208.github.io/currency-convetor/',
      updated: "20 Jan 2025"
    },
    { 
      img: weatherappImg,
      title: "Weather App",
      desc: "A dynamic weather app that fetches real-time weather data using an external API based on user input.",
      tech: "HTML ,CSS ,JavaScript",
      link: 'https://dhairya1208.github.io/Weather-App/',
      updated: "5 Feb 2025"
    },
    { 
      img: rockpaperscissorImg,
      title: "Rock-Paper-Scissor",
      desc: "A fun and interactive Rock-Paper-Scissors game built with JavaScript for playing against the computer.",
      tech: "HTML ,CSS ,JavaScript",
      link: 'https://dhairya1208.github.io/rock--paper-sisor/',
      updated: "21 Jan 2025"
    },

  ];
  return (
    <>

      <BrowserRouter>
        <Nav searchTerm={searchTerm} setSearchTerm={setSearchTerm}/>
        <Routes>
          <Route path='/' element={<Home  project={Project_List} searchTerm={searchTerm}/>}></Route>
          <Route path='/about' element={<About />}></Route>

        </Routes>
        <Footer />
      </BrowserRouter>

    </>
  );
}

export default App;
