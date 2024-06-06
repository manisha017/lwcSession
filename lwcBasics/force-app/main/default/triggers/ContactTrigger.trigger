trigger ContactTrigger on Contact (after insert,after update,before delete) {
    if(Trigger.isAfter && Trigger.isInsert){
        ContactTriggerHandler.countContactOnInsert(Trigger.new);
    }
    if(Trigger.isAfter && Trigger.isUpdate){
        ContactTriggerHandler.countContactOnUpdate(Trigger.newMap,Trigger.oldMap)
    }
    if(Trigger.isBefore && Trigger.isdelete){
        ContactTriggerHandler.countContactOnDelete(Trigger.old)
    }

}