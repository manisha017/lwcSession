trigger AccountTrigger on Account (before insert,before update,after insert) {
    if(Trigger.isBefore && (Trigger.isupdate || Trigger.isInsert)){
        for(Account acc : Trigger.new){
            if(acc.Rating == 'Hot' && acc.Type == null){
                acc.addError('Account type is mandatory');
            }
        }

    }
    if(Trigger.isInsert && Trigger.isAfter){
        List<Contact> contactList = new List<Contact>();
        for(Account acc : Trigger.new){
            Contact c = new Contact();
            c.LastName  = acc.Name;
            c.AccountId = acc.Id;
            contactList.add(c);
        }
        if(contactList != null && contactList.size()>0){
            insert contactList;
        }

    }


}