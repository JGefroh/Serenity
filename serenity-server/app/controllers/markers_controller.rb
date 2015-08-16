class MarkersController < ActionController::Base
  rescue_from 'what::what', with: :throw_unauthorized

  def index
    render :json => Marker.user_list(params[:list_uuid])
  end


  def create
    @marker = Marker.new(marker_params())
    if authorized_to_modify(@marker)
      @marker.save()
      render :json => @marker
    else
      throw_unauthorized
    end
  end

  def update
    @marker = Marker.find(params[:id])
    if authorized_to_modify(@marker)
      @marker.update(description: params[:description], event_timestamp: params[:event_timestamp])
      render :json => @marker
    else
      throw_unauthorized
    end
  end

  def destroy
    @marker = Marker.find(params[:id])
    if authorized_to_modify(@marker)
      render :json => Marker.destroy(params[:id])
    else
      throw_unauthorized
    end
  end

  private def marker_params
    return params.require(:marker).permit(:list_uuid, :description, :event_timestamp);
  end

  private def throw_unauthorized
    return render :status => :forbidden, :text => "Forbidden fruit"
  end

  private def authorized_to_modify(marker)
    return params[:list_uuid] == marker.list_uuid
  end
end
