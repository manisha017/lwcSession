Global class UpdateAccRecordsBatchJob implements Database.Batchable<SObject>{
    
    Global Database.QueryLocator Start(Database.BatchableContext bContext){
        String acctsQuery = 'Select Id, name, rating, industry, annualrevenue, active__c from Account';
        return Database.getQueryLocator(acctsQuery);     
    }
    Global void Execute(Database.BatchableContext bContext,List<Sobject> recordsToProcess){
        List<Account> acctoUpdate = new List<Account>();
        for(SObject obj :recordsToProcess){
        
                Account acc = (Account)obj;
                acc.Rating = 'Hot';
                acc.Industry = 'Manufacturing';
                acc.AnnualRevenue = 750000000;
                acc.Active__c = 'Yes'; 
                acctoUpdate.add(acc);
               
            
        }
        if(!acctoUpdate.isEmpty()){
            update acctoUpdate;
        }
    }
    Global void finish(Database.BatchableContext bContext){
        //email logic
        AsyncApexJob JobDetails = [SELECT Id, Status, TotalJobItems,
                                   JobItemsProcessed, NumberOfErrors, CreatedById FROM AsyncApexJob
                                  where Id =: bContext.getJobId()];
        
        //write code to send email notification
        Messaging.SingleEmailMessage email = new Messaging.SingleEmailMessage();
        String[] toAddress = new String[]{'apexsessionsaprilmaybatch@gmail.com'};
        email.setToAddresses(toAddress);
        email.setReplyTo('manisharani2745@gmail.com');
        String sub = 'Hello';
        email.setSubject(sub);
        String emailBody = 'Test';
        email.setHTMLBody(emailBody);
        Messaging.sendEmail(new Messaging.SingleEmailMessage[]{email});
        
    }

}