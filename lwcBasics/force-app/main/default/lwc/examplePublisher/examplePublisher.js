import { LightningElement,wire,track } from 'lwc';
import { fireEvent } from 'c/pubsub';
import {CurrentPageReference} from 'lightning/navigation';


export default class ExamplePublisher extends LightningElement {

    @track valueOfColour = 'blue';

    @wire(CurrentPageReference) pageRef;

    options = [
        { label: 'Green', value: 'green' },
        { label: 'blue', value: 'blue' },
        { label: 'Red', value: 'red' }
    ];

    handleChange(event) {
        this.valueOfColour = event.target.value;
        console.log(this.valueOfColour);
    }

    handleChangeColour() {
        fireEvent(this.pageRef, 'changeColour', this.valueOfColour);
    }


}