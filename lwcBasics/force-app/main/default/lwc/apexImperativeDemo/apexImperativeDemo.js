import { LightningElement } from 'lwc';
import getAccountList from '@salesforce/apex/AccControllerImperative.getAccountList'

export default class ApexImperativeDemo extends LightningElement {
    accounts;


    handleClick(){
        getAccountList().then(result=>{
          this.accounts = result; 
          console.log(result);

        }).catch(error=>{
            console.log(error);


        })


    }



  



}