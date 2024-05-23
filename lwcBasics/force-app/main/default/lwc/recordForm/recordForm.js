import { LightningElement } from 'lwc';
import ACCOUNT_OBJECT from '@salesforce/schema/Account';
import NAME_FIELD from '@salesforce/schema/Account.Name';
import TYPE_FIELD from '@salesforce/schema/Account.Type';
import INDUSTRY_FIELD from '@salesforce/schema/Account.Industry';


export default class RecordForm extends LightningElement {
objectName = ACCOUNT_OBJECT;
fieldsList = [NAME_FIELD,INDUSTRY_FIELD,TYPE_FIELD];


}