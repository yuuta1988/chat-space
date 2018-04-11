$(function(){
  function buildHTML(message){
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
                      <img src="${message.picture}" class="lower-meesage__picture">
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
      // console.log(html);
      $('.chat-messages').append(html)
      $('#message_content').val('')
      $('.chat-bottom__box').attr('disabled', false)
      $('.chat-messages').animate({scrollTop: $('.chata')[0].scrollHeight}, 'fast');
      })
    .fail(function(){
      alert('error');
    })
  })
});
