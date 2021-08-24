import React, {Component} from 'react';
import './itemList.css';
// import gotService from '../../services/gotService';
import Spinner from '../spinner';
import ErrorMessage from '../errorMessage';
//import PropTypes from 'prop-types';
import gotService from '../../services/gotService';

function ItemList(props) {

    // gotService = new gotService();

    function renderItems(arr) {
        return arr.map((item) => {
            const {id} = item;
            const label = props.renderItem(item);
            return (
                <li
                    key={id}
                    className="list-group-item"
                    onClick={() => props.onItemSelected(id)}
                    >
                    {label}
                </li>
            )
        })
    }

        const {data} = props;
        const items = renderItems(data);
        // if charList does not exist we will not get an Error (because the varaible declaration after the condition)

        return (
            <ul className="item-list list-group">
                {items}
            </ul>
        );
    
}

// указываем что onItemSelected должен быть функцией
ItemList.defaultProps = {
    onItemSelected: () => {}
}


const withData = (View, getData) => {
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
const {getAllCharacters} = new gotService();
export default withData(ItemList, getAllCharacters);