<script setup>
import Button from "../components/Button.vue"
</script>

<template>
    <div>
        <h1 class="text-4xl mx-auto">
            Muito Obrigado!
        </h1>
        <p class="text-xl font-light mt-12 w-full md:w-6/12 mx-auto text-justify">
            Parabéns pela iniciativa de se cadastrar no nosso sistema! Com o Meus Links, sua empresa poderá compartilhar
            todas as suas redes sociais em um só lugar, de forma eficiente e profissional. Além disso, você poderá criar
            botões personalizados de chamada para ação, como "Compre agora" ou "Assine nossa newsletter", para direcionar
            seus clientes diretamente para o que você deseja que eles façam. Com nossa plataforma, você poderá se destacar
            nas redes sociais, aumentar sua visibilidade e ampliar sua presença digital de maneira simples e descomplicada.
            Estamos animados para fazer parte do seu sucesso!
        </p>
        <p class="text-xl font-light mt-4 w-full md:w-6/12 mx-auto text-justify">
            Volte para a página inicial e confira a seção de exemplos que preparamos para você. Lá, você poderá encontrar
            diversas sugestões e ideias para personalizar sua página da maneira que melhor represente sua empresa ou marca.
            Com esses exemplos, você poderá ter uma visão mais clara do que é possível criar com o nosso sistema e
            inspirar-se para construir a sua própria página personalizada.
        </p>
        <router-link to="/">
            <Button button-text="RETORNAR AO INICIO" primary class="w-full md:w-6/12 mt-12 font-bold" />
        </router-link>
    </div>
</template>

