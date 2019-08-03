import React from 'react';

class App extends React.Component {
  render () {
    return (
      <div className='App'>
        <div className='title'>Reminder Pro</div>
        <div className='form-inline'>
          <div className='form-group mr-2'>
            <input type='text' className='form-control' placeholder='I have to...' />
          </div>
          <button type='button' className='btn btn-success' >Add Reminder</button>
        </div>
      </div>
    )
  }
}

export default App;
