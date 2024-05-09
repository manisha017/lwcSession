import { LightningElement } from 'lwc';

export default class LifecycleHooksExample extends LightningElement {
    isVisible = true;

    handleClick(){
        if(this.isVisible == true){
            this.isVisible = false;
        }else{
            this.isVisible= true;
        }
    }


    
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


    disconnectedCallback(){
        console.log('child disconnectedCallback of parent called');
        
    }
    
}