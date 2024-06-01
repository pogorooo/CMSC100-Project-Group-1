import { useState } from 'react';
import { useOutletContext } from 'react-router-dom';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import './Order.css';
import checklist from '../../assets/checklist.png';



export default function Order() {
  const { orders, setOrders } = useOutletContext();
  const [value, setValue] = useState(0);

  //to handle the value (pending, cancelled, confirmed)
  function handleChange(event, newValue) {
    setValue(newValue);
  }

  function filteredOrders(status) {
    return orders.filter(order => order.orderStatus === status);
  }

  //for canceling
  function handleCancelOrder(transactionId){
    const updatedOrders = orders.map(order => {
        if (order.transactionId === transactionId) {
            return { ...order, orderStatus: 2 };
        }
        return order;
    });
    setOrders(updatedOrders);
  }

  return (
    <>
      <Tabs
        value={value}
        onChange={handleChange}
        variant="scrollable"
        scrollButtons
        allowScrollButtonsMobile
        aria-label="scrollable force tabs example"
        sx={{
          backgroundColor: '#f5f5f5',
          '& .MuiTab-root': {
            fontWeight: 'bold',
            color: '#333',
            '&.Mui-selected': {
              color: '#227e67',
            },
          },
          '& .MuiTabs-indicator': {
            backgroundColor: '##227e67',
          },
        }}
      >
        <Tab label="Pending" />
        <Tab label="Cancelled" />
        <Tab label="Confirmed"/>
      </Tabs>

      <TabPanel value={value} index={0}>
        {filteredOrders(0).length === 0 ? (
          <div className='no-order'>
            <Typography sx={{ textAlign: 'center', fontWeight: 500, fontSize: '1.5rem' }}>No pending orders</Typography>
            <img className="img-no-order" src={checklist} alt ="no order"/>
          </div>
        ) : (
          filteredOrders(0).map(order => (
            <OrderDetail key={order.transactionId} order={order} handleCancelOrder={handleCancelOrder} />
          ))
        )}
      </TabPanel>

      <TabPanel value={value} index={1}>
        {filteredOrders(2).length === 0 ? (
          <div className='no-order'>
              <Typography sx={{ textAlign: 'center', fontWeight: 500, fontSize: '1.5rem' }}>No cancelled orders</Typography>
              <img className="img-no-order" src={checklist} alt ="no order"/>
          </div>
          
        ) : (
          filteredOrders(2).map(order => (
            <OrderDetail key={order.transactionId} order={order} />
          ))
        )}
      </TabPanel>

      <TabPanel value={value} index={2}>
        {filteredOrders(1).length === 0 ? (
            <div className='no-order'>
                <Typography sx={{ textAlign: 'center', fontWeight: 500, fontSize: '1.5rem' }}>No confirmed orders</Typography>
                <img className="img-no-order" src={checklist} alt ="no order"/>
            </div>
          
        ) : (
          filteredOrders(1).map(order => (
            <OrderDetail key={order.transactionId} order={order} />
          ))
        )}
      </TabPanel>
    </>
  );
}

function OrderDetail({ order ,handleCancelOrder}) {
  return (
    <Box sx={{ display: 'flex', alignItems: 'center', p: 2, border: '1px solid grey', mb: 2 }}>
      <img className="orderImg" src={order.imgUrl} alt={`Product ${order.productId}`} />
      <Box sx={{ marginLeft: 2 }}>
        <Typography>Transaction ID: {order.transactionId}</Typography>
        <Typography>Product ID: {order.productId}</Typography>
        <Typography>Order Quantity: {order.orderQuantity}</Typography>
        <Typography>Order Status: {order.orderStatus === 0 ? 'Pending' : order.orderStatus === 1 ? 'Completed' : 'Cancelled'}</Typography>
        <Typography>Email: {order.email}</Typography>
        <Typography>Date Ordered: {order.dateOrdered}</Typography>
        <Typography>Time: {order.time}</Typography>
        {order.orderStatus === 0 && (
          <button className='cancel-btn' onClick={() => handleCancelOrder(order.transactionId)}>
            Cancel Order
          </button>
        )}      
        </Box>
    </Box>
  );
}

function TabPanel(props) {
  const { children, value, index} = props;
  return (
    <div>
      {value === index && (
        <Box sx={{ p: 3 }}>
          {children}
        </Box>
      )}
    </div>
  );
}
