import React from 'react';
import { mount } from 'enzyme';
import { BrowserRouter } from 'react-router-dom';
import RectArticleSummary from '../../components/rectArticleSummary/Index';

describe('RectArticleSummary component', () => {
  let component;

  it('renders correctly', () => {
    component = mount(
      <BrowserRouter>
        <RectArticleSummary
          src="https://picsum.photos/200/300"
          header="Test header"
          text="Test body"
          name="Olajide Ayinla"
          time="2019-04-10T16:39:22.847Z"
          url="https://imgur" />
      </BrowserRouter>
    );
    expect(component.find('.card-outline').exists()).toBe(true);
  });
});
