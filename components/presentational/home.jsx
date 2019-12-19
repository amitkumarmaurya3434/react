import React from 'react';
import Header from '../common/header';
import Footer from '../common/footer';
import Filter from '../common/filter';
import SortedFilter from '../common/sortedFilter';
import Select from '../common/select';

export default function HomePage(props) {


  function renderUserInfo(props) {
    let userInfo = props.state.userInfo;
   if (userInfo.length > 1) {
      return userInfo.map(item => {
        return <div className="col-6 col-md-3 mb-4" key={item.id}>
          <div className="card">
            <div className="card-header">
              <img className="card-img-top" src={item.image} alt="Card image cap" />
              <div className="card-name">
                <h6 className="text-truncate">{item.name}</h6>
                <p className="text-head">id:{item.id} created by 2 year ago</p>
              </div>
            </div>
            <div className="card-body">
              <ul className="card-list-group">
                <li className="card-list-item">
                  <span className="card-key">Status</span>
                  <span className="card-val">{item.status}</span>
                </li>
                <li className="card-list-item">
                  <span className="card-key">Species</span>
                  <span className="card-val">{item.species}</span>
                </li>
                <li className="card-list-item">
                  <span className="card-key">Gender</span>
                  <span className="card-val">{item.gender}</span>
                </li>
                <li className="card-list-item">
                  <span className="card-key">Origin</span>
                  <span className="card-val">{item.origin.name}</span>
                </li>
                <li className="card-list-item">
                  <span className="card-key">Last location</span>
                  <span className="card-val">{item.location.name}</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      })
    }
    else {
      return <div className="col-md-12"> <h4 className="text-center text-white py-5">No Data Found</h4></div>
    }

  }
  return (
    <div className="page-main page-sticky">
      <Header />
      <section className="page-content">
        <div className="container">
          <div className="row">
            <Filter state={props.state} onFilterItemClick={props.onFilterItemClick} toggleSide={props.toggleSide} />
            <div className="col-md-10">
              <div className="row">
                <SortedFilter state={props.state} onFilterItemClick={props.onFilterItemClick} />
                <div className="col-md-12 category-sort">
                  <Select state={props.state} sortByAsceDesc={props.sortByAsceDesc} />
                </div>
              </div>
              <div className="row row bg-dark py-4">
                {renderUserInfo(props)}
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}