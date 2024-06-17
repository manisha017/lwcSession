import { LightningElement,wire } from 'lwc';
import { getListUi } from "lightning/uiListApi";
import CONTACT_OBJECT from "@salesforce/schema/Contact";
import NAME_FIELD from "@salesforce/schema/Contact.Name";

export default class GetListUIExample extends LightningElement {
    contacts = []
    pageToken =null;
    nextPageToken = null;
    previousPageToken = null;

    @wire(getListUi, { objectApiName: CONTACT_OBJECT, listViewApiName: "AllContacts",pageSize:10,
        sortBy: NAME_FIELD,
    pageToken:'$pageToken' })
    listHandler({data,error})
    {
        if(data){
            console.log(data)
            this.contacts = data.records.records;
            this.previousPageToken = data.records.previousPageToken;
            this.nextPageToken = data.records.nextPageToken;
        }
        if(error){
            console.log(error)
        }
    }

    handlePrevious(){
        this.pageToken - this.previousPageToken;
    }
    handleNext(){
        this.pageToken = this.nextPageToken;
    }
}