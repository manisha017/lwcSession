import { LightningElement } from 'lwc';

export default class ParentComp extends LightningElement {
msg;

    constructor(){
        super();
        this.template.addEventListener('mycustomevent',
        
        
        
        event=>{ this.msg = event.detail;      });

        
    }


    handleEvent(event){
        this.msg = event.detail;  
    }




function()
{
    console.log("hello");
}


() = >{
    console.log("hello");
}






}







