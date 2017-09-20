import React, { Component } from 'react';
import { getSeriesDetails } from '../state/Actions'
import { connect } from 'react-redux'
import { bindActionCreators} from 'redux'
import LoadingSpinner from '../components/LoadingSpinner'
import Navbar from '../components/Navbar'
import DetailsHero from '../components/DetailsHero'

class SeriesDetails extends Component {
    componentDidMount() {
        if(this.props.match.params && !this.props.currentSeries){
            this.props.getSeriesDetails(this.props.match.params.slug)
        }
    }

    render() {
        const { currentSeries = {}, isLoadingData } = this.props;
        const content = currentSeries && currentSeries.content;
        const heroImageUrl = content && content.images
        && content.images.hero169
        && content.images.hero169.template
        && content.images.hero169.template.replace("{?width,height,token}", "")


        return (
            <div>
                <Navbar />
                <div className="container-fluid">
                    {
                        isLoadingData &&
                        <div className="col-lg-12">

                            <div className="row">
                                <div className="col-lg-3 col-lg-offset-5">
                                    <LoadingSpinner spinnerColor="#000000"/>
                                </div>
                            </div>
                        </div>
                    }
                    {
                        !isLoadingData && content && heroImageUrl &&
                        <div className="row">
                            <DetailsHero
                                imageUrl={heroImageUrl}
                                backgroundColor="#ffffff"
                                title={content.title}
                                description={content.synopsis}
                                />
                        </div>
                    }

                    {
                        !content && !isLoadingData &&
                        <div className="row">
                            <div className="col-lg-5 col-lg-offset-3">
                                <h1>Sorry!</h1>
                                <p>This show doesn't exist.</p>
                            </div>
                        </div>
                    }
                </div>
            </div>
        )
    }
}

export default connect(
    state => state.series,
    dispatch => bindActionCreators({
        getSeriesDetails
    },
    dispatch)
)(SeriesDetails);
