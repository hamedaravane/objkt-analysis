import fetch from "node-fetch"

const endpoint = 'https://data.objkt.com/v3/graphql'
const query = `
    query MyQuery {
      event(
        where: {event_type_deprecated: {_eq: "ask_purchase"}}
        order_by: {id: desc, timestamp: desc}
      ) {
        fa_contract
        token {
          token_id
        }
      }
    }
`

async function getLatestObjktPurchases() {
    await fetch(endpoint, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({query: query})
    })
        .then(response => response.json())
        .then(data => {
            console.log('Here is the data: ', data.data.event);
        });
}

getLatestObjktPurchases().then(r => r)