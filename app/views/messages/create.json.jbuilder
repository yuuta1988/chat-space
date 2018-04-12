json.content  @message.content
json.id  @message.user.id
json.user_name  @message.user.name
json.data @message.created_at.strftime("%Y/%m/%d %H:%M")
<<<<<<< HEAD
json.picture @message.picture.url

=======

# 日付は変数にしなくて平気？
>>>>>>> f9a6974... メッセージ機能　非同期
