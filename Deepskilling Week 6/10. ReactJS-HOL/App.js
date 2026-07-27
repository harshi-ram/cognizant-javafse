import React from 'react';
import './App.css';

function App() {
  const element = "Office Space";
  const sr = "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=600&q=80";
  const jsxatt = <img src={sr} width="25%" height="25%" alt="Office Space" />;
  const ItemName = { Name: "DBS", Rent: 50000, Address: 'Chennai' };

  const officeList = [
    { id: 1, Name: "DBS", Rent: 50000, Address: 'Chennai' },
    { id: 2, Name: "WeWork", Rent: 75000, Address: 'Bangalore' },
    { id: 3, Name: "Regus", Rent: 55000, Address: 'Hyderabad' },
    { id: 4, Name: "Smartworks", Rent: 85000, Address: 'Mumbai' }
  ];

  return (
    <div className="App" style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h1>{element} , at Affordable Range</h1>
      {jsxatt}
      <h1>Name: {ItemName.Name}</h1>
      <h3 style={{ color: ItemName.Rent <= 60000 ? 'red' : 'green' }}>
        Rent: Rs. {ItemName.Rent}
      </h3>
      <h3>Address: {ItemName.Address}</h3>

      <hr style={{ margin: '30px 0' }} />
      <h2>Office Spaces List</h2>

      {officeList.map((item) => {
        let colors = [];
        if (item.Rent <= 60000) {
          colors.push('textRed');
        } else {
          colors.push('textGreen');
        }

        return (
          <div key={item.id} style={{ border: '1px solid #ccc', margin: '10px 0', padding: '10px', borderRadius: '5px' }}>
            <h3>Name: {item.Name}</h3>
            <h4 className={colors[0]}>
              Rent: Rs. {item.Rent}
            </h4>
            <p>Address: {item.Address}</p>
          </div>
        );
      })}
    </div>
  );
}

export default App;
