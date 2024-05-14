import { LightningElement,wire } from 'lwc';
import getAccountList from '@salesforce/apex/AccountController.getAccountList';

export default class ApexWireDemo extends LightningElement {
    @wire(getAccountList)
    accounts;

    
}