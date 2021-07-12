import React, {Component} from 'react';
import './itemList.css';
// import gotService from '../../services/gotService';
import Spinner from '../spinner';
import ErrorMessage from '../errorMessage';

export default class ItemList extends Component {

    // gotService = new gotService();

    state = {
        itemList: null
    }

    componentDidMount() {
        const  { getData } =this.props;
        getData()
        .then((itemList) => {
            this.setState({
                itemList
            })
        })
    }

    renderItems(arr) {
        return arr.map((item) => {
            const {id, name} = item;
            return (
                <li
                    key={id}
                    className="list-group-item"
                    onClick={() => this.props.onCharSelected(id)}
                    >
                    {name}
                </li>
            )
        })
    }


    render() {

        const { itemList, error } = this.state;

        if (error) {
            return <ErrorMessage/>
        }

        if (!itemList) {
            return (
                <div className="char-details rounded">
                    <Spinner/>
                </div>
            )
        }

        const items = this.renderItems(itemList);
        // if charList does not exist we will not get an Error (because the varaible declaration after the condition)

        return (
            <ul className="item-list list-group">
                {items}
            </ul>
        );
    }
}