import React from 'react';
import './SearchBar.css';

export default class SearchBar extends React.Component {
    constructor(props){
        super(props);
        this.renderSortByOptions = this.renderSortByOptions.bind(this);
        this.getSortByClass = this.getSortByClass.bind(this);
        this.state = {
            'term': '',
            'location': '',
            'sortBy': 'best_match'
        };
    
        this.sortByOptions = {
            'Best Match': 'best_match',
            'Highest Rated': 'rating',
            'Most Reviewed': 'review_count'
        };

    }
    getSortByClass(sortByOption){
        if(this.state.sortBy === sortByOption) {
            return 'active';
        }
        return '';
    }
    renderSortByOptions(){
        return Object.keys(this.sortByOptions).map(sortByOption => {
            let sortByOptionValue = this.sortByOptions[sortByOption];
            return <li className={this.getSortByClass(sortByOptionValue)} key={sortByOptionValue}>{sortByOption}</li>
        });
    }
    handleSortByChange(sortByOption){
        this.setState({sortBy: sortByOption});

    }
    

    render() {
        return (
            <div className="SearchBar">
                <div className="SearchBar-sort-options">
                    <ul>
                        {this.renderSortByOptions()}
                    </ul>
                </div>
                <div className="SearchBar-fields">
                    <input placeholder="Search Businesses" />
                    <input placeholder="Where?" />
                </div>
                <div className="SearchBar-submit">
                    <a href="">Let's Go</a>
                </div>
            </div>

        );
    }
}