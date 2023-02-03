import { spec } from 'pactum';
import { STATUSCODES } from "../resources/statusCodes"
import ENDPOINTS from "../config/endpoint"
import { factDetail } from "../resources/fact.data";

describe('TS002 GET FACT', () => {

  it('TC003 GET INVALID FACT', async () => {
    await spec()
      .get(ENDPOINTS.GET_INVALID_FACT_URL)
      .expectStatus(STATUSCODES.BAD_REQUEST)
  });

});

describe.each(factDetail.fact)(
  "Validate Columns for Fact -  %s",
  (id,user,text,firstname,lastname,usertype) => {
    test("TC004 Fact Response Validation", async () => {
      const response = await spec()
      .get(ENDPOINTS.GET_FACTS_URL + '/' + id)
      .expectStatus(STATUSCODES.OK)
      expect(response.json.user._id).toBe(user)
      expect(response.json.text).toBe(text)
      expect(response.json.user.name.first).toBe(firstname)
      expect(response.json.user.name.last).toBe(lastname)
      expect(response.json.type).toBe(usertype)
    })
  }
)
