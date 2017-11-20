import React from 'react';
import PropTypes from 'prop-types';

import styles from './Chart.css';

/**
 * The Chart component renders time series bar charts as SVG.
 */
const Chart = ({ bars, maxBars }) => {
  
  // Truncate the bars array if we've been given too much data.
  if (bars.length > maxBars) {
      bars = bars.slice(0, maxBars);
  }
  return (
    <div className="chart">
      <svg version="1.1"  className={styles.chart}>
        {/* Bars. */}
        <g key="bars" className={styles.bars}>
          {bars.map(({ x,y, barWidth, barHeight }, i) => {
            return (
              <rect
                key={`bar-${i}`}
                className="bar"
                x={x}
                y={y}
                width={barWidth}
                height={barHeight}
                data-value={barHeight}
              />
            );
          })}
        </g>
      </svg>
    </div>
  );
};

Chart.propTypes = {
  bars: PropTypes.arrayOf(PropTypes.shape({
    barHeight: PropTypes.number,
    barWidth: PropTypes.number,
    x: PropTypes.number,
    y: PropTypes.number
  }).isRequired).isRequired,
  maxBars: PropTypes.number.isRequired,
};


export default Chart;
