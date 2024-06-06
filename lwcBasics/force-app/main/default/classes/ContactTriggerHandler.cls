public with sharing class ContactTriggerHandler {
    public static void countContactOnInsert(List<Contact> contactList){
        Set<Id> accountIdSet = new Set<Id>();
        Map<Id,Account> accMap = new Map<Id,Account>();
        for(Contact cont : contactList ){
            if(cont.AccountId != null){
                accountIdSet.add(cont.AccountId);
            }
        }
        if(!accountIdSet.isEmpty()){
            for(AggregateResult obj :[select count(Id) con, AccountId from Contact
            where AccountId IN:accountIdSet group by AccountId]){

            Account accObj = new Account( 
            Id =  (Id)obj.get('AccountId'),
            CountOfContact__c =  (Decimal)obj.get('con')

            );


            /* Account accObj = new Account();
            accObj.Id = (Id)obj.get('AccountId');
            accObj.CountOfContact__c =  (Decimal)obj.get('con');
            */

            accMap.put(accObj.Id,accObj);
            }
         }

        if(!accMap.isEmpty()){
            update accMap.values();
        }



    }
    public static void countContactOnUpdate(Map<Id,Contact> contNewMap,Map<Id,Contact> contOldMap){
        Set<Id> accountIdSet = new Set<Id>();
        Map<Id,Account> accMap = new Map<Id,Account>();
     
        for(Contact conObj : contNewMap.values()){
            if(contNewMap.get(conObj.Id).AccountId != contOldMap.get(conObj.Id).AccountId){
                    if(contNewMap.get(conObj.Id).AccountId != null){
                         accountIdSet.add(contNewMap.get(conObj.Id).AccountId);
                    }
                    if(contOldMap.get(conObj.Id).AccountId != null){
                        accountIdSet.add(contOldMap.get(conObj.Id).AccountId);
                    }
            }
        }

        if(!accountIdSet.isEmpty()){
            for(AggregateResult obj :[select count(Id) con, AccountId from Contact
            where AccountId IN:accountIdSet group by AccountId]){

            Account accObj = new Account( 
            Id =  (Id)obj.get('AccountId'),
            CountOfContact__c =  (Decimal)obj.get('con')

            );


            /* Account accObj = new Account();
            accObj.Id = (Id)obj.get('AccountId');
            accObj.CountOfContact__c =  (Decimal)obj.get('con');
            */

            accMap.put(accObj.Id,accObj);
           }
        }

       if(!accMap.isEmpty()){
           update accMap.values();
       }
        





    }
    public static void countContactOnDelete(List<Contact> contactList){
        Set<Id> contactIdSet = new Set<Id>();
        Set<Id> accountIdSet = new Set<Id>();
        Map<Id,Account> accMap = new Map<Id,Account>();
        for(Contact cont : contactList ){
            if(cont.AccountId != null){
                accountIdSet.add(cont.AccountId);
                contactIdSet.add(cont.Id);
            }
        }

        if(!accountIdSet.isEmpty()){
            for(AggregateResult obj :[select count(Id) con, AccountId from Contact
            where AccountId IN:accountIdSet and NOT IN: contactIdSet group by AccountId]){

            Account accObj = new Account( 
            Id =  (Id)obj.get('AccountId'),
            CountOfContact__c =  (Decimal)obj.get('con')

            );

            accMap.put(accObj.Id,accObj);
            }
        }
    }
    
    if(!accMap.isEmpty()){
        update accMap.values();
    }
     
}