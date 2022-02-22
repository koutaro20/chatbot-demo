import React from 'react'

import defaultDataset from './dataset'
import './assets/styles/style.css'
import { AnswersList } from './components'

export default class App extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      answers: [],
      chats: [],
      currentId: "init",
      dataset: defaultDataset,
      open: false
    }
  }

  initAnswer = () => {
    const initDateset = this.state.dataset[this.state.currentId]
    const initAnswers = initDateset.answers

    this.setState({
      answers: initAnswers
    })
  }

  componentDidMount () {
    this.initAnswer()
  }

  render() {
    return (
      <section className = "c-section">
        <div className = "c-box">
          <AnswersList answers={ this.state.answers } />
        </div>
      </section>
    );
  }
}


