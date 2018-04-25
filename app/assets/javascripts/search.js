$(function(){

  function appendUser(user){
    var html = `<div class="chat-group-user clearfix">
                  <p class="chat-group-user__name">${user.name}</p>
                  <a class="user-search-add chat-group-user__btn chat-group-user__btn--add" id="add_btn" data-user-id="${user.id}" data-user-name="${user.name}">追加</a>
                </div>`
    return html;
  }

  function appnedClickUser(user_id, user_name){
    var html =`<div class='chat-group-user clearfix js-chat-member' id='chat-group-user-${user_id}'>
               <input name='group[user_ids][]' type='hidden' value=${user_id}>
               <p class='chat-group-user__name'>${user_name}</p>
               <a class='user-search-remove chat-group-user__btn chat-group-user__btn--remove js-remove-btn'>削除</a>
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
      var html = appendUser(users)
      $("#user-search-result").empty();
      if (users.length !== 0) {
        users.forEach(function(user){
          var html = appendUser(user);
          $('#user-search-result').append(html);
        })
      }
    })
    .fail(function(){
      alert("ユーザー検索に失敗しました");
    });

    $(document).on("click", "#add_btn", function(){
      var user_id = $(this).data('user-id')
      var user_name = $(this).data('user-name')
      var html = appnedClickUser(user_id, user_name)
      $('#chat-group-users').append(html);
      $(this).parent().remove();
    });

    $(document).on('click', '.chat-group-user', function(){
      $(this).remove();
    })
  });
});
