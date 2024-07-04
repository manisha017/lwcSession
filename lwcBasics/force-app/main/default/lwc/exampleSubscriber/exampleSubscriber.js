import { LightningElement,track,wire} from 'lwc';
import { registerListener,unregisterListener } from 'c/pubsub';
import {CurrentPageReference} from 'lightning/navigation';

export default class ExampleSubscriber extends LightningElement {
    @track valueOfColour;

    @wire(CurrentPageReference) pageRef;

    connectedCallback() {
        registerListener('changeColour', (value) => {
            this.valueOfColour = value;
        });
    }
    // connectedCallback() {
    //     registerListener('changeColour', this.handleChangedColour.bind(this));
    // }

    // handleChangedColour(value) {
    //     this.valueOfColour = value;
    // }

    disconnectedCallback(){
        unregisterListener('changeColour', (value) => {
            this.valueOfColour = value;
        });
    }

    get colorStyle(){
        return `color: ${this.valueOfColour}`
    }




}