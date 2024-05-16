import { LightningElement } from 'lwc';

export default class ParentComCustomEvent extends LightningElement {
message;
constructor(){
    super();
    this.template.addEventListener('mycustomevent',this.handleCsListener.bind(this));

}


handleCsListener(event){
    this.message = event.detail;
}



}