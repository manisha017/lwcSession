trigger AccountTrigger on Account (before insert,before update,after insert,after update) {
    if(Trigger.isBefore && (Trigger.isupdate || Trigger.isInsert)){
        AccountHandlerTrigger.validateAccountBeforeInsert(Trigger.new);

    }
    if(Trigger.isInsert && Trigger.isAfter){
        AccountHandlerTrigger.insertContact(Trigger.new);

    }

    if(Trigger.isupdate && Trigger.isAfter){
        // AccountHandlerTrigger.createOpportunity(Trigger.newMap,Trigger.oldMap);
        List<Opportunity> oppList = new List<Opportunity>();
        for(Account acc :Trigger.newMap.values() ){
            if((Trigger.newMap.get(acc.Id).Rating != Trigger.oldMap.get(acc.Id).Rating) && Trigger.newMap.get(acc.Id).Rating == 'Hot' )
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