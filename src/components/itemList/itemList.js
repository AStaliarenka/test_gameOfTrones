import React, {Component} from 'react';
import './itemList.css';
// import gotService from '../../services/gotService';
import Spinner from '../spinner';
import ErrorMessage from '../errorMessage';
import PropTypes from 'prop-types';

class ItemList extends Component {

    // gotService = new gotService();

    // указываем что getData должен быть массивом объектов, а onItemSelected - функцией
    static defaultProps = {
        onItemSelected: () => {}
    }
    
    static propTypes = {
        onItemSelected: PropTypes.func
    }

    

    renderItems(arr) {
        return arr.map((item) => {
            const {id} = item;
            const label = this.props.renderItem(item);
            return (
                <li
                    key={id}
                    className="list-group-item"
                    onClick={() => this.props.onItemSelected(id)}
                    >
                    {label}
                </li>
            )
        })
    }

    render() {

        const {data} = this.props;
        const items = this.renderItems(data);
        // if charList does not exist we will not get an Error (because the varaible declaration after the condition)

        return (
            <ul className="item-list list-group">
                {items}
            </ul>
        );
    }
}

const withData = (View) => {
    return class extends Component {

        state = {
            data: null
        }
    
        componentDidMount() {
            const { getData } = this.props;
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

export default withData(ItemList);