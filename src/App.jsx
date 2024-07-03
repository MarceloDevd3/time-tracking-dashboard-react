import React, { useState } from 'react'
import './App.css'
import Card from './components/Card';
import MainCard from './components/MainCard';
import data from './components/data/data.json'


function App() {

  const [cardData, setCardData] = useState(data)
  const [on, setOn] = useState('two')


  function handleDaily() {
      setOn(item => "one")
  }

  function handleWeekly() {
    setOn(item => "two")
  }

  function handleMonthly() {
    setOn(item => "three")
  }


  const Data0 = cardData.map(dados => {
    return (
      <Card
        name={dados.classofItem}
        backBg={dados.icon}
        title={dados.title}
        data={dados.timeframes.daily.current}
        week={"Last Daily - " + dados.timeframes.daily.previous}
      />
    )
  })

  const Data1 = cardData.map(dados => {
    return (
      <Card
        name={dados.classofItem}
        backBg={dados.icon}
        title={dados.title}
        data={dados.timeframes.weekly.current}
        week={"Last Week - " + dados.timeframes.weekly.previous}
      />
    )
  })

  const Data2 = cardData.map(dados => {
    return (
      <Card
        name={dados.classofItem}
        backBg={dados.icon}
        title={dados.title}
        data={dados.timeframes.monthly.current}
        week={"Last Monthly - " + dados.timeframes.monthly.previous}
      />
    )
  })

  const MiniCards = (on === "one") ? Data0 : (on === "two") ? Data1 : Data2;

  return (
    <div className='Container'>
      <MainCard
        handleDailyClick={handleDaily}
        handleWeeklyClick={handleWeekly}
        handleMonthlyClick={handleMonthly}
      />
      {MiniCards}
    </div>
  )
}

export default App
