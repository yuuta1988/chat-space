json.content  @message.content
json.id  @message.user.id
json.user_name  @message.user.name
json.data @message.created_at.strftime("%Y/%m/%d %H:%M")

# 日付は変数にしなくて平気？
