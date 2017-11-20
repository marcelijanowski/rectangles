import React from 'react';
import { shallow } from 'enzyme';
import Chart from './Chart';

it('renders without crashing', () => {
  const maxBars = 5;
  const bars = [{
    x: 0,
    y: 0,
    barWidth: 10,
    barHeight: 200
  }]
  const wrapper = shallow(<Chart maxBars={maxBars} bars={bars} />);

});
