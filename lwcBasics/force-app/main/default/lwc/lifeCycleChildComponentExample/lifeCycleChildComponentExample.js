import { LightningElement } from 'lwc';

export default class LifeCycleChildComponentExample extends LightningElement {  
     constructor(){
    super();
    console.log("constructor is getting called  2");
   }


   connectedCallback(){
    console.log("connectedcallback of child called  2");

   }

   renderedCallback(){
   console.log("renderedCallback of child called  2")

   }

   disconnectedCallback(){
      console.log("disconnectedCallback of child called  2")

   }



}