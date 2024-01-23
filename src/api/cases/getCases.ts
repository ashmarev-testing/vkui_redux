import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const clientId = "client1";
const url =
  "https://d5ddf1qedin3lactukpq.apigw.yandexcloud.net/api/client/" +
  clientId +
  "/cases";

export const getCases = createAsyncThunk("fetchCasesData", async () => {
  const response = await axios.get(url);
  return response.data.data;
});
