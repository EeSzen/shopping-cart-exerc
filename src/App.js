// import React, { useState } from "react";

// // Test data - Do not modify
// const items = [
//   { id: 1, name: "T-shirt", price: 20, onSale: true },
//   { id: 2, name: "Jeans", price: 50, onSale: false },
//   { id: 3, name: "Socks", price: 5, onSale: true },
//   { id: 4, name: "Hat", price: 15, onSale: false },
//   { id: 5, name: "Shoes", price: 65, onSale: true },
// ];

// function App() {
//   const [FilteredList, setFilteredList] = useState(items);
//   const [showSaleOnly, setShowSaleOnly] = useState(false);

//   // Toggle between showing sale items or all items
//   const filterItems = () => {
//     setShowSaleOnly(!showSaleOnly);
//     if (showSaleOnly) {
//       setFilteredList(items); // Show all items
//     } else {
//       setFilteredList(items.filter((item) => item.onSale === true)); // Show only sale items
//     }
//   };

//   return (
//     <div className="container mt-5">
//       {/* Button to toggle sale filter */}
//       <div className="text-center mb-4">
//         <button
//           onClick={filterItems}
//           className={`btn btn-${showSaleOnly ? "danger" : "primary"} btn-lg`}
//         >
//           {showSaleOnly ? "Show All Items" : "Show Sale Items Only"}
//         </button>
//       </div>

//       {/* List of Products */}
//       <div className="row row-cols-1 row-cols-md-3 g-4">
//         {FilteredList.map((item) => (
//           <div className="col" key={item.id}>
//             <div className="card shadow-sm rounded p-3">
//               {/* Product details */}
//               <h5 className="card-title">{item.name}</h5>
//               <p className="card-text">Price: ${item.price}</p>

//               {/* Badge for sale items */}
//               {item.onSale && (
//                 <span className="badge bg-danger mb-3">On Sale!</span>
//               )}

//               {/* Buttons */}
//               <div className="d-flex justify-content-between">
//                 <button className="btn btn-outline-primary btn-sm">View Details</button>
//                 <button className="btn btn-outline-success btn-sm">Add to Cart</button>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default App;

/*==================================================================================*/ 
import React, { useState } from "react";

// Test data - Do not modify
const items = [
  { id: 1, name: "T-shirt", price: 20, onSale: true },
  { id: 2, name: "Jeans", price: 50, onSale: false },
  { id: 3, name: "Socks", price: 5, onSale: true },
  { id: 4, name: "Hat", price: 15, onSale: false },
  { id: 5, name: "Shoes", price: 65, onSale: true },
];


function App() {
  const [FilteredList, setFilteredList] = useState(items);
  const [showSaleOnly, setShowSaleOnly] = useState(true);

  // show it out
  // const allItems = items.map((item) => (<li key={item.id}>{item.name}- ${item.price}</li>))

  // check
  const filterItems = () => {
    if ((showSaleOnly === true)){
      setShowSaleOnly(false);
    }else{
      setShowSaleOnly(true);
    }
    if(showSaleOnly === true){
      setFilteredList(FilteredList.filter((item) => item.onSale === true));
    }else{
      setFilteredList(items);
    }
  }

  // Your code here
  return (
    <div className="container">
    {/* Your JSX here */}
      <h1>Shopping Cart</h1>
      <button onClick={filterItems} className="btn btn-primary">
      {showSaleOnly ? "Show Sale Items Only" : "Show All Items" }
      </button>
    <div className="card py-4 pe-4 ">
        {FilteredList.map((item) => {
          return(
              <div key={item.id} className="d-flex justify-content-space-between p-4">{item.name}  
                {item.onSale === true ? (<span className="badge bg-danger">On Sale!</span>) : null}</div>
          )
        })}
    </div>
    </div>
  );
}

export default App;
/*==================================================================================*/ 