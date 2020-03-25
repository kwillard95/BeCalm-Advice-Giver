import React from 'react'
import AdviceBox from './AdviceBox.jsx'
import axios from 'axios'

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      advice: ''
    }
  }

  getData() {
    axios.get('/advice')
    .then(response => console.log(response.data))
    .catch(err => console.log(err))
  }

  componentDidMount() {
    this.getData();
  }

  render() {
    return (
      <div class="container">
    <header id="header">
      <h1>
      BeCalm<i class="far fa-heart"></i>
      </h1>
    </header>
    <AdviceBox />
    </div>
    )
  }

}


// export default function App() {
//   return (
//     <div class="container">
//     <header id="header">
//       <h1>
//       BeCalm<i class="far fa-heart"></i>
//       </h1>
//     </header>
//     <AdviceBox />
//     </div>
//   )
// }
