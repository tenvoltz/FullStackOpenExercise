import { useState } from 'react'

const Button = ({name, onclick}) => <button onClick={onclick}>{name}</button>
const Statistics = ({good, bad, neutral}) => {
    const getTotal = () => good + neutral + bad
    const getAverage = () => (good - bad) / getTotal()
    const getPositivePercent = () => good / getTotal() * 100
    if(getTotal() === 0) {
        return (<p>No feedback given</p>)
    }
    return (
        <table><tbody>
            <StatisticLine name="good" value={good} />
            <StatisticLine name="neutral" value={neutral} />
            <StatisticLine name="bad" value={bad} />
            <StatisticLine name="all" value={getTotal()}/>
            <StatisticLine name="average" value={getAverage()}/>
            <StatisticLine name="positive" value={getPositivePercent() + " %"}/>
        </tbody></table>
    )
}
const StatisticLine = ({name, value}) => <tr><td>{name}</td><td>{value}</td></tr>

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
        <h1>give feedback</h1>
        <Button name = "Good" onclick={()=>setGood(good + 1)} />
        <Button name = "Neutral" onclick={()=>setNeutral(neutral + 1)} />
        <Button name = "Bad" onclick={()=>setBad(bad + 1)} />
        <h1>statistics</h1>
        <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

export default App