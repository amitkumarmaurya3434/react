import React from 'react';


export default function SortedFilter(props) {
    function renderFilter(filterName) {
        return filterName.map((item) => {
            if (item.selected)
                return <span key={item.name} className="badge badge-secondary">{item.label} <a href="javaScript:void(0)" onClick={(e) => props.onFilterItemClick(e, item)} className="badge-close">X</a></span>
        })
    }
    return (
        <div className="col-md-12 selected-filter mb-3">
            <h4 className="mb-3">Selected Filter</h4>
            {renderFilter(props.state.filterList.species)}
            {renderFilter(props.state.filterList.gender)}
            {renderFilter(props.state.filterList.origin)}
        </div>

    );

}