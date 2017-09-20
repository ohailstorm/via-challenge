import React, { Component } from 'react'
import PropTypes from 'prop-types';

class DetailsHero extends Component {
    render() {
        let { imageUrl, backgroundColor="", title, description } = this.props

        let wrapperStyleObject = {
            overflow: 'hidden',
            width: "100%",
            height: "100%",
            bottom:0,
            position:"absolute",
            zIndex: -1
        }

        let innerStyleObject = {
            backgroundImage: `url(${imageUrl || ""}) `,
            backgroundColor: `${backgroundColor}`,
            backgroundRepeat: 'no-repeat',
            height: "100%",
            width: "100%",
            backgroundAttachment: "absolute",
            backgroundSize: "cover",
            backgroundPosition: "center",
            textAlign: "center",
            position: "absolute",
            top: 0
        }
        let overlayStyleObject = {
            background: `linear-gradient(to bottom, transparent, ${backgroundColor} 100%)`,
            height: "50%",
            width:"100%",
            position: "absolute",
            bottom: 0,
            left: 0
        }
        let heroMetadataStyle = {
            position: 'absolute',
            bottom: '15vh',
            left: '5vw',
            maxWidth: "75vw"
        }
        return (
            <div>
                <div className="hero-wrapper" style={wrapperStyleObject} >
                    <div src={ imageUrl } className="hero-image" style={innerStyleObject} > </div>
                    <div className="hero-overlay" style={overlayStyleObject}></div>
                </div>
                <div className="hero-metadata" style={heroMetadataStyle}>
                    <h1>{title}</h1>
                    <p>{description}</p>
                </div>
            </div>
        )
    }
}
DetailsHero.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  imageUrl: PropTypes.string,
  backgroundColor: PropTypes.string
};

export default DetailsHero;
