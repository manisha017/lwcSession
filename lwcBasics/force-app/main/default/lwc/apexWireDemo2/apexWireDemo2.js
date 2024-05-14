import { LightningElement,wire } from 'lwc';
import getAccountList from '@salesforce/apex/AccountController.getAccountList';

export default class ApexWireDemo extends LightningElement {
    accountList;     

     @wire(getAccountList)
     accountsHandler({data,error}){
        if(data){
                  this.accountList = data.map(item=>{
                  let newType =   item.Type === 'Customer - Direct' ? 'Direct' : 
                  item.Type === 'Customer - Channel' ? 'Channel' : '----------'
                  return {...item,newType};
            })

            
        }
        if(error){
            console.log(error);
        }


     }

}