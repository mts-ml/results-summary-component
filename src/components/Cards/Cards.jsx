import PropsTypes from 'prop-types'


import './cardsStyle.scss'


Cards.propTypes = {
   key: PropsTypes.number.isRequired,
   icon: PropsTypes.string.isRequired,
   title: PropsTypes.string.isRequired,
   score: PropsTypes.number.isRequired
}


export default function Cards(props) {

   const getBackgroundClass = (title) => {
      switch (title.toLowerCase()) {
         case 'reaction':
            return 'summary__area--red red'
         case 'memory':
            return 'summary__area--yellow yellow'
         case 'verbal':
            return 'summary__area--green green'
         case 'visual':
            return 'summary__area--blue blue'
      }
   }

   function getColorClass(title) {
      switch (title.toLowerCase()) {
         case 'reaction':
            return 'red'
         case 'memory':
            return 'yellow'
         case 'verbal':
            return 'green'
         case 'visual':
            return 'blue'
      }
   }


   return (
      <div className={`summary__area ${getBackgroundClass(props.title)} `}>

         <div className="summary__wrapper">
            <img src={props.icon} alt={`Icon for ${props.title} category`} />

            <h3 className={`summary__subtitle ${getColorClass(props.title)}`}>
               {props.title}
            </h3>
         </div>

         <div className="summary__span_div">
            <span className="summary__score"
               aria-label={`Your score is ${props.score} out of 100`}>
               {props.score}
            </span>

            <span className="summary__span">/ 100</span>
         </div>
      </div>
   )
}
