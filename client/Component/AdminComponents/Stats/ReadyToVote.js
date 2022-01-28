import React from "react";
import Chart from "react-apexcharts";
import {
  Avatar,
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Divider,
  Grid,
  Paper,
  Typography,
  Link,
  IconButton,
  CardHeader,
} from "@mui/material";
import { alpha, useTheme } from "@mui/material";
import ArrowRightIcon from "../../../icons/ArrowRight";
import ChevronDownIcon from "../../../icons/ChevronDown";
import ChevronUpIcon from "../../../icons/ChevronUp";
import DotsHorizontalIcon from "../../../icons/DotsHorizontal";

import Label from "../../../Label";

import ApprovalTable from "./ApprovalTable";

const ReadyToVote = () => {
  const theme = useTheme();

  const chartOptions = {
    chart: {
      background: "transparent",
      stacked: false,
      toolbar: {
        show: false,
      },
    },
    colors: ["#27c6db"],
    labels: [""],
    plotOptions: {
      radialBar: {
        dataLabels: {
          value: {
            show: false,
          },
        },
        hollow: {
          size: "60%",
        },
        track: {
          background: theme.palette.background.default,
        },
      },
    },
    theme: {
      mode: theme.palette.mode,
    },
  };

  const chartSeries = [83];

  return (
    <>
      <CardHeader
        action={
          <IconButton>
            <DotsHorizontalIcon fontSize="small" />
          </IconButton>
        }
        title="Ready To Vote Statistics"
      />
      <Box
        sx={{
          backgroundColor: "background.default",
          p: 3,
        }}
      >
        <Grid container spacing={3}>
          <Grid item md={6} xs={12}>
            <Card>
              <CardContent
                sx={{
                  alignItems: "center",
                  display: "flex",
                }}
              >
                <Chart
                  height="160"
                  options={chartOptions}
                  series={chartSeries}
                  type="radialBar"
                  width="160"
                />
                <Box
                  sx={{
                    display: "flex",
                    flex: 1,
                  }}
                >
                  <Box>
                    <Typography color="primary" variant="h4">
                      %60
                    </Typography>
                    <Typography
                      color="textPrimary"
                      sx={{ mt: 1 }}
                      variant="subtitle2"
                    >
                      READY
                    </Typography>
                  </Box>
                  <Box sx={{ flexGrow: 1 }} />
                  <Avatar
                    sx={{
                      backgroundColor: alpha(theme.palette.success.main, 0.08),
                      color: "success.main",
                    }}
                    variant="rounded"
                  >
                    <ChevronUpIcon fontSize="small" />
                  </Avatar>
                </Box>
              </CardContent>
              <Divider />
            </Card>
          </Grid>
          <Grid item md={6} xs={12}>
            <Card>
              <CardContent
                sx={{
                  alignItems: "center",
                  display: "flex",
                }}
              >
                <Chart
                  height="160"
                  options={chartOptions}
                  series={chartSeries}
                  type="radialBar"
                  width="160"
                />
                <Box
                  sx={{
                    display: "flex",
                    flex: 1,
                  }}
                >
                  <Box>
                    <Typography color="textPrimary" variant="h4">
                      %100
                    </Typography>
                    <Typography
                      color="textPrimary"
                      sx={{ mt: 1 }}
                      variant="subtitle2"
                    >
                      NOT READY
                    </Typography>
                  </Box>
                  <Box sx={{ flexGrow: 1 }} />
                  <Avatar
                    sx={{
                      backgroundColor: alpha(theme.palette.error.main, 0.08),
                      color: "error.main",
                    }}
                    variant="rounded"
                  >
                    <ChevronDownIcon fontSize="small" />
                  </Avatar>
                </Box>
              </CardContent>
              <Divider />
            </Card>
          </Grid>
        </Grid>
      </Box>

      {/* Approval */}

      <ApprovalTable />
    </>
  );
};

export default ReadyToVote;
