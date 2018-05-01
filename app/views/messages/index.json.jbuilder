json.messages @messages.each do |message|
  json.user_name  message.user.name
  json.data  message.created_at.strftime("%Y/%m/%d %H:%M")
  json.content  message.content
  json.picture message.picture.url
  json.id    message.id
end

