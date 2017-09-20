import React from 'react';
import ReactDOM from 'react-dom';
import { Main } from './Main';
import { shallow } from 'enzyme';
import LoadingSpinner from '../components/LoadingSpinner'

it('renders without crashing', () => {
    //mocking some functions from the connected state
    const props = {
        getSeries: jest.fn(),
        setCurrentSeriesFromAllSeriesList: jest.fn()
    }
    const div = document.createElement('div');
    ReactDOM.render(<Main {...props} />, div);
});

it('calls getSeries on app launch', () => {
    //mocking some functions from the connected state
    const props = {
        getSeries: jest.fn(),
        setCurrentSeriesFromAllSeriesList: jest.fn()
    }
    const div = document.createElement('div');
    ReactDOM.render(<Main {...props} />, div);
    expect(props.getSeries).toHaveBeenCalled()
});

it('shows a loading spinner if isLoadingData is true', () => {
    //mocking some functions from the connected state
    const props = {
        getSeries: jest.fn(),
        setCurrentSeriesFromAllSeriesList: jest.fn(),
        isLoadingData: true
    }
    const app = shallow(<Main {...props} />)
    expect(app.find(LoadingSpinner).length).toBe(1)
});

it('should hide the loading spinner if isLoadingData is false', () => {
    //mocking some functions from the connected state
    const props = {
        getSeries: jest.fn(),
        setCurrentSeriesFromAllSeriesList: jest.fn(),
        isLoadingData: false
    }
    const app = shallow(<Main {...props} />)
    expect(app.find(LoadingSpinner).length).toBe(0)
});
