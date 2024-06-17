Global class CalculateLeadsTotalRevenueBatch implements Database.Batchable<SObject>,Database.Stateful{
    Global Decimal sum = 0.0;
    Global Database.QueryLocator Start(Database.BatchableContext bc){

        String LeadsQuery = 'SELECT Id, LastName, FirstName,Company, AnnualRevenue FROM Lead where AnnualRevenue!=null';
        return Database.getQueryLocator(LeadsQuery);
        
    }
    Global void Execute(Database.BatchableContext bc,List<Lead> leadsToProcess){
  
            if(!leadsToProcess.isEmpty()){
            for(Lead sobj : leadsToProcess){
                sum += sobj.AnnualRevenue;
            }
        }
        
    }
    Global void Finish(Database.BatchableContext bc){
 
         AsyncApexJob JobDetails = [SELECT Id, Status, TotalJobItems,
                                   JobItemsProcessed, NumberOfErrors, CreatedById FROM AsyncApexJob
                                  where Id =: bc.getJobId()];
  System.debug('our JobDetails '+JobDetails);
        MessagingUtility.SendBatchStatusNotification(JobDetails,sum);
        
    }
    

}