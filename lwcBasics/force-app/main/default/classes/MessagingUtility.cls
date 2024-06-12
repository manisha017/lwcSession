Global class MessagingUtility {
    Global static void sendBatchJob(){
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