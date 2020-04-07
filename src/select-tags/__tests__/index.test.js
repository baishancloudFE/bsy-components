import React from 'react';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import SelectTags from '..';
import mountTest from '../../../__test__/shared/mountTest';

Enzyme.configure({ adapter: new Adapter() });

const options = [
  { label: '电信', value: 'dx' },
  { label: '联通', value: 'lt' },
  { label: '移动', value: 'yd' },
];

describe('SelectTags', () => {
  mountTest(SelectTags);
});
