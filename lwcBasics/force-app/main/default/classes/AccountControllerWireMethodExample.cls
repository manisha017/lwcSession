public with sharing class AccountControllerWireMethodExample {
   
    @AuraEnabled(cacheable = true) 
    public static List<Account> filterAccountType(String type){
        return [SELECT Id, Name,type, Industry FROM Account where type =: type Limit 5];

    }




}