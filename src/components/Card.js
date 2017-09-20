import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types';

class Card extends Component {
    render() {
        let {content, publicPath} = this.props.item
        
        let styleObject = {
            backgroundImage: `url(${content.images.landscape.url || ""})`,
            backgroundColor: 'black',
            backgroundRepeat: 'no-repeat'
        }
        return (
            <Link to={`/series/${publicPath}`} className="card" style={styleObject} onClick={() => this.props.handleClick(this.props.item)} />
        )
    }
}

Card.propTypes = {
    item: PropTypes.object
}

export default Card;
