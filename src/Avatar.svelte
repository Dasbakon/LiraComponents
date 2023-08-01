<script lang="ts">
    export let variant: string = 'square';
    export let twclass: string = '';
    

    interface variantsType {
        [key: string]: string;
    }

    let variants: variantsType = {square: 'rounded-none', 'rounded-md': 'rounded-md', rounded: 'rounded-full'};
</script>

<img
  class={`relative inline-block h-12 w-12 ${variants[variant]} object-cover object-center ${twclass}`}
  alt="placeholder"
  src="https://www.material-tailwind.com/img/face-2.jpg"
/>