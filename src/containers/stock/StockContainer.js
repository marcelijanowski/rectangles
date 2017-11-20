import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux'

import styles from './StockContainer.css'
import Chart from '../../components/chart/Chart'

/**
 * Displays a chart of electricity usage over the course of the day.
 */
export const StockContainer = ({ bars, maxBars }, context) => {
  return (
    <Chart bars={bars} maxBars={maxBars} />
  );
};

StockContainer.propTypes = {
  bars: PropTypes.array.isRequired,
  maxBars: PropTypes.number.isRequired
}

const mapStateToProps = state => {
  return {
    bars: state.bars,
    maxBars: 5
  };
};

export default connect(mapStateToProps)(StockContainer);
