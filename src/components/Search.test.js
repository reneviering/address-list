import React from 'react';

import Search from './Search';

import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe('Search', () => {

  it('renders without crashing', () => {
    shallow(<Search />);
  });

  it('calls onSearchTermChange after input change', () => {

    const onSearchTermChangeCallback = jest.fn();

    const wrapper = shallow(
      <Search
        searchTerm=''
        onSearchTermChange={ onSearchTermChangeCallback} />
    );

    const simulatedChangeEvent = { target: { value: 'Hurzel' }};
    wrapper.find('input').simulate('change', simulatedChangeEvent)

    expect(onSearchTermChangeCallback).toHaveBeenCalled();

  });

  it('does not throw an error if no onSearchTermChange callback is set', () => {

    const onSearchTermChangeCallback = jest.fn();

    const wrapper = shallow(
      <Search
        searchTerm=''
        onSearchTermChange={ 'hurzel' } />
    );

    expect(() => {
      const simulatedChangeEvent = { target: { value: 'Hurzel' }};
      wrapper.find('input').simulate('change', simulatedChangeEvent)
    }).not.toThrow();

  });
});
