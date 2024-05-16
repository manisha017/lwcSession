import { LightningElement,wire } from 'lwc';
import filterAccountType from '@salesforce/apex/AccountControllerWireMethodExample.filterAccountType';


export default class WireApexExampleWithParams extends LightningElement {
    selectedType= ''

    @wire(filterAccountType, {type : '$selectedType' })
    filterAccounts;

//2ways to get data from apex to lwc
//1.wire apex method- 2 ways----- a. wire apex method on property and wire apex method on function
//2.call apex method imperatively

    
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