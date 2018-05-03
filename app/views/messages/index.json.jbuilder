json.array! @newmsgs do |newmsg|
  json.user_name newmsg.user.name
  json.data newmsg.created_at.time.to_s(:datetime)
  json.content newmsg.content
  json.id newmsg.id
  json.picture newmsg.picture.url
end
