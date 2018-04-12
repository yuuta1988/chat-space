$(function(){
  function buildHTML(message){
    var picture = (message.picture) ? `<img src="${message.picture}" class="lower-meesage__picture">` : "";
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
                    <div>
                      ${picture}
                    </div>
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
      $('.hidden').val('')
      $('.chat-bottom__box').attr('disabled', false)
      $('.chat-messages').animate({scrollTop: $('.chat-messages')[0].scrollHeight}, 'fast');
      })
      $(".chat-bottom__box").attr('disabled', false)
    })
    .fail(function(){
      alert('error');
    })
  })
});
