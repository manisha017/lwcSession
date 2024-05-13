import { LightningElement,track } from 'lwc';

export default class ParentCompCustomEvent extends LightningElement {

    @track message;

    listenerChange(event){
        this.message = event.detail;
    }
}