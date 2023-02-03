import { spec } from 'pactum';
import { STATUSCODES } from "../resources/statusCodes";
import ENDPOINTS from "../config/endpoint"
import factsJson from "../resources/facts.test.json"

describe('TS001 Get Facts', () => {

  it('TC001 GET ALL FACTS', async () => {
    await spec()
      .get(ENDPOINTS.GET_FACTS_URL)
      .expectStatus(STATUSCODES.OK)
      .expectJson(factsJson)
  });

  it('TC002 GET INVALID FACTS', async () => {
    await spec()
      .get(ENDPOINTS.GET_INVALID_FACTS_URL)
      .expectStatus(STATUSCODES.NOT_FOUND)
  });

});
