json.content  @message.content
json.id  @message.id
json.user_name  @message.user.name
json.data @message.created_at.time.to_s(:datetime)
json.picture @message.picture.url
