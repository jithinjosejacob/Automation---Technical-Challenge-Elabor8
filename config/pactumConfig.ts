import dotenv from "dotenv"
import { NodeENV } from "./env_configuration"
dotenv.config()

export const pactumConfig = {
  request: {
    baseUrl: NodeENV(process.env.ENV || ""),
    timeout: 20000, // 20 seconds
    headers: {
      Host: "",
      "User-Agent": "elabor8-api",
      Accept: "*/*",
      "Accept-Encoding": "gzip, deflate, br",
      Connection: "keep-alive"
    },
    followRedirects: false
    // retry: {
    //   count: 3,
    //   delay: 2000,
    // },
  },
  response: {
    time: 20000,
    status: 200,
    headers: {},
    expectHandlers: [],
    wait: {
      duration: 1000,
      polling: 100
    }
  },
  data: {
    ref: {
      map: {
        enabled: false,
        processed: false
      },
      fun: {
        enabled: false
      },
      spec: {
        enabled: false
      }
    },
    template: {
      enabled: false,
      processed: false
    }
  },
  strategy: {
    assert: {
      handler: {
        starts: "#"
      },
      expression: {
        includes: "$V"
      }
    },
    capture: {
      handler: {
        starts: "#"
      }
    }
  },
  snapshot: {
    dir: ".pactum/snapshots"
  },
  reporter: {
    autoRun: true
  }
}
