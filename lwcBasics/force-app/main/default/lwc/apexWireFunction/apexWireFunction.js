import { LightningElement,wire } from 'lwc';
import getAccountList from '@salesforce/apex/AccController.getAccountList';

export default class ApexWireFunction extends LightningElement {
    accounts;



@wire(getAccountList)
AccListHandler({data,error}){
    if(data){
       this.accounts= data.map(item =>{
           let newType= item.type === 'Customer - Direct' ? 'Direct' : 
             item.type === 'Customer - Channel' ? 'Channel' : '----'
        return {...item,newType}
        })
        
    }
    if(error){
        console.log(error);


    }




}











}