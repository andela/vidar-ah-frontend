/* eslint-disable no-unused-vars */
import React from 'react';
import { shallow } from 'enzyme';
import AuthRequired from '../../components/authRequired/index';

describe('AuthRequired component', () => {
  it('should render correctly', () => {
    const wrapper = shallow(<AuthRequired />);
  });

  it('it returns component with true logged in prop', () => {
    const wrapper = shallow(<AuthRequired Component />);
  });
});
