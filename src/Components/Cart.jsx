import React, { useEffect, useState } from "react";
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import axios from "axios";
import Button from '@mui/material/Button';
import Navbar from "./Navbar";
import { useLocation } from "react-router-dom";
import { useSelector } from 'react-redux';
const Cart = () => {
  const [rows, setRows] = useState([]);
  const [n, setN] = useState("");
  const location = useLocation();
  const user = useSelector((state) => state.user);
  useEffect(() => {
    const fetch = async () => {
      if (user) {
        setN(user);
        try {
          const res = await axios.get(`http://localhost:8080/order/${user.name}`);
          setRows(res.data);
          console.log(res.data);
        } catch (error) {
          console.error("Error fetching orders:", error);
        }
      }
    };
    fetch();
  }, []);

  const handleDelete = async (row) => {
    const id = row.id;
    console.log('Deleting product with ID:', id);
    if (typeof id !== 'number') {
      console.error('Invalid ID type:', id);
      return;
    }
    try {
      await axios.delete(`http://localhost:8080/api/products/${id}`);
      setRows(rows.filter((row) => row.id !== id)); // Changed from row.sno to row.id
      window.location.reload();
    } catch (error) {
      console.error("There was an error deleting the product!", error);
    }
  };

  const columns = [
    { id: 'id', label: 'Sno', minWidth: 50, align: 'left' },
    { id: 'product', label: 'Name', minWidth: 100, align: 'left' },
    { id: 'price', label: 'Price', minWidth: 100, align: 'left' },
    { id: 'date', label: 'Delivery Date', minWidth: 100, align: 'left' },
    { id: 'address', label: 'Delivery Address', minWidth: 100, align: 'left' },
  ];

  return (
    <div className="del">
      <Navbar />
      <Paper>
        <TableContainer>
          <Table stickyHeader aria-label="sticky table">
            <TableHead>
              <TableRow>
                {columns.map((column) => (
                  <TableCell
                    key={column.id}
                    align={column.align}
                    style={{ minWidth: column.minWidth }}
                    sx={{ backgroundColor: "gray" }}
                  >
                    {column.label}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <TableRow hover role="checkbox" tabIndex={-1} key={row.id}>
                  {columns.map((column) => {
                    const value = row[column.id];
                    if (column.id === 'delete') {
                      return (
                        <TableCell key={column.id} align={column.align}>
                          <Button
                            variant="contained"
                            sx={{ backgroundColor: "red" }}
                            onClick={() => handleDelete(row)}
                          >
                            Delete
                          </Button>
                        </TableCell>
                      );
                    }
                    return (
                      <TableCell key={column.id} align={column.align}>
                        {column.format && typeof value === 'number'
                          ? column.format(value)
                          : value}
                      </TableCell>
                    );
                  })}
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
    </div>
  );
};

export default Cart;
