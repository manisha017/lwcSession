public class AccountController {
    @AuraEnabled(cacheable = true)
    public static List<Account> getAccountList(){
        return [select Id,Name,Type,Industry from Account limit 5];
    }
}