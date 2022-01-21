var Webhook_key = "your webhook key";
var Webhook_link = "your webhook link" + Webhook_key;
var message_data = "your message";
var message = { text: message_data};
var payload = JSON.stringify(message);
var options = {
    method: 'POST',
    contentType: 'application/json',
    payload: payload
};
  
UrlFetchApp.fetch(Webhook_link, options ).getContentText();
