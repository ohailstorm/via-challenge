import React, { Component } from 'react';
import '../styles/Main.css';
import { connect } from 'react-redux'
import { getSeries, setCurrentSeriesFromAllSeriesList } from '../state/Actions'
import { bindActionCreators} from 'redux'
import LoadingSpinner from '../components/LoadingSpinner'
import SeriesGrid from '../components/SeriesGrid'
import Navbar from '../components/Navbar'

const mapStateToProps = state => (state.series);

const mapDispatchToProps = dispatch => bindActionCreators({
    getSeries,
    setCurrentSeriesFromAllSeriesList
},
dispatch)

class Main extends Component {
    componentDidMount = () => {
        if (!this.props.seriesList){
            this.props.getSeries()
        }
        this.unsetCurrentSeries()
    }

    unsetCurrentSeries = () => {
        this.props.setCurrentSeriesFromAllSeriesList()
    }
    render() {
        let { isLoadingData, seriesList } = this.props;

        return (
            <div className="Main">
                <Navbar />
                <div className="container-fluid">
                    <div className="col-lg-12">
                        <h1>All Series</h1>
                    </div>

                    <div className="col-lg-12">
                        {   isLoadingData &&
                            <LoadingSpinner spinnerColor="#000" />
                        }
                        {   !isLoadingData &&
                            <SeriesGrid items={seriesList} handleClick={this.props.setCurrentSeriesFromAllSeriesList} />
                        }
                    </div>
                </div>
            </div>
        );
    }
}

export { Main }; //for unit testing
export default connect(mapStateToProps, mapDispatchToProps)(Main);
