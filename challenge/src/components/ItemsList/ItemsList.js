import React from 'react';

// import Item from '../Item';

import './ItemsList.css';
import '../Item/Item.css';
import '../ItemThumbnail/ItemThumbnail.css';

const ItemsList = ({ items }) => (
  <div className="container-fluid itemsList">
    <h1>Items List</h1>
    {
      items.map(({ _id, title, files, description }) => (
        <div key={_id}>
          <div className="row item">
                  <div className="col-sm-4 col-md-2">
                      <img className="itemThumbnail" src={files[0].thumbPath} alt={description}/> 
                  </div>
                  <div className="col-sm-8 col-md-10">
                      <h3>{title}</h3>
                      <p className="subtext-padding">{description}</p>
                  </div> 
              </div>
        </div>
      ))
    }
  </div>
);

export default ItemsList;
