public with sharing class AccountHandlerTrigger {
    public static void validateAccountBeforeInsert(List<Account> accountList){
        for(Account acc :accountList){
            if(acc.Rating == 'Hot' && acc.Type == null){
                acc.addError('Account type is mandatory');
            }
        }
    }

    public static void insertContact(List<Account> accountList){
        List<Contact> contactList = new List<Contact>();
        for(Account acc : accountList){
            Contact c = new Contact();
            c.LastName  = acc.Name;
            c.AccountId = acc.Id;
            contactList.add(c);
        }
        if(contactList != null && contactList.size()>0){
            insert contactList;
        }
    }


    public static void createOpportunity(Map<Id,Account> accNewMap, Map<id,Account> accOldMap){
        List<Opportunity> oppList = new List<Opportunity>();
        for(Account acc :accNewMap.values() ){
            if((accNewMap.get(acc.Id).Rating != accOldMap.get(acc.Id).Rating) && accNewMap.get(acc.Id).Rating == 'Hot' )
            {
                Opportunity opp = new Opportunity();
                opp.AccountId = acc.Id;
                opp.StageName = 'Needs Analaysis';
                opp.closeDate = System.today();
                opp.Name = 'Test';
                oppList.add(opp);
                
            }
            
            if(!oppList.isEmpty()){
                insert oppList;
            }
        }

    }


    public static void PreventAccountDeletion(List<Account> accList){
        Set<Id> accountIdSet = new Set<Id>();
        Map<Id,boolean> accountIdIsPrimaryMap = new Map<Id,boolean>();

        //prepare accountIdSet
        for(Account acc : accList){
            accountIdSet.add(acc.Id);
            System.debug('Manisha'+ accountIdSet);
        }

        List<Contact> contactList = 
        [select id,AccountId,isPrimary__c from contact where accountId IN: accountIdSet  and isPrimary__c = true];

        System.debug('Manisha'+ contactList);
        //    //populate map
        //     for(Contact con : contactList){
        //         accountIdIsPrimaryMap.put(con.AccountId,con.isPrimary__c);
        //     }

        //validating and prevent deletion
        for(Account acc : accList){
            // if(accountIdIsPrimaryMap.get(acc.Id) != null && accountIdIsPrimaryMap.get(acc.Id) == true){
            //     acc.addError('show error message');
            // }
            if(!contactList.isEmpty()){
                System.debug('Manisha');
                acc.addError('show error message');
            }

        }

    }
}