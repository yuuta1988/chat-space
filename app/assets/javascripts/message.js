$(function(){
  function buildHTML(message){
    var picture = (message.picture) ? `<img src="${message.picture}" class="lower-meesage__picture">` : "";
    if (message.picture.url){
      picture = `<img src="${message.picture.url}">`;
    }
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
    .fail(function(){
      alert('error');
    })
  })

    setInterval(function() {
    $.ajax({
      url: location.href.json,
    })
    .done(function(json) {
      var id = $('.message').data('messageId');
      var insertHTML = '';
      json.messages.forEach(function(message){
        if (message.id > id){
        insertHTML += buildHTML(message);
        }
      });
      $('.chat-messages').html(insertHTML);
    })
    .fail(function(data) {
      alert('自動更新に失敗しました');
    });
  } else {
    clearInterval(interval);
   } , 5000 );


});
