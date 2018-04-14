$(function(){
  $('#user-search-field').on('keyup', function(){
    var input = $('#user-search-field').val();

    $.ajax({
      type: 'GET',
      url: '/groups/new',
      dasta: { keyword: input },
      dataType: 'json'
    })

    .done(function(users){
      $("").empty();
      if (users.length !== 0){
        users.forEach(function(user){
          appendUser(user);
        });
      } else {
        appendNoUser("一致するユーザーはいません")
      }
    })
  });
});
