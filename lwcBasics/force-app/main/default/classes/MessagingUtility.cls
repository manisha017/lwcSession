Global class MessagingUtility {
    public static void SendBatchStatusNotification(AsyncApexJob JobDetails , Decimal sum){
        Messaging.SingleEmailMessage email = new Messaging.SingleEmailMessage();
    String[] toAddress = new String[]{'manisharani2745@gmail.com'};
    email.setToAddresses(toAddress);
    email.setReplyTo('manisharani2745@gmail.com');
    String sub = 'Hello'; 
    email.setSubject(sub);
    String emailBody = 'Test      ' +
       JobDetails.Id+ sum +'Status     '+ JobDetails.Status +'Errors   '+JobDetails.NumberOfErrors ;
    email.setHTMLBody(emailBody);
    Messaging.sendEmail(new Messaging.SingleEmailMessage[]{email});
}
}