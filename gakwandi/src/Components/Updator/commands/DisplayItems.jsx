import React, { useState, useEffect } from 'react';
import './Yall.css';
import '../Updator.css';

const DisplayItems = () => {  


  const buttonState = {
    ALL: 'all',
    FURNITURE: 'furniture',
    ELECTRONICS: 'electronics'
  };

  const [button, setButton] = useState();
  const [totalItems, setTotalItems] = useState(0);
  const [loadingState, setLoadingState] = useState({}); // Keep track of loading state for each category
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);
  const [products, setProducts] = useState([]);

  const isActive = (panel) => button === panel ? 'active' : '';











  // ----- Function to handle loading state for each button ---------------------------------

  const setLoading = (category, value) => {
    setLoadingState(prevState => ({
      ...prevState,
      [category]: value
    }));
  };





  // -- Function to fetch data --------------------------------------------------------------

  const fetchData = async (category, url) => {
    const disableButton = document.querySelector('.nav-button');
    disableButton.classList.add('disable');
    setIsButtonDisabled(true);
    setLoading(category, true);

    setButton(category);
    try {
      const response = await fetch(url);
      const data = await response.json();
      if (response.ok) {
        setProducts(data);
        setLoading(category, false);
        disableButton.classList.remove('disable');
        setIsButtonDisabled(false);
        setTotalItems(data.length);
      } else {
        setLoading(category, false);
        disableButton.classList.remove('disable');
        setIsButtonDisabled(false);
        alert('Failed to fetch items from the store.');
      }
    } catch (error) {
      setLoading(category, false);
      disableButton.classList.remove('disable');
      setIsButtonDisabled(false);
      console.error('Error fetching products:', error);
    }
  };








  // ---- Helper functions -------------------------------------------------------------------

  const baseUrl = 'https://gakwandi-project.glitch.me/api';

  const displayAll = () => fetchData(buttonState.ALL, `${baseUrl}/admindisplay`);
  const displayFurniture = () => fetchData(buttonState.FURNITURE, `${baseUrl}/admindisplay?category=Furniture`);
  const displayElectronics = () => fetchData(buttonState.ELECTRONICS, `${baseUrl}/admindisplay?category=Electronics`);
  




  // ---- Products display -------------------------------------------------------------------

  const Renderer = (
    <>
      {products.map((item, index) => (
        <div key={index} className="product-card">
          <img src={item.image} alt={item.name} className="product-image" />
          <h3 className="product-name">{item.name}</h3>
          <p className="product-category">Category: {item.category}</p>
          <p className="product-quantity">Quantity: {item.quantity}</p>
          <p className="product-price">{item.price}</p>
        </div>
      ))}
    </>
  );













  

  return (
    <div className="display-container">
      <header>
        <h2>Product Dashboard</h2>
        <p>Total Products: {totalItems}</p>
      </header>

      <nav className="category-nav">
        <button className={`nav-button ${isActive(buttonState.ALL)}`} onClick={displayAll} disabled={isButtonDisabled}> 
          {loadingState[buttonState.ALL] ? <>Fetching &nbsp; <i className="fa-solid fa-spinner fa-spin"></i></> 
          : 'View All Products'} 
        </button>
        <button className={`nav-button ${isActive(buttonState.FURNITURE)}`} onClick={displayFurniture} disabled={isButtonDisabled}> 
          {loadingState[buttonState.FURNITURE] ? <>Fetching &nbsp; <i className="fa-solid fa-spinner fa-spin"></i></> 
          : 'View Furniture'} 
        </button>
        <button className={`nav-button ${isActive(buttonState.ELECTRONICS)}`} onClick={displayElectronics} disabled={isButtonDisabled}>
          {loadingState[buttonState.ELECTRONICS] ? <>Fetching &nbsp; <i className="fa-solid fa-spinner fa-spin"></i></> 
          : 'View Electronics'}
        </button>
      </nav>

      <div className="product-display">
        {totalItems === 0 ? <p className='no-items'>No items found &nbsp; <i className="fa-solid fa-circle-exclamation"></i></p> : Renderer}
      </div>

    </div>
  );
};

export default DisplayItems;
