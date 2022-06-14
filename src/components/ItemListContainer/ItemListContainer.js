import React from "react";
import "./ItemListContainer.css"
import Belle from "../ItemListContainer/ImgItemList/la-vie-est-belle.jpg"

const ItemListContainer = () => {
    return (
        <div class="row">
        <div class="col s12 m6">
          <div class="card small">
            <div class="card-image">
              <img src={Belle} alt="belle"/>
              <span class="card-title">La vie est Belle</span>
              <button class="btn-floating halfway-fab waves-effect waves-light red"><i class="material-icons">add</i></button>
            </div>
            <div class="card-content">
              <p>I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively.</p>
            </div>
          </div>
        </div>
      </div>
    )
}
export default ItemListContainer
