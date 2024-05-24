import { LightningElement,api } from 'lwc';
import ACCOUNT_OBJECT from '@salesforce/schema/Account';
import NAME_FIELD from '@salesforce/schema/Account.Name';
import TYPE_FIELD from '@salesforce/schema/Account.Type';
import INDUSTRY_FIELD from '@salesforce/schema/Account.Industry';
import { ShowToastEvent } from "lightning/platformShowToastEvent"; 


export default class RecordForm extends LightningElement {
objectName = ACCOUNT_OBJECT;
fieldsList = [NAME_FIELD,INDUSTRY_FIELD,TYPE_FIELD];
@api recordId;

successHandler(event){
    console.log(event.detail.id);
    const showSuccess = new ShowToastEvent({
        title:'Account created',
        message:'this is success message    ' +event.detail.id ,
        variant:'Success',
    });
    this.dispatchEvent(showSuccess);

}

}