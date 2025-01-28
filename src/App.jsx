import Cards from './components/Cards/Cards'
import data from '../data.json'


import './styles/globalStyle.scss'


function App() {

  const dataArray = data.map((field, index) => (
    <Cards
      key={index}
      icon={field.icon}
      title={field.category}
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
