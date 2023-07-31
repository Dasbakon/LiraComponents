<script lang="ts">
    export let name = 'name'; 
    export let imgSrc: string;
    export let description = 'description';
</script>

<div class="grid grid-cols-2 w-fit">
    <div class="col">
        <p>{name}</p>
        <img src={imgSrc} alt="">
        <p class="italic">{description}</p>
    </div>
    <div class="col2">
        <p>Locais</p>
        <p></p>
    </div>
</div>
