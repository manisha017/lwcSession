import { LightningElement,wire } from 'lwc';
import getAccountList from '@salesforce/apex/AccController.getAccountList';

export default class ApexWireExample extends LightningElement {
@wire(getAccountList)
accounts;


//wire an apex method to a property




}