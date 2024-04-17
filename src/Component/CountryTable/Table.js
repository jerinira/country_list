import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { TableContainer, TableHead, TableBody, TableRow, TableCell, Paper, Table, Button, Box, TextField, Typography } from '@mui/material';
import AlertDialogSlide from './Dialog';
const PaginationComponent = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(0);
    const [country, setCountry] = useState([]);
    const [backupDataApi, setBackupDataApi] = useState([]);
    const [details, setDetails] = useState([]);
    const [open, setOpen] = React.useState(false);


    const fetchProducts = async (page) => {
        try {
            const response = await axios.get(`http://dev.abroadinquiry.com:5001/countries?page=${page}&name=a`);
            const { data, totalPages } = response.data;
            setCountry(data);
            setBackupDataApi(data)
            setTotalPages(totalPages);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        fetchProducts(currentPage);
    }, [currentPage]);

    const handlePrevPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    const handleNextPage = () => {
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1);
        }
    };

    const handleClickOpen = (id, name) => {
        axios
            .get(
                `http://dev.abroadinquiry.com:5001/get-a-country-details?cid=${id}&cname=${name}`)
            .then((res) => {
                setDetails(res.data);
            });
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };


    const handleTextChange = (event) => {
        setCountry(
            backupDataApi.filter((job) =>
                Object.values(job).some((value) =>
                    (value == null ? "" : value)
                        .toString()
                        .toLowerCase()
                        .includes(event.target.value.toLowerCase())
                )
            )
        );
    };
    return (
        <Box align="center"
            style={{
                padding: "20px"
            }}>
            <Box padding="10px 0px">
                <TextField onChange={handleTextChange}
                    placeholder='Search...'
                    style={{ width: "120" }}
                />
            </Box>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }}>
                    <TableHead>
                        <TableRow>
                            <TableCell><Typography variant='h6'>ID</Typography></TableCell>
                            <TableCell><Typography variant='h6'>Name</Typography></TableCell>
                            <TableCell><Typography variant='h6'>Capital</Typography></TableCell>
                            <TableCell></TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {country.map((country) => (
                            <TableRow key={country.id}>
                                <TableCell>{country.name}</TableCell>
                                <TableCell>{country.name}</TableCell>
                                <TableCell>{country.capital}</TableCell>
                                <TableCell><Button
                                    onClick={() => handleClickOpen(country.id, country.name)}>Details</Button></TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
            {/* Pagination controls */}
            <Box align="right" padding="0px 20px">
                page of {currentPage} of {totalPages}
                <Button onClick={handlePrevPage} disabled={currentPage === 1}>
                    {"<"}Prev </Button>
                <Button onClick={handleNextPage} disabled={currentPage === totalPages}>
                    Next  {">"}</Button>
            </Box>
            <AlertDialogSlide flag={open}
                handleClose={handleClose}
                details={details}></AlertDialogSlide>
        </Box>
    );
};

export default PaginationComponent;