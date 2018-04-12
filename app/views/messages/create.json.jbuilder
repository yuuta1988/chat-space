json.content  @message.content
json.id  @message.user.id
json.user_name  @message.user.name
json.data @message.Time.now.to_s(:datetime)
json.picture @message.picture.url

