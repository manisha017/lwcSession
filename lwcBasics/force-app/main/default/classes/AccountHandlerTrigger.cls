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
}