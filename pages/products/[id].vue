<template>
    <div>
        <Head>
            <Title>Dojo - {{ product.title }}</Title>
            <Meta name="description" content="{{ product.description }}" />
        </Head>
        <ProductDetails :product="product" />
    </div>

</template>

<script setup>
import { useRoute } from 'vue-router';
definePageMeta({
    layout: 'products'
})

const route = useRoute();
const id = route.params.id;

const uri = 'https://fakestoreapi.com/products/' + id

const { data: product } = await useFetch(uri, { key: id})

if (!product.value) {
    throw createError({statusCode: 404, message: 'Product not found', fatal: true})
}
</script>