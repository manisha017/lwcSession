import { LightningElement,wire } from 'lwc';
import filterAccountType from '@salesforce/apex/AccountControllerWireMethodExample.filterAccountType';


export default class WireApexExampleWithParams extends LightningElement {
    selectedType= ''

    @wire(filterAccountType, {type : '$selectedType' })
    filterAccounts;

    get options() {
        return [
            { label: 'Customer - Channel', value: 'Customer - Channel' },
            { label: 'Customer - Direct', value: 'Customer - Direct' }
        ];
    }

    handleChange(event){
        this.selectedType = event.target.value;   
    }


}