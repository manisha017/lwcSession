import { LightningElement } from 'lwc';

export default class ChildComCustomEvent extends LightningElement {
    handleChange(event){
        const example = event.target.value;
        const customEventExample = new CustomEvent('mycustomevent',{detail : example});
        this.dispatchEvent(customEventExample);
    }

}