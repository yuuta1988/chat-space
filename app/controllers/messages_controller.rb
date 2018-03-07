class MessagesController < ApplicationController

  def index
    @message = Message.all
  end

  def create
    Message.create(picture: picture_params[:picture], user_id: current_user.id)
  end

  private
  def picture_params
    params.require(:message).permit(:picture)
  end

end
