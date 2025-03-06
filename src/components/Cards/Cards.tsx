import { Test } from '../../App'

import './cardsStyle.scss'


interface CardProps extends Test {
}


export const Cards: React.FC<CardProps> = (props) => {
   const getBackgroundClass = (category: string) => {
      switch (category.toLowerCase()) {
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

   function getColorClass(category: string) {
      switch (category.toLowerCase()) {
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
      <div className={`summary__area ${getBackgroundClass(props.category)} `}>

         <div className="summary__wrapper">
            <img src={props.icon} alt={`Icon for ${props.category} category`} />

            <h3 className={`summary__subtitle ${getColorClass(props.category)}`}>
               {props.category}
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
