$(function(){
  function buildHTML(message){
<<<<<<< HEAD
    var picture = (message.picture) ? `<img src="${message.picture}" class="lower-meesage__picture">` : "";
=======
>>>>>>> f9a6974... メッセージ機能　非同期
    var html = `<div class="message">
                  <div class="upper-message">
                    <div class="upper-message__user-name">
                      ${message.user_name}
                    </div>
                    <div class="upper-message__date">
                      ${message.data}
                    </div>
                  </div>
                  <div class="lower-meesage">
                    <div class="lower-message__content">
                      ${message.content}
                    </div>
<<<<<<< HEAD
                    <div>
                      ${picture}
                    </div>
=======
>>>>>>> f9a6974... メッセージ機能　非同期
                  </div>
                </div>`
    return html;
  }
  $('#new_message').on('submit', function(e){
    e.preventDefault();
    var formData = new FormData(this);
    var url = $(this).attr('action')
    $.ajax({
      url: url,
      type: "POST",
      data: formData,
      dataType: 'json',
      processData: false,
      contentType: false
    })
    .done(function(data){
      var html = buildHTML(data);
      $('.chat-messages').append(html)
      $('#message_content').val('')
<<<<<<< HEAD
      $('.hidden').val('')
      $('.chat-bottom__box').attr('disabled', false)
      $('.chat-messages').animate({scrollTop: $('.chat-messages')[0].scrollHeight}, 'fast');
      })
=======
      $(".chat-bottom__box").attr('disabled', false)
    })
>>>>>>> f9a6974... メッセージ機能　非同期
    .fail(function(){
      alert('error');
    })
  })
});
