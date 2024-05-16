public class AccController {
   @AuraEnabled(cacheable = true)
    public static List<Account> getAccountList(){
        return [SELECT Type, Name, Id, Industry FROM Account];
    }

}