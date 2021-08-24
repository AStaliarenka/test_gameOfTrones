import React, {Component} from 'react';
import './itemList.css';
// import gotService from '../../services/gotService';
import Spinner from '../spinner';
import ErrorMessage from '../errorMessage';
//import PropTypes from 'prop-types';
import gotService from '../../services/gotService';

export default withData = (View, getData) => {
    return class extends Component {

        state = {
            data: null
        }
    
        componentDidMount() {
            // const { getData } = this.props;
            getData()
            .then((data) => {
                this.setState({
                    data
                })
            })
        }

        render() {
            const { data, error } = this.state;

        if (error) {
            return <ErrorMessage/>
        }

        if (!data) {
            return (
                <div className="char-details rounded">
                    <Spinner/>
                </div>
            )
        }
            return <View {...this.props} data={data} />
        }
    }
}