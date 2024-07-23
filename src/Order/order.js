import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import { CCol, CRow, CCard, CCardBody, CButton, CListGroup, CListGroupItem, CFormInput } from '@coreui/react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Pizza, Chocalate, Rice, OrderPG ,Plus,Minus,Burger,Paneer,Paratha,PIzzas,Chinese,ChickenBiryani,ChickenLoliPop,ChickenCurry,Cart} from 'views/field/pic';
import NavbarDemo from 'share/navbarDemo';

const Order = () => {
  const [items, setItems] = useState([]);
  const [food, setFood] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [visible, setVisible] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [open, setOpen] = useState(false);
  const [filter, setFilter] = useState('all');

  const fetchdata = () => {
    fetch('https://jsonplaceholder.typicode.com/photos')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        setFood(data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchdata();
  }, []);

  const addItem = (name, price) => {
    const existingItemIndex = items.findIndex((item) => item.name === name);
    if (existingItemIndex !== -1) {
      const newItems = [...items];
      newItems[existingItemIndex].quantity += 1;
      newItems[existingItemIndex].total = newItems[existingItemIndex].quantity * newItems[existingItemIndex].unitPrice;
      setItems(newItems);
    } else {
      setItems([...items, { name, quantity: 1, unitPrice: price, total: price }]);
    }
  };

  const handleVisible = () => {
    setVisible(!visible);
  };

  const removeItem = (index) => {
    const newItems = items.filter((value, i) => i !== index);
    setItems(newItems);
  };

  const handleQuantityChange = (index, delta) => {
    const newItems = [...items];
    newItems[index].quantity = Math.max(1, newItems[index].quantity + delta);
    newItems[index].total = newItems[index].quantity * newItems[index].unitPrice;
    setItems(newItems);
  };

  const handleSubmit = () => {
    console.log('Order submitted: ' + JSON.stringify(items));
  };

  const PrevArrow = (props) => {
    const { className, onClick } = props;
    return (
      <button
        className={className}
        onClick={onClick}
        style={{
          backgroundColor: '#ccc',
          border: 'none',
          padding: '10px',
          cursor: 'pointer',
          position: 'absolute',
          top: '50%',
          left: '0',
          transform: 'translateY(-50%)',
          zIndex: 1
        }}
      >
        Previous
      </button>
    );
  };

  const NextArrow = (props) => {
    const { className, onClick } = props;
    return (
      <button
        className={className}
        onClick={onClick}
        style={{
          backgroundColor: '#ccc',
          border: 'none',
          padding: '10px',
          cursor: 'pointer',
          position: 'absolute',
          top: '50%',
          right: '0',
          transform: 'translateY(-50%)',
          zIndex: 1
        }}
      >
        Next
      </button>
    );
  };

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />
  };

  const imageData = [
    [
      { src: Pizza, alt: 'Pizza', value: 'Pizza', price: 250, category: 'veg' },
      { src: Rice, alt: 'Rice', value: 'Rice', price: 270, category: 'veg' },
      { src: Chocalate, alt: 'Chocolate', value: 'Chocolate', price: 350, category: 'veg' }
    ],
    [
      { src: Burger, alt: 'Burger', value: 'Burger', price: 350, category: 'veg' },
      { src: Paneer, alt: 'Paneer', value: 'Paneer', price: 150, category: 'veg' },
      { src: Paratha, alt: 'Paratha', value: 'Paratha', price: 150, category: 'veg' }
    ],
    [
      { src: PIzzas, alt: 'PIzzas', value: 'PIzzas', price: 300, category: 'veg' },
      { src: Chinese, alt: 'Chinese', value: 'Chinese', price: 350, category: 'veg' },
      { src: Chocalate, alt: 'Chocolate', value: 'Chocolate', price: 200, category: 'veg' }
    ],
    [
      { src: ChickenBiryani, alt: 'ChickenBiryani', value: 'ChickenBiryani', price: 300, category: 'nonveg' },
      { src: ChickenLoliPop, alt: 'ChickenLoliPop', value: 'ChickenLoliPop', price: 350, category: 'nonveg' },
      { src: ChickenCurry, alt: 'ChickenCurry', value: 'ChickenCurry', price: 200, category: 'nonveg' }
    ]
  ];

  const getTotalQuantity = () => {
    return items.reduce((total, item) => total + item.quantity, 0);
  };

  const getTotalPrice = () => {
    return items.reduce((total, item) => total + item.total, 0);
  };

  const handleSearch = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleFilterChange = (filter) => {
    setFilter(filter);
  };

  const filteredImageData = imageData.map((category) =>
    category.filter((item) =>
      item.value.toLowerCase().includes(searchQuery.toLowerCase()) &&
      (filter === 'all' || item.category === filter)
    )
  );

  return (
    <>
      <CRow>
      <CCol md={3} className="mb-3">
        <CFormInput type="text" placeholder="Search dishes..." value={searchQuery} onChange={handleSearch} />
      </CCol>
    
          <CCol md={1}>
            <CButton 
             style={{border:"1px solid",borderRadius:"20px"}}
            onClick={() => handleFilterChange('all')} color={filter === 'all' ? 'primary' : 'secondary'}>
              All
            </CButton>
            </CCol>
            <CCol  md={1}>
            <CButton 
             style={{border:"1px solid",borderRadius:"20px"}}
            onClick={() => handleFilterChange('veg')} color={filter === 'veg' ? 'primary' : 'secondary'}>
              Veg
            </CButton>
            </CCol>
            <CCol  md={2}>
            <CButton
            style={{border:"1px solid",borderRadius:"20px"}}
            onClick={() => handleFilterChange('nonveg')} color={filter === 'nonveg' ? 'primary' : 'secondary'}>
              Non-Veg
            </CButton>
          </CCol>
        </CRow>
        <CButton style={{ marginLeft: '900px',border:"2px solid" }} onClick={handleVisible}>
  <img src={Cart} style={{ width: '30px', height: '30px', marginRight: '8px' }} />
  {getTotalQuantity()}
</CButton>
      <div className="order-container">
        <CCol className="mb-4">
          <img src={OrderPG} style={{ width: '230px', height: '110px' }} />
        </CCol>
        <CRow>
          <ul className="order-list">
            {!visible &&
              items.map((item, index) => (
                <CCol md={4} key={index}>
                  <CListGroup>
                    <CListGroupItem>
                      {item?.name} x {item?.quantity} @ {item?.unitPrice} Rs each = {item?.total} Rs
                      <CButton onClick={() => handleQuantityChange(index, -1)}><img src={Minus} /></CButton>
                      <CButton onClick={() => handleQuantityChange(index, 1)}><img src={Plus} /></CButton>
                      <CButton color="primary" onClick={() => removeItem(index)} style={{ borderRadius: '26px' }}>
                        Remove
                      </CButton>
                    </CListGroupItem>
                  </CListGroup>
                </CCol>
              ))}
          </ul>
        </CRow>
        {!visible && (
          <CRow>
            <CCol md={12}>
              <h3>Total: {getTotalPrice()} Rs</h3>
            </CCol>
          </CRow>
        )}
        {!visible && (
          <CRow className="mt-3 order-button-group">
            <CCol md={2}>
              <CButton onClick={handleSubmit} color="dark">
                Submit Order
              </CButton>
            </CCol>
            <CCol md={3}>
              <CButton color="danger" onClick={handleVisible}>
                Cancel
              </CButton>
            </CCol>
          </CRow>
        )}
        {visible && (
          <>
            <CCol className="mt-2 mb-4">
              <h2>Choose Tasty Foods</h2>
            </CCol>
          </>
        )}
        {filteredImageData.map((card, index) => (
          visible && (
            <CRow key={index}>
              {card.map((image, idx) => (
                <CCol className="mb-3" key={idx}>
                  <img
                    src={image.src}
                    alt={image.alt}
                    style={{ width: "326px", height: "186px", borderRadius: "8px" }}
                  />
                  <span>{image.value}</span>
                  <br />
                  <span>{image.price} Rs</span>
                  <CCol style={{ marginLeft: '234px', marginTop: '-29px' }}>
                    <CButton onClick={() => addItem(image.value, image.price)} color="dark" style={{ borderRadius: '26px' }}>
                      Add
                    </CButton>
                  </CCol>
                </CCol>
              ))}
            </CRow>
          )
        ))}
      </div>
    </>
  );
};

export default Order;

//Below code how slider work code is write 
// import React, { useState, useEffect } from 'react';
// import Slider from 'react-slick';
// import { CCol, CRow, CCard, CCardBody, CFormInput, CButton, CCardText, CCardLink, CListGroup, CListGroupItem } from '@coreui/react';
// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';
// import { Pizza, Chocalate, Rice, OrderPG } from 'views/field/pic';

// const Order = () => {

//   const [items, setItems] = useState([]);
//   const [itemName, setItemName] = useState('');
//   const [quantity, setQuantity] = useState(1);
//   const [unitPrice, setUnitPrice] = useState();
//   const [food, setFood] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   const fetchdata = () => {
//     fetch('https://jsonplaceholder.typicode.com/photos')
//       .then((response) => {
//         if (!response.ok) {
//           throw new Error('Network response was not ok');
//         }
//         return response.json();
//       })
//       .then((data) => {
//         setFood(data);
//         setLoading(false);
//       })
//       .catch((error) => {
//         setError(error);
//         setLoading(false);
//       });
//   };

//   useEffect(() => {
//     fetchdata();
//   }, []);

//   const addItem = () => {
//     if (itemName && quantity > 0 && unitPrice > 0) {
//       setItems([...items, { name: itemName, quantity, unitPrice, total: quantity * unitPrice }]);
//       setItemName('');
//       setQuantity(1);
//       setUnitPrice(0);
//     }
//   };

//   const removeItem = (index) => {
//     const newItems = items.filter((value, i) => i !== index);
//     setItems(newItems);
//   };

//   const handleSubmit = () => {
//     alert('Order submitted: ' + JSON.stringify(items));
//   };

//   const handleQuantityChange = (index, delta) => {
//     const newItems = [...items];
//     newItems[index].quantity = Math.max(1, newItems[index].quantity + delta);
//     newItems[index].total = newItems[index].quantity * newItems[index].unitPrice;
//     setItems(newItems);
//   };

//   const PrevArrow = (props) => {
//     const { className, onClick } = props;
//     return (
//       <button
//         className={className}
//         onClick={onClick}
//         style={{
//           backgroundColor: '#ccc',
//           border: 'none',
//           padding: '10px',
//           cursor: 'pointer',
//           position: 'absolute',
//           top: '50%',
//           left: '0',
//           transform: 'translateY(-50%)',
//           zIndex: 1
//         }}
//       >
//         Previous
//       </button>
//     );
//   };

//   const NextArrow = (props) => {
//     const { className, onClick } = props;
//     return (
//       <button
//         className={className}
//         onClick={onClick}
//         style={{
//           backgroundColor: '#ccc',
//           border: 'none',
//           padding: '10px',
//           cursor: 'pointer',
//           position: 'absolute',
//           top: '50%',
//           right: '0',
//           transform: 'translateY(-50%)',
//           zIndex: 1
//         }}
//       >
//         Next
//       </button>
//     );
//   };

//   const sliderSettings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     prevArrow: <PrevArrow />,
//     nextArrow: <NextArrow />
//   };

//   const imageData = [
//     [
//       { src: Pizza, alt: 'Pizza', value: 'PIZZA', price: '250Rs' },
//       { src: Rice, alt: 'Rice', value: 'RICE', price: '270Rs' },
//       { src: Chocalate, alt: 'Chocolate', value: 'Chocolate', price: '350Rs' }
//     ],
//     [
//       { src: Rice, alt: 'Rice', value: 'RICE', price: '350Rs' },
//       { src: Chocalate, alt: 'Chocolate', value: 'Chocolate', price: '150Rs' },
//       { src: Rice, alt: 'Rice', value: 'RICE', price: '150Rs' }
//     ],
//     [
//       { src: Pizza , alt: 'Pizza', value: 'PIZZA', price: '300Rs' },
//       { src: Rice, alt: 'Rice', value: 'RICE', price: '350Rs' },
//       { src: Chocalate, alt: 'Chocolate', value: 'Chocolate', price: '200Rs' }
//     ]
//   ];

//   const getTotalPrice = () => {
//     return items.reduce((total, item) => total + item.total, 0);
//   };

//   return (
//     <div className="order-container">
//       <CCol className="mb-4">
//         <img src={OrderPG} style={{ width: '230px', height: '110px' }} />
//       </CCol>
//       <CRow>
//         <CCol md={3}>
//           <CFormInput
//             type="text"
//             placeholder="Product Name"
//             value={itemName}
//             onChange={(e) => setItemName(e.target.value)}
//             label="Product Name"
//           />
//         </CCol>
//         <CCol md={3}>
//           <CFormInput
//             type="number"
//             min="1"
//             value={quantity}
//             onChange={(e) => setQuantity(Math.max(1, Number(e.target.value)))}
//             label="Quantity"
//           />
//         </CCol>
//         <CCol md={3}>
//           <CFormInput
//             type="number"
//             min="0"
//             value={unitPrice}
//             onChange={(e) => setUnitPrice(Math.max(0, Number(e.target.value)))}
//             label="Unit Price"
//           />
//         </CCol>
//         <CCol md={3}>
//           <CButton onClick={addItem} color="dark" style={{ marginTop: '30px' }}>Add Item</CButton>
//         </CCol>
//       </CRow>
//       <ul className="order-list">
//         {items.map((item, index) => (
//           <CCol md={4} key={index} style={{position:'absolute',marginLeft:"609px",marginTop:"-298px"}}>
//             <CListGroup>
//               <CListGroupItem>
//                 {item.name} x {item.quantity} @ {item.unitPrice} Rs each = {item.total} Rs
//                 <CButton onClick={() => handleQuantityChange(index, -1)}>-</CButton>
//                 <CButton onClick={() => handleQuantityChange(index, 1)}>+</CButton>
//                 <CButton color="primary" onClick={() => removeItem(index)}>Remove</CButton>
//               </CListGroupItem>
//             </CListGroup>
//           </CCol>
//         ))}
//       </ul>
//       <CRow>
//         <CCol md={12}>
//           <h3>Total: {getTotalPrice()} Rs</h3>
//         </CCol>
//       </CRow>
//       <CButton onClick={handleSubmit} color="danger" style={{ marginLeft: '812px' }}>Submit Order</CButton>
//       <CCol className="mt-2 mb-4">
//         <h2>Choose Tasty Foods</h2>
//       </CCol>
//       <Slider {...sliderSettings}>
//         {imageData.map((card, index) => (
//           <CRow key={index}>
//             {card.map((image, idx) => (
//               <CCol md={4} key={idx}>
//                 <CCard style={{ width: '323px', height: '258px' }}>
//                   <CCardBody>
//                     <img src={image.src} alt={image.alt} />
//                     <CCardText>{image.value}</CCardText>
//                     <CCardText>{image.price}</CCardText>
//                   </CCardBody>
//                   <CCardLink href="https://www.restaurant-website-builder.com/">Go To Restaurant</CCardLink>
//                 </CCard>
//               </CCol>
//             ))}
//           </CRow>
//         ))}
//       </Slider>
//     </div>
//   );
// };

// export default Order;
