class MessagesController < ApplicationController
  def index
    @messages = Message.all
  end

  def show
    @message = Message.find(params[:id])
  end

  def new
  end
 
  def create
    @message = Message.new(message_params)
 
    @message.save
    redirect_to thank_you_index_path
  end

  private

  def message_params
    params.require(:message).permit(:author, :text)
  end
end
