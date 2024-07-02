import { LightningElement,api } from 'lwc';

export default class SetterDemoChild extends LightningElement {
    userDetail;



    @api
    get detail(){
        return this.userDetail;
    }

    set detail(data){

        console.log('detail data is ',JSON.stringify(data));
        console.log('detail data is ',this.userDetail);
        let newAge = data.age*2;
        // this.userDetail = data;
        this.userDetail = {...data,age:newAge,"location" : "India"};
    }
     

}