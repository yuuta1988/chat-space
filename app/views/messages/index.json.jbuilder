json.messages @messages.each do |message|
  json.name  message.user.name
  json.data  message.created_at.strftime("%Y年%m月%d日 %H時%M分")
  json.body  message.body
  json.picture message.picture
  json.id    message.id
end
