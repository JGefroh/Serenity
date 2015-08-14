class MarkersController < ActionController::Base

  def index
    render :json => Marker.all()
  end


  def create
    @marker = Marker.new(marker_params())
    @marker.save()
    render :json => @marker
  end

  def update
    @marker = Marker.find(params[:id])
    @marker.update(description: params[:description], event_timestamp: params[:event_timestamp])
    render :json => @marker
  end

  def destroy
    render :json => Marker.destroy(params[:id]);
  end


  private def marker_params
    return params.require(:marker).permit(:list_uuid, :description, :event_timestamp);
  end
end
