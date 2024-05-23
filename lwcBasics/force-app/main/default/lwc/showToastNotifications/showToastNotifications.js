import { LightningElement } from 'lwc';
import { ShowToastEvent } from "lightning/platformShowToastEvent";

export default class ShowToastNotifications extends LightningElement {
    handleSuccess(){
        const showSuccess = new ShowToastEvent({
            title:'Success',
            message:'this is success message',
            variant:'Success',
        });
        this.dispatchEvent(showSuccess);
    }

    handleError(){
        const showSuccess = new ShowToastEvent({
            title:'Success',
            message:'this is success message',
            variant:'error',
        });
        this.dispatchEvent(showSuccess);
    }

    handleWarning(){
        const showSuccess = new ShowToastEvent({
            title:'Success',
            message:'this is success message',
            variant:'warning',
        });
        this.dispatchEvent(showSuccess);
    }

    handleInfo(){
        const showSuccess = new ShowToastEvent({
            title:'Success',
            message:'this is success message',
            variant:'info',
        });
        this.dispatchEvent(showSuccess);
    }



}