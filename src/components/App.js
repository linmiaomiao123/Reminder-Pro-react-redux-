import React from 'react';
import PropTypes from 'prop-types'
import moment from 'moment'

import { connect } from 'react-redux'
import { addReminder, deleteReminder, clearReminders } from '../actions'

class App extends React.Component {
  
  constructor(props) {
    super(props)
    this.state = {
      text: '',
      dueDate: ''
    }
  }

  addReminder () {
    this.props.addReminder(this.state.text, this.state.dueDate)
  }

  /** 删除当前条 */
  deleteReminder (id) {
    this.props.deleteReminder(id)
  }

  /** 清空所有 */
  clearReminders () {
    this.props.clearReminders()
  }

  renderReminders() {
    const { reminders } = this.props
    return (
      <ul className='list-group col-sm-8 mt-2'>
        {
          reminders.map(reminder => {
            return (
              <li key={reminder.id} className='list-group-item'>
                <div className='list-item'> 
                  <div>{reminder.text}</div>
                  <div><em>{moment(new Date(reminder.dueDate)).fromNow()}</em></div>
                </div>
                <div className='list-item delete-button' onClick={() => this.deleteReminder(reminder.id) }>&#x2715;</div>
              </li>
            )
          })
        }
      </ul>
    )
  }

  render () {
    return (
      <div className='App'>
        <div className='title'>Reminder Pro</div>
        <div className='form-inline'>
          <div className='form-group mr-2'>
            <input
              type='text'
              className='form-control'
              placeholder='I have to...'
              onChange={(event) => this.setState({text: event.target.value})}
            />
            <input 
              type='datetime-local'
              className='form-control'
              onChange={(event) => this.setState({dueDate: event.target.value})}
            />
          </div>
          <button
            type='button' 
            className='btn btn-success' 
            onClick={() => this.addReminder()}
          >
            Add Reminder
          </button>
        </div>
        {this.renderReminders()}
        <div
          className='btn btn-danger mt-3'
          onClick={() => this.clearReminders()}
        >
          Clear Reminders
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    reminders: state
  }
}
export default connect(mapStateToProps, { addReminder, deleteReminder, clearReminders })(App);

App.prototypes = {
  reminders: PropTypes.array.isrequired,
  addReminder: PropTypes.func.isrequired,
  deleteReminder: PropTypes.func.isrequired,
  clearReminders: PropTypes.func.isrequired
}
