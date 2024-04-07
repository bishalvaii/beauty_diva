import React, { useState, useEffect } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';

const AdminOrders = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    fetchAdminOrders();
  }, []);

  const fetchAdminOrders = async () => {
    try {
      const response = await fetch('http://localhost:5000/admin/orders');
      if (!response.ok) {
        throw new Error('Failed to fetch orders');
      }
      const data = await response.json();
      setOrders(data);
    } catch (error) {
      console.error('Error fetching orders:', error);
    }
  };

  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Order ID</TableCell>
            <TableCell>Username</TableCell>
            <TableCell>Total Amount</TableCell>
            <TableCell>Order Created At</TableCell>
            <TableCell>Product ID</TableCell>
            <TableCell>Quantity</TableCell>
            <TableCell>Mobile Number</TableCell>
        <TableCell>Address</TableCell>
        <TableCell>Payment Gateway</TableCell>
            
          </TableRow>
        </TableHead>
        <TableBody>
          {orders.map((order) => (
            <TableRow key={order.order_id}>
              <TableCell>{order.order_id}</TableCell>
              <TableCell>{order.username}</TableCell>
              <TableCell>{order.total_amount}</TableCell>
              <TableCell>{order.order_created_at}</TableCell>
              <TableCell>{order.product_id}</TableCell>
              <TableCell>{order.quantity}</TableCell>
              <TableCell>{order.mobile_number}</TableCell>
            <TableCell>{order.address}</TableCell>
            <TableCell>{order.payment_gateway}</TableCell>
             
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default AdminOrders;
