import { useState } from 'react';
import { useOutletContext } from 'react-router-dom';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import './Order.css';

export default function Order() {
  const { orders } = useOutletContext();
  const [value, setValue] = useState(0);

  function handleChange(event, newValue) {
    setValue(newValue);
  };

  function filteredOrders (status) {
    return orders.filter(order => order.orderStatus === status);
  };

  return (
    <>
      <Tabs
        value={value}
        onChange={handleChange}
        variant="scrollable"
        scrollButtons
        allowScrollButtonsMobile
        aria-label="scrollable force tabs example"
      >
        <Tab label="Pending" />
        <Tab label="Canceled" />
        <Tab label="Completed" />
      </Tabs>

      <TabPanel value={value} index={0}>
        {filteredOrders(0).length === 0 ? (
          <Typography>No pending orders</Typography>
        ) : (
          filteredOrders(0).map(order => (
            <OrderDetail key={order.transactionId} order={order} />
          ))
        )}
      </TabPanel>

      <TabPanel value={value} index={1}>
        {filteredOrders(2).length === 0 ? (
          <Typography>No canceled orders</Typography>
        ) : (
          filteredOrders(2).map(order => (
            <OrderDetail key={order.transactionId} order={order} />
          ))
        )}
      </TabPanel>

      <TabPanel value={value} index={2}>
        {filteredOrders(1).length === 0 ? (
          <Typography>No completed orders</Typography>
        ) : (
          filteredOrders(1).map(order => (
            <OrderDetail key={order.transactionId} order={order} />
          ))
        )}
      </TabPanel>
    </>
  );
}

//  display individual order details
function OrderDetail({ order }) {
  return (
<Box sx={{ display: 'flex', alignItems: 'center', p: 2, border: '1px solid grey', mb: 2 }}>
      <img className="orderImg" src={order.imgUrl} alt={`Product ${order.productId}`} />
      <Box sx={{ marginLeft: 2 }}>
        <Typography>Transaction ID: {order.transactionId}</Typography>
        <Typography>Product ID: {order.productId}</Typography>
        <Typography>Order Quantity: {order.orderQuantity}</Typography>
        <Typography>Order Status: {order.orderStatus === 0 ? 'Pending' : order.orderStatus === 1 ? 'Completed' : 'Canceled'}</Typography>
        <Typography>Email: {order.email}</Typography>
        <Typography>Date Ordered: {order.dateOrdered}</Typography>
        <Typography>Time: {order.time}</Typography>
      </Box>
    </Box>
  );
}

// renders the TabPanel
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-force-tabpanel-${index}`}
      aria-labelledby={`scrollable-force-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          {children}
        </Box>
      )}
    </div>
  );
}
