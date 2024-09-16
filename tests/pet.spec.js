// @ts-check
const { test, expect } = require('@playwright/test');
const { request } = require('http');

test("post pet", async ({request}) => {
    const requestBody = 
    { 
        "id": 777,
        "category": {
          "id": 0,
          "name": "string"
        },
        "name": "doggie",
        "photoUrls": [
          "string"
        ],
        "tags": [
          {
            "id": 0,
            "name": "string"
          }
        ],
        "status": "available"
    };
    const response = await request.post("https://petstore.swagger.io/v2/pet", {data:requestBody});

    expect(response.status()).toEqual(200);
    expect(response.ok()).toBeTruthy();
    expect(await response.json()).toEqual(requestBody);
});

test('get pet', async ({ request }) => {
    const petId = 777;
    const response = await request.get("https://petstore.swagger.io/v2/pet/" + petId);

    expect((response).status()).toEqual(200);
    expect((response).ok).toBeTruthy();
});

test("put pet", async ({request}) => {
    const requestBody = 
    { 
        "id": 777,
        "category": {
          "id": 0,
          "name": "string"
        },
        "name": "Bonny",
        "photoUrls": [
          "string"
        ],
        "tags": [
          {
            "id": 0,
            "name": "string"
          }
        ],
        "status": "available"
    };
    const response = await request.put("https://petstore.swagger.io/v2/pet", {data:requestBody});

    expect(response.status()).toEqual(200);
    expect(response.ok()).toBeTruthy();
    expect(await response.json()).toEqual(requestBody);
});