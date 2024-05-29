import { LightningElement,wire } from 'lwc';
import Id from '@salesforce/user/Id';
import { getRecord } from 'lightning/uiRecordApi';
import NAME_FIELD from '@salesforce/schema/User.Name';
import EMAIL_FIELD from '@salesforce/schema/User.Email';
const fields=[NAME_FIELD,EMAIL_FIELD];

export default class WireDemoUserDetail extends LightningElement {


userId = Id;

//005dL000000URuxQAG


//Syntax
// @wire(adapter,adapterConfig)
// propertyOrFunction

userInfo='';


@wire(getRecord,{recordId :'$userId' ,fields })
userDetailHandler({data,error})
{   
    if(data){
      
      this.userInfo = data.fields;
  
        
    }
    if(error){
        console.log(error);
    }


}


}