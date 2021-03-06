class ItemsController < ApplicationController
  def index
    item = Item.all
    render json: item
  end

  def create
    item = Item.create(item_params)
    render json: item
  end

  def destroy
    Item.destroy(params[:id])
  end

  def update
    item = Item.find(params[:id])
    item.update_attributes(item_params)
    render json: item
  end

  private

  def item_params
    params.require(:item).permit(:id, :name, :description)
  end
end
