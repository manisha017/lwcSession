public with sharing class ContactTriggerHandler {
    public static void countContactOnInsert(List<Contact> contactList){
        Set<Id> accountIdSet = new Set<Id>();
        Map<Id,Account> accMap = new Map<Id,Account>();
        for(Contact cont :contactList ){
            if(cont.AccountId != null){
                accountIdSet.add(cont.AccountId);
            }
        }

        for(AggregateResult obj :[select count(Id) con, AccountId from Contact
         where AccountId IN:accountIdSet group by AccountId]){

           Account accObj = new Account( 
           Id =  (Id)obj.get('AccountId'),
           CountOfContact__c =  (Decimal)obj.get('con')

           );

           accMap.put(accObj.Id,accObj);
        }

        if(!accMap.isEmpty()){
            update accMap.values();
        }



    }
    public static void countContactOnUpdate(Map<Id,Contact> contNewMap,Map<Id,Contact> contOldMap){

    }
    public static void countContactOnDelete(List<Contact> contactList){

    }
}