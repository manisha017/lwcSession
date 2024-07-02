import { LightningElement,api } from 'lwc';
import { NavigationMixin } from 'lightning/navigation';

export default class MyCustomElement extends NavigationMixin(LightningElement) {

@api recordId;

    navigateToNewRecordPage(){
        this[NavigationMixin.Navigate]({
            type: 'standard__recordPage',
            attributes: {
                recordId :this.recordId,
                objectApiName: 'Account',
                actionName: 'new'
            }
        })
    }

    navigateToEditRecordPage(){
        this[NavigationMixin.Navigate]({
            type: 'standard__recordPage',
            attributes: {
                recordId :this.recordId,
                objectApiName: 'Account',
                actionName: 'edit'
            }
        })
    }

    navigateToViewRecordPage(){
        this[NavigationMixin.Navigate]({
            type: 'standard__recordPage',
            attributes: {
                recordId :this.recordId,
                objectApiName: 'Account',
                actionName: 'view'
            }
        })
    }


    navigateToListView(){
        this[NavigationMixin.Navigate]({
            type: 'standard__objectPage',
            attributes: {
                objectApiName: 'Account',
                actionName: 'list'
            },
            state:{
             'filterName':"Recent"   
            }
        })
    }

    navigateToRecentListView(){
        this[NavigationMixin.Navigate]({
            type: 'standard__recordRelationshipPage',
            attributes: {
                recordId :this.recordId,
                objectApiName: 'Account',
                relationshipApiName: 'Contacts',
                actionName: 'view'
            }
        })
    }


    navigateToWebPage(){
        this[NavigationMixin.Navigate]({
            type: 'standard__webPage',
            attributes: {
                url: 'https://www.google.com/'
            }
        })
    }
    navigateToChatter(){

        this[NavigationMixin.Navigate]({
            type: 'standard__namedPage',
            attributes: {
                pageName:'chatter'
            }
        })
    }

    navigateToHomePage(){
        this[NavigationMixin.Navigate]({
            type: 'standard__namedPage',
            attributes: {
                pageName:'home'
            }
        })
    }
    navigateToAcc(){
        this[NavigationMixin.Navigate]({
            type: 'standard__objectPage',
            attributes: {
                objectApiName: 'Account',
                actionName: 'home'
            }
        }) 
    }
    navigateToRecentCon(){
        this[NavigationMixin.Navigate]({
            type: 'standard__objectPage',
            attributes: {
                objectApiName: 'Contact',
                actionName: 'home'
            }
        }) 
    }

}
