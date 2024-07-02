import { LightningElement,wire } from 'lwc';
import { getPicklistValues,getObjectInfo } from "lightning/uiObjectInfoApi";
import INDUSTRY_FIELD from "@salesforce/schema/Account.Industry";
import ACCOUNT_OBJECT from "@salesforce/schema/Account";


export default class GetPicklistValues extends LightningElement {
val;
value='';
picklistVal;
picklst;

    @wire(getObjectInfo, { objectApiName: ACCOUNT_OBJECT })
    infoHandler({data,error}){
        if(data){           
            this.val = data.defaultRecordTypeId;
        }
    }


    @wire(getPicklistValues, { recordTypeId: '$val', fieldApiName: INDUSTRY_FIELD })
    picklistHandler({data,error}){
    if(data){
        this.picklistVal = response.data.values;
        this.picklst = response.data.values.map(value =>{

            return {
                label : value.label,
                value : value.value
            }
        })
        console.log('picklst   ' + JSON.stringify(this.picklst));
        console.log('picklistVal   ' + JSON.stringify(this.picklistVal));
    }
    }



    handleChange(event) {
         this.value = event.detail.value;
    }






}