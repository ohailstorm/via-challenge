import React from 'react';
import ReactDOM from 'react-dom';
import DetailsHero from './DetailsHero';
import configureMockStore from 'redux-mock-store'
import {shallow} from 'enzyme';


it('should set the background image url on the hero element', () => {
    let myProps = {
        imageUrl: "http://localhost/someimage.jpg"
    }
    let heroComponent = shallow(<DetailsHero {...myProps}/>);
    expect(heroComponent.find('.hero-image').get(0).props.style.backgroundImage).toContain(myProps.imageUrl)
});

it('should set a title from props', () => {
    let myProps = {
        title: "myTitle"
    }
    let heroComponent = shallow(<DetailsHero {...myProps}/>);
    expect(heroComponent.find('h1').text()).toBe(myProps.title)
});

it('should set a description from props', () => {
    let myProps = {
        title: "myTitle",
        description: "myDescription"
    }
    let heroComponent = shallow(<DetailsHero {...myProps}/>);
    expect(heroComponent.find('p').text()).toBe(myProps.description)
});
