
import React, { Component } from 'react';
import HomePage from '../presentational/home.jsx';
export default class Home extends Component {

  constructor(props, context) {

    super(props, context);
    this.state = {
      userInfo: {},
      loading:true,
      toggleSide:false,
      filterList: {
        species: [
          { label: 'Human', name: 'Human', value: 'species', selected: false },
          { label: 'Mytholog', name: 'Mytholog', value: 'species', selected: false },
          { label: 'Other Specles', name: 'otherSpecles', value: 'species', selected: false }
        ],
        gender: [
          { label: 'Male', name: 'Male', value: 'gender', selected: false },
          { label: 'Female', name: 'Female', value: 'gender', selected: false }
        ],
        origin: [
          { label: 'Unknown', name: 'unknown', value: 'origin', selected: false },
          { label: 'Post-Apocalyptic Earth', name: 'postApocalypticEarth', value: 'origin', selected: false },
          { label: 'Nuptia 4', name: 'Nuptia4', value: 'origin', selected: false },
          { label: 'Other Origin', name: 'otherOrigin', value: 'origin', selected: false }
        ]
      },
      sortByAsceDesc: '',

    };
    this.userInfo = null;
  }
  componentWillMount() {
   // this.userInfo = this.state.userInfo
    fetch('https://rickandmortyapi.com/api/character/')
      .then(res => res.json())
      .then((data) => {
        this.userInfo = data.results;
        this.setState({ userInfo: data.results, loading: false })
      }).catch(err => {
        console.log(err)
        // this.userInfo = RDL.userInfo.results;
        // this.setState({ userInfo: RDL.userInfo.results, loading: false })
      })
  }
  componentDidMount() {

  }


  onFilterItemClick = (e, item) => {
    let filterOption = this.state.filterList;
    filterOption[item.value] = filterOption[item.value].map(x => {
      if (x.name == item.name)
        x.selected = !item.selected
      return x;
    });
    // this.setState({ filterList: filterOption });

    this.setState({ filterList: filterOption });
    this.applyFilter();
  }

  applyFilter = () => {
    let userInfo = this.userInfo;
    let filterList = this.state.filterList;

    let filterSpecies = filterList.species.filter(x => x.selected).map(x => x.name);
    let filterGender = filterList.gender.filter(x => x.selected).map(x => x.name);
    let filterOrigin = filterList.origin.filter(x => x.selected).map(x => x.name);

    // if (filterSpecies.length > 0)
    //   userInfo = userInfo.filter(x => filterSpecies.indexOf(x.species) > -1);

    if (filterSpecies.length > 0)
      userInfo = userInfo.filter(x => {
        if (filterSpecies[0] == "otherSpecles")
          return filterSpecies.indexOf(x.species) == -1
        else
          return filterSpecies.indexOf(x.species) > -1

      });

    if (filterGender.length > 0)
      userInfo = userInfo.filter(x => filterGender.indexOf(x.gender) > -1);
    if (filterOrigin.length > 0)
      userInfo = userInfo.filter(x => filterOrigin.indexOf(x.origin.name) > -1);
    this.setState({ userInfo: userInfo }, () => {
      this.sortByAsceDesc(this.state.sortByAsceDesc);
    })

  }
  sortByAsceDesc = (order) => {
    let userInfo = this.state.userInfo
    console.log(userInfo);
    if (order == "Asce")
      userInfo.sort((a, b) => a.id - b.id)
    else if (order == "Desc")
      userInfo.sort((a, b) => b.id - a.id)

    this.setState({ userInfo: userInfo, sortByAsceDesc: order })
  }
  toggleSide=()=>{
    this.setState({toggleSide:!this.state.toggleSide})
  }
  render() {
    if(this.state.loading)
    return (
      <h1 className="text-center py-5 my-5">Loading...</h1>
    );
    else
    return (
      <HomePage
        state={this.state}
        onFilterItemClick={this.onFilterItemClick} 
        sortByAsceDesc={this.sortByAsceDesc}
        toggleSide={this.toggleSide}
        />
    );
  }
}

