import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
// import business from    '../business.json'
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";

const Home = (props) => {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell align="right">Description</TableCell>
            <TableCell align="right">Hours</TableCell>
            <TableCell align="right">Address</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {props.business.map((business, idx) => (
            <TableRow
              key={business.name}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                <Link to={`/details/${business.id}`}>{business.name}</Link>
              </TableCell>
              <TableCell align="right">{business.description}</TableCell>
              <TableCell align="right">{business.hours}</TableCell>
              <TableCell align="right">{business.address}</TableCell>
              {props.loggedIn && (
                <TableCell align="right">
                  <Button
                    variant="contained"
                    color="secondary"
                    onClick={() => props.removeBusiness(idx)}
                  >
                    Delete
                  </Button>
                </TableCell>
              )}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default Home;
