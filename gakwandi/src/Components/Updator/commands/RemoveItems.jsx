import React, { useState, useEffect } from 'react';
import './Yall.css';
import '../Updator.css';

const RemoveItems = () => {  


  const buttonState = {
    ALL: 'all',
    FURNITURE: 'furniture',
    ELECTRONICS: 'electronics'
  };

  const [button, setButton] = useState();
  const [totalItems, setTotalItems] = useState(0);
  const [loadingState, setLoadingState] = useState({});
  const [load, setUpdateLoad] = useState(false);
  const [loadingStates, setLoadingStates] = useState({});
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































  






//------------------ Removing an item section ------------------------------------------------------------
//------------------ Removing an item section ------------------------------------------------------------
//------------------ Removing an item section ------------------------------------------------------------


const handleRemoveItem = async (id, event) => {
    const disableButton = event.currentTarget;
    disableButton.classList.add('disable');
    setIsButtonDisabled(true);
    setLoadingStates(prev => ({ ...prev, [id]: true }));
    try {
      const response = await fetch('https://gakwandi-project.glitch.me/api/admindelete', {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id }),
      });
      if (response.ok) {
        disableButton.classList.remove('disable');
        setIsButtonDisabled(false);
        setLoadingStates(prev => ({ ...prev, [id]: false }));

        setProducts((prevProducts) => prevProducts.filter((item) => item._id !== id));
        setTotalItems((prevTotal) => prevTotal - 1);
        alert('Item deleted successfully')
      } else {
        disableButton.classList.remove('disable');
        setIsButtonDisabled(false); 
        setLoadingStates(prev => ({ ...prev, [id]: false }));
        alert('Failed to delete the item.');
      }
    } catch (error) {
        disableButton.classList.remove('disable');
        setIsButtonDisabled(false); 
        setLoadingStates(prev => ({ ...prev, [id]: false }));
        console.error('Error deleting product:', error);
    }
};
  































  // ---- Products display -------------------------------------------------------------------

  const Renderer = (
    <>
      {products.map((item, index) => (
        <div key={index} className="product-card delete-card">
          <img src={item.image} alt={item.name} className="product-image" />
          <h3 className="product-name">{item.name}</h3>
          <p className="product-category">Category: {item.category}</p>
          <p className="product-quantity">Quantity: {item.quantity}</p>
          <p className="product-price">{item.price}</p>
          <button className='remove-item' onClick={(event) => handleRemoveItem(item._id, event)} disabled={isButtonDisabled}>
            {loadingStates[item._id] ? <>Deleting &nbsp; <i className="fa-solid fa-spinner fa-spin"></i></> : 'Remove item'}
          </button>
        </div>
      ))}
    </>
  );













  

  return (
    <div className="display-container">
      <header>
        <h2>Delete items from store</h2>
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

export default RemoveItems;
