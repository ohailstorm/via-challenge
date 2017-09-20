import React, { Component } from 'react'
import Card from './Card'
import PropTypes from 'prop-types';

class SeriesGrid extends Component {
    render() {
        let { items } = this.props
        return (
            <div>
                {
                    items &&
                    items.map((item, index) => (
                        <div className="col-lg-3 col-md-4 col-sm-12" key={index}>
                            <Card item={item} handleClick={this.props.handleClick}/>
                        </div>
                    ))
                }
                {
                    !items &&
                    <p> Sorry! Something went wrong. </p>
                }
            </div>
        )
    }
}
SeriesGrid.propTypes = {
    items: PropTypes.object,
    handleClick: PropTypes.func
}

export default SeriesGrid;
