<template>
    <div id="grid">
        <img src="/images/r-place-australia.png" alt="Australia Display" />
        <img src="/images/r-place-anz.png" alt="Australia & New Zealand Display" />
        <img src="/images/r-place-steve-irwin.png" alt="Steve Irwin Display" />
        <img src="/images/r-place-uluru.png" alt="Uluru Display" />
    </div>
</template>

<style scoped lang="scss">
    .horizontal {
        flex-shrink: 1;
        flex-grow: 0;
    }

    #grid {
        display: grid;
        grid-template-columns: auto auto;
        gap: 1em;
    }
</style>
