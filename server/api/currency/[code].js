export default defineEventHandler(async (event) => {

    const { currencyKey } = useRuntimeConfig()
    const { code } = event.context.params
    const uri = `https://api.currencyapi.com/v3/latest?currencies[]=${code}&apiKey=${currencyKey}`


    const { data } = await fetch(uri)
    return data
})