class SecurityController < ActionController::Base

  def create
    render :plain => SecureRandom.uuid;
  end
end
