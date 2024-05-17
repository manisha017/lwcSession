public with sharing class AccControllerImperativeWithParams {
    @AuraEnabled
    public static List<Account> findAccounts(String search){
        String key = '%' +search + '%';                
        return [select id, name, Type, Industry from Account where name like:key limit 5];

    }
}