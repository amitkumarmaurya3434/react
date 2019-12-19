import React from 'react';


export default function Filter(props) {

  function renderFilter(filterName) {
     return filterName.map((item) => {
      return <li className="category-item" key={item.name}>
        <div className="custom-control custom-checkbox">
          <input type="checkbox" className="custom-control-input" id={item.name} checked={item.selected} />
          <label className="custom-control-label" htmlFor={item.name} onClick={(e) => props.onFilterItemClick(e, item)}>{item.label}</label>
        </div>
      </li>
    })
  }


  return (
    <div className="col-md-2 sidebar">
      <h4 className="mb-3">Filter <span className="icon-plus" onClick={props.toggleSide}>{props.state.toggleSide?"-":"+"} </span></h4>
     <div className={"category-list"+(props.state.toggleSide?" d-block":"")}>
      <div className="category">
        <h6 className="category-title">Specles</h6>
        <ul className="category-list-group">
          {renderFilter(props.state.filterList.species)}
        </ul>
      </div>
      <div className="category">
        <h6 className="category-title">Gender</h6>
        <ul className="category-list-group">
          {renderFilter(props.state.filterList.gender)}
        </ul>
      </div>
      <div className="category">
        <h6 className="category-title">Origin</h6>
        <ul className="category-list-group">
          {renderFilter(props.state.filterList.origin)}
        </ul>
      </div>
    </div>
    </div>
  );

}