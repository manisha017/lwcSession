import { LightningElement,api} from 'lwc';
import {NavigationMixin} from 'lightning/navigation';
export default class NavigationService extends NavigationMixin(LightningElement) {

@api recordId;

navigateToNewRecordPage(){
    this[NavigationMixin.Navigate]({
        type: 'standard__recordPage',
        attributes: {
            objectApiName: 'Account',
            actionName: 'new'
        }
    })
}


navigateToEditRecordPage(){
    this[NavigationMixin.Navigate]({
        type: 'standard__recordPage',
        attributes: {
            objectApiName: 'Account',
            actionName: 'edit'
        }
    })
}

navigateToViewRecordPage(){
    this[NavigationMixin.Navigate]({
        type: 'standard__recordPage',
        attributes: {
            objectApiName: 'Account',
            actionName: 'view'
        }
    })
}
}