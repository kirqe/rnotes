class Api::V1::NotesController < ApplicationController
  def index
    @notes = Note.all.order('created_at DESC')
    render json: @notes
  end

  def create
    @note = Note.new(note_params)
    if @note.save
      render json: @note
    else
      render json: @note.errors, status: :unprocessable_entity
    end
  end

  def destroy
    @note = Note.find(params[:id])
    @note.destroy
    head :no_content
  end

  private
    def note_params
      params.require(:note).permit(:body)
    end
end
