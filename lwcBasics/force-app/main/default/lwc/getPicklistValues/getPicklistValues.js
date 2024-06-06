import { LightningElement,wire } from 'lwc';
import { getPicklistValues,getObjectInfo } from "lightning/uiObjectInfoApi";
import INDUSTRY_FIELD from "@salesforce/schema/Account.Industry";
import ACCOUNT_OBJECT from "@salesforce/schema/Account";


export default class GetPicklistValues extends LightningElement {
val;
value='';
picklistVal;

    @wire(getObjectInfo, { objectApiName: ACCOUNT_OBJECT })
    infoHandler({data,error}){
        if(data){           
            this.val = data.defaultRecordTypeId;
        }
    }


    @wire(getPicklistValues, { recordTypeId: '$val', fieldApiName: INDUSTRY_FIELD })
    picklistHandler({data,error}){
        if(data){
            this.picklistVal = data.values;
            console.log(this.picklistVal);
        }
    }


    handleChange(event) {
         this.value = event.detail.value;
    }






}