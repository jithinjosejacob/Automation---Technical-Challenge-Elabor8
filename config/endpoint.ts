import dotenv from "dotenv"
import { pactumConfig } from "./pactumConfig"
import { request } from "pactum"
dotenv.config()

request.setBaseUrl(`${pactumConfig.request.baseUrl}`)

const GET_FACTS_URL: string = "/facts"
const GET_INVALID_FACTS_URL: string = "/fact"
const GET_FACT_URL: string = "/facts/58e008800aac31001185ed07"
const GET_INVALID_FACT_URL: string = "/facts/1"

export default {
    GET_FACTS_URL,
    GET_INVALID_FACTS_URL,
    GET_FACT_URL,
    GET_INVALID_FACT_URL
  }
