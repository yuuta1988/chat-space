$(function(){

  function appendUser(user){
    var html = `<div class='chat-group-user clearfix>
                  <p class="chat-group-user">${user.name}</p>
                  <a class="user-search-add chat-group-user__btn chat-group-user__btn--add" data-user-id="ユーザーのid" data-user-name="ユーザー名">追加</a>
                </div>`
    return html;
  }

  $('#user-search-field').on('keyup', function(){
    var input = $('#user-search-field').val();

    $.ajax({
      type: 'GET',
      url: '/users',
      data: { keyword: input },
      dataType: 'json'
    })

    .done(function(users){
      console.log(users);
      var html = appendUser(users)
      console.log(html);

    })
  });
});
