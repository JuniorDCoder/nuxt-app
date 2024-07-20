
import currencyapi from '@everapi/currencyapi-js'
export default defineEventHandler(async (event) => {
    // handle query parameters
    // const { name } = getQuery(event)

    // const { age }  = await readBody(event)
    const client = new currencyapi('cur_live_v9z9EDqkf8qDOKcU7eXvxjLTUeEKwzkwRt6H2714')
    const { data } = await client.currencies()
    
    return data
})