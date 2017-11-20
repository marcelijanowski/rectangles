import React from 'react';
import { connect } from 'react-redux'

import { addBar } from '../../reducers/bar/bar'
import styles from './Form.css';

let Form = ({ dispatch }) => {
  let x,y,barWidth, barHeight;
  return (
    <div>
    <form
     onSubmit={e => {
       e.preventDefault()

       dispatch(addBar({
         x: x.value,
         y: y.value,
         barWidth: barWidth.value,
         barHeight: barHeight.value
       }))
       x.value = "";
       y.value = "";
       barWidth.value = "";
       barHeight.value = "";
     }}
   >

      <div>
        <label htmlFor="x">X Position:</label>
        <input type="number" name="x" id="x"  ref={node => {
            x = node
          }}/>
      </div>
      <div>
        <label htmlFor="y">Y Position:</label>
        <input type="number" name="y" id="y"  ref={node => {
            y = node
          }} />
      </div>
      <div>
        <label htmlFor="width">Width:</label>
        <input type="number" name="width" id="width"  ref={node => {
            barWidth = node
          }} />
      </div>
      <div>
        <label htmlFor="height">Height:</label>
        <input type="number" name="height" id="height"  ref={node => {
            barHeight = node
          }} />
      </div>

    <button type="submit" className="action-button">Add rectangle</button>
    </form>
    </div>
  )
}

Form = connect()(Form)

export default Form
