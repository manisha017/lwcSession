import { LightningElement } from 'lwc';

export default class LifeCycleParentComponentExample extends LightningElement {
   isVisible = true;


   constructor(){
    super();
    console.log("constructor is getting called  1");
   }


   connectedCallback(){
    console.log("connectedcallback of parent called  1");

   }



   renderedCallback(){
   console.log("renderedCallback of parent called  1")


   }

   handleClick(){
      if(this.isVisible == true){
         this.isVisible = false;
      }
      else{
         this.isVisible = true;
      }
   }


}