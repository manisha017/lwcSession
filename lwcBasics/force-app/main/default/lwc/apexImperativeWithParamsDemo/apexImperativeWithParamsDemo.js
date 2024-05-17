import { LightningElement } from 'lwc';
import findAccounts from '@salesforce/apex/AccControllerImperativeWithParams.findAccounts';

export default class ApexImperativeWithParamsDemo extends LightningElement {
    searchKey= '';
    accounts;
    timer

    searchHandler(event){
        window.clearTimeout(this.timer);
        this.searchKey = event.target.value;
        this.timer = setTimeout(() => {
            this.callApex();
        }, 2000);

      
     
    }

callApex(){
    findAccounts({search : this.searchKey }).then(result =>{
        this.accounts= result;



    }).catch(error => {
        console.log(error);




    })
}

    


}