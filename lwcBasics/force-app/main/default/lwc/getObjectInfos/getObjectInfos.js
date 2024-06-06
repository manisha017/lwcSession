import { LightningElement,wire } from 'lwc';
import { getObjectInfos } from "lightning/uiObjectInfoApi";
import ACCOUNT_OBJECT from "@salesforce/schema/Account";
import OPPORTUNITY_OBJECT from "@salesforce/schema/Opportunity";
const objectApiNames = [ACCOUNT_OBJECT, OPPORTUNITY_OBJECT];

export default class GetObjectInfos extends LightningElement {

    objectInfo;

    @wire(getObjectInfos, { objectApiNames})
    objectHandler({data,error}){
        if(data){
            console.log(data);
            this.objectInfo = data;
        }
        if(error){

        }
    }

}