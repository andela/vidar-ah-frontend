import React from 'react';
import { shallow } from 'enzyme';
import AlertModal from '../../components/AlertModal';

describe('Alert modal component', () => {
  it('should render the alert modal component without crashing', () => {
    const wrapper = shallow(
      <AlertModal
        show
        closeAlertModal={f => f}
        message="Please try again"
        variant="Primary"
      />
    );
    expect(wrapper.find('.alert-test').exists()).toBe(true);
  });
});
