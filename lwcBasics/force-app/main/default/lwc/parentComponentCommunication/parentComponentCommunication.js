import { LightningElement } from 'lwc';

export default class ParentComponentCommunication extends LightningElement {

    handleChange(event){
        this.template.querySelector('c-child-component-communication').changeMessage(event.target.value);
    }
}