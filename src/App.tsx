import { useEffect, useState } from 'react'
import { Cards } from './components/Cards/Cards'

import './styles/globalStyle.scss'


export interface Test {
  category: string
  score: number
  icon: string
}


function App() {
  const [testData, setTestData] = useState<Test[]>([])

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch("./data.json")
        const data = await response.json()
        setTestData(data)
      } catch (error) {
        console.log(`Error: ${error}`)
      }
    }
    fetchData()
  }, [])


  const dataArray: JSX.Element[] = testData.map((field, index): JSX.Element => (
    <Cards
      key={index}
      icon={field.icon}
      category={field.category}
      score={field.score}
    />
  ))


  return (
    <main>
      <section className="results">
        <h1 className='results__title'>Your Result</h1>

        <div className="results__gradient">
          <p className="results__point">76</p>

          <span className="results__span">of 100</span>
        </div>

        <p className="results__level">Great</p>

        <p className="results__description">
          You scored higher than 65% of the people who have taken these tests.
        </p>
      </section>

      <section className="summary">
        <h2 className="summary__title">Summary</h2>

        {dataArray}

        <button
          className='btn'
          aria-label="Continue to next section">
          Continue
        </button>
      </section>
    </main>
  )
}

export default App
