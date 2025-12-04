import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './Component/Navbar/Navbar';
import { useUser } from './Context/Context';
import FirstBack from './Component/FirstPage/FirstBack';
import Herosection from './Component/Hero/Herosection';
import Aboutmetwo from './Pages/Aboutmetwo';
import ReactSkill from './Pages/Skills/React';
import Node from './Pages/Skills/Node';
import Ui from './Pages/Skills/Ui';
import Dbms from './Pages/Skills/Dbms';
import JS from './Pages/Skills/JS';
import Tailwindcss from './Pages/Skills/Tailwindcss';

function App() {
  const { greetings, showIntro, setShowIntro } = useUser();

  // Kitni der tak first page dikhana hai, phir Hero section par switch
  useEffect(() => {
    const totalGreetings = greetings.length;
    const perGreetingTime = 300; // Context.jsx me interval ke barabar rakho

    const totalTime = totalGreetings * perGreetingTime;

    const timeoutId = setTimeout(() => {
      setShowIntro(false);
    }, totalTime);

    return () => clearTimeout(timeoutId);
  }, [greetings.length, setShowIntro]);

  return (
    // Yahan se pura page normal body ke sath scroll karega, koi second scroll area nahi
    <div className="bg-white min-h-screen">
      <BrowserRouter>
        {/* Navbar sirf tab dikhana hai jab intro khatam ho chuka ho */}
        {!showIntro && <Navbar />}
        <Routes>
          <Route
            path="/"
            element={showIntro ? <FirstBack /> : <Herosection />}
          />
          <Route path='/About' element={<Aboutmetwo/>}/>
          <Route path='/React' element={<ReactSkill/>}/>
          <Route path='/Node' element={<Node/>}/>
          <Route path='/UI' element={<Ui/>}/>
          <Route path='/DBMS' element={<Dbms/>}/>
          <Route path='/JS' element={<JS/>}/>
          <Route path='/Tailwind' element={<Tailwindcss/>}/>

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
