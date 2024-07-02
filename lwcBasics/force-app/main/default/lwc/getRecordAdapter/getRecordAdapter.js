import { LightningElement,wire,api } from 'lwc';
import { getRecord } from 'lightning/uiRecordApi';
import NAME_FIELD from '@salesforce/schema/Account.Name';
import OWNER_FIELD from '@salesforce/schema/Account.Owner.Name';
import ANNUAL_REVENUE from '@salesforce/schema/Account.AnnualRevenue';

export default class GetRecordAdapter extends LightningElement {

    @api recordId;
    name;
    annualRevenue;
    ownerName;


    @wire(getRecord, { recordId: '$recordId', fields :[NAME_FIELD,OWNER_FIELD,ANNUAL_REVENUE]})
        accountHandler({data}){
            if(data){
                console.log(data);
                this.name = data.fields.Name.displayValue ?  data.fields.Name.displayValue : data.fields.Name.value;
                this.annualRevenue = data.fields.AnnualRevenue.displayValue ?  data.fields.AnnualRevenue.displayValue : data.fields.AnnualRevenue.value;
                this.ownerName = data.fields.Owner.displayValue ?  data.fields.Owner.displayValue : data.fields.Owner.value;
            }

        }




}