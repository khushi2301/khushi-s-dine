import React, { useState } from 'react';

const NavbarSearch = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [results, setResults] = useState([]);
  
  const foodItems = ['Pizza', 'Burger', 'Pasta', 'Sushi', 'Salad']; // Example food items
  
  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
    if (e.target.value) {
      const filteredResults = foodItems.filter(item =>
        item.toLowerCase().includes(e.target.value.toLowerCase())
      );
      setResults(filteredResults);
    } else {
      setResults([]);
    }
  };

  return (
    <div className="navbar-search-icon">
      <input
        type="text"
        value={searchQuery}
        onChange={handleSearch}
        placeholder="Search for food items..."
      />
      <div className="search-results">
        {results.length > 0 ? (
          results.map((item, index) => (
            <div key={index} className="search-result-item">
              {item}
            </div>
          ))
        ) : (
          <div className="no-results">No results found</div>
        )}
      </div>
    </div>
  );
};

export default NavbarSearch;



  
       
