import React, {Component} from 'react';
import './itemList.css';
import gotService from '../../services/gotService';
import Spinner from '../spinner';

export default class ItemList extends Component {

    gotService = new gotService();

    state = {
        charList: null
    }

    componentDidMount() {
        this.gotService.getAllCharacters()
        .then( (charList) => {
            this.setState({
                charList
            })
        })
    }

    renderItems(arr) {
        return arr.map((item, i) => {
            return (
                <li 
                    key={i}
                    className="list-group-item"
                    onClick={ () => this.props.onCharSelected(i) }
                    >
                    {item.name}
                </li>
            )
        })
    }
    // key={i} плохой метод, тк ключ должен быть уникальным, но здесь нам пофиг

    render() {

        const { charList } = this.state;

        if (!charList) {
            return (
                <div className="char-details rounded">
                    <Spinner/>
                </div>
            )
        }

        const items = this.renderItems(charList);
        // if charList does not exist we will not get an Error (because the varaible declaration after the condition)

        return (
            <ul className="item-list list-group">
                {items}
            </ul>
        );
    }
}