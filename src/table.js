import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import PrivacyTipIcon from "@mui/icons-material/PrivacyTip";
import CheckIcon from "@mui/icons-material/Check";
import FlagIcon from "@mui/icons-material/Flag";
import ReportProblemIcon from '@mui/icons-material/ReportProblem';

export default function BasicTable(props) {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 100 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>ScreenName</TableCell>
            <TableCell>Status</TableCell>
            <TableCell>Link</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {Object.entries(props.obj).map(([user, status]) => (
            <TableRow key={user}>
              <TableCell>{user}</TableCell>
              <TableCell>
                <Box display="flex" alignItems="center">
                  {status ? (
                    <React.Fragment>
                      <PrivacyTipIcon color="error" />
                      &nbsp;なりすましアカウントの可能性があります
                    </React.Fragment>
                  ) : (
                    <React.Fragment>
                      <CheckIcon color="success" />
                      &nbsp;アカウントは存在しません
                    </React.Fragment>
                  )}
                </Box>
              </TableCell>
              <TableCell>
                {status ? (
                  <a href={"//twitter.com/"+user} target="_blank" rel="noreferrer noopener">
                    <Button
                      variant="contained"
                      color="error"
                      aria-label="report"
                    >
                      <ReportProblemIcon />
                    </Button>
                  </a>
                ) : (
                  <React.Fragment></React.Fragment>
                )}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
