import React from 'react'
import AdviceBox from './AdviceBox.jsx'
import axios from 'axios'

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      list: [],
      advice: ''
    }

    this.getAdvice = this.getAdvice.bind(this);
  }

  getData() {
    axios.get('/advice')
    .then(response => this.setState({list: response.data}))
    .then(() => this.getAdvice)
    .catch(err => console.log(err))
  }

  componentDidMount() {
    this.getData();
  }

  getAdvice(e) {
    e.preventDefault();
    const adviceLength = this.state.list.length;
    const randomAdvice = Math.floor(Math.random() * adviceLength);
    this.setState({advice: this.state.list[randomAdvice]})
  }

  render() {
    // this.getAdvice();
    return (
      <div class="container">
    <header id="header">
      <h1>
      BeCalm<i class="far fa-heart"></i>
      </h1>
    </header>
    <AdviceBox advice={this.state.advice} getAdvice={this.getAdvice} />
    </div>
    )
  }
}

