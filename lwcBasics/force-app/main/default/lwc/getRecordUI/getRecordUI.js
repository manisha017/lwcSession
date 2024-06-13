import { LightningElement,api,wire } from 'lwc';
import { getRecordUi } from 'lightning/uiRecordApi';

export default class GetRecordUI extends LightningElement {
@api recordId;

    @wire(getRecordUi, { recordIds: '$recordId', layoutTypes: 'Full',modes:'Edit'})
    accHandler({data,error}){
        if(data){
            console.log(data);
        }
        if(error){

        }
    }
  







}