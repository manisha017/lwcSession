import { LightningElement } from 'lwc';

export default class LifeCyclePnt extends LightningElement {


constructor(){
    super();  
    console.log('parent constructor called');
 
}

connectedCallback()
{
    console.log('parent connectedCallback called');
 

}

renderedCallback(){
    
    console.log('parent renderedCallback called');
 
}


}