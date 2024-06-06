import { LightningElement,wire } from 'lwc';
import { getObjectInfo } from "lightning/uiObjectInfoApi";
import ACCOUNT_OBJECT from "@salesforce/schema/Account";


export default class GetObjectInfoDemo extends LightningElement {
    defaultRecordTypeId;
    ObjecFields;
    apiName;



    @wire(getObjectInfo, { objectApiName: ACCOUNT_OBJECT })
    objectInfo({data,error}){
        if(data){
            console.log(data);
            this.defaultRecordTypeId = data.defaultRecordTypeId;
            this.ObjecFields= data.fields;
            this.apiName = data.apiName;
        }
        if(error){
            console.log(error);
        }
    }


  }