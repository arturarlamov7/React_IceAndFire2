import React, {Component} from 'react';
import ItemList from '../itemList';
import itemDetails, { Field } from '../itemDetails';
import ErrorMessage from '../errorMessage';
import gotService from '../../services/gotService';
import RowBlock from '../rowBlock';

export default class characterPage extends Component {
    gotService = new gotService();

    state = {
        selectedChar: null,
        error: false
    }

    onItemSelected = (id) => {
        this.setState({
            selectedChar: id
        })
    }

    componentDidCatch() {
        this.setState({
            error: true
        })
    }

    render() {
        if (this.state.error) {
            return <ErrorMessage/>
        }

        const ItemList = (
            <ItemList
                onItemSelected={this.onItemSelected}
                getData={this.gotService.getAllCharacters}
                renderItem={({name, gender}) => `${name} (${gender})`}/>
        )

        const itemDetails = (
            <itemDetails
            itemId={this.state.selectedChar}
            getData={this.gotService.getCharacter} >
                <Field field='gender' label='Gender'/>
                <Field field='born' label='Born'/>
                <Field field='died' label='Died'/>
                <Field field='culture' label='Culture'/>
            </itemDetails>
        )

        return (
            <RowBlock left={ItemList} right={itemDetails} />
        )
    }
}