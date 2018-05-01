$(function(){
  function buildHTML(message){
    var insertPicture = '';
    if (message.picture) {
      insertPicture = `<img src="${message.picture}">`;
    }
    var html = `<div class="message" data-message-id="${message.id}"}">
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
                      ${insertPicture}
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

    // 自動更新機能
    var interval = setInterval(function() {
    if (window.location.href.match(/\/groups\/\d+\/messages/)) {
    $.ajax({
      type: 'GET',
      url: location.href.json,
      dataType: 'json'
    })
    .done(function(json) {
      var id = $('.chata .message:last-child').data('messageId');
      var insertHTML = '';
      json.messages.forEach(function(message) {
        if (message.id > id ) {
          insertHTML += buildHTML(message);
        }
      });
      $('.chat-messages').append(insertHTML);
    })
    .fail(function(json) {
      alert('自動更新に失敗しました');
    });
    } else {
      clearInterval(interval);
    }} , 5000 );

});
