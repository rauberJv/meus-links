<script setup>
import Button from "../components/Button.vue"
</script>

<template>
    <div>
        <h1 class="text-4xl mx-auto">
            Rota Digital
        </h1>
        <p class="text-xl font-light mt-12 w-full md:w-6/12 mx-auto text-justify">
            O <strong class="italic">Rota Digital</strong> é uma plataforma online que permite aos usuários criarem uma
            página
            personalizada com links
            para
            suas redes sociais. Com o <strong class="italic">Rota Digital</strong>, você pode compartilhar todas as suas
            redes
            sociais em um só lugar, com um
            design personalizado e botões de chamada para ação, como "Contrate-me" ou "Saiba mais". É uma maneira rápida e
            fácil de compartilhar todas as suas redes sociais de forma profissional e elegante. Experimente o
            <strong class="italic">Rota Digital</strong>
            hoje mesmo e se destaque na multidão!
        </p>
        <RouterLink to="/cadastro">
            <Button button-text="INICIAR" primary class="w-full md:w-6/12 mt-12" />
        </RouterLink>
        <RouterLink to="/exemplo/1">
            <Button button-text="VER EXEMPLOS" primary class="w-full md:w-6/12 mt-4" />
        </RouterLink>
    </div>
</template>

