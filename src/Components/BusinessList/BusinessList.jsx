import React from 'react';
import './BusinessList.css';
import Business from '../Bussiness/Bussiness';

export default class BusinessList extends React.Component {
    render() {
      return (
        <div className="BusinessList">
          {
            this.props.businesses.map(business => {
              return <Business business={business} />
            })
          }
        </div>
      );
    }
  }