<template>
    <div>
        <h1>About</h1>
        <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur perspiciatis adipisci molestiae veniam atque minus molestias nisi non ad tempore, eaque obcaecati unde eos! Ea exercitationem mollitia natus dolore ipsum nemo, voluptatum voluptates doloremque laudantium unde aliquid, repudiandae quos veniam veritatis amet dolorum! Magnam nihil sapiente fugiat expedita obcaecati eius!
        </p>
        <div>
            {{ data }}
        </div>
    </div>
</template>

<script setup>
    const { data } = await useFetch('/api/currency/GBP');
    
</script>

<style scoped>
    h2{
        margin-bottom: 20px;
        font-size: 36px;
    }
    p{
        margin: 20px 0;
    }
</style>