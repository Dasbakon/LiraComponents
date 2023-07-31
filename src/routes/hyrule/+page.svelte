<script>
	import ItemCard from '../../ItemCard.svelte';
	import '../app.css';
</script>

<div class=" bg-slate-100 h-screen w-screen">
	<ul class="p-4 w-1/3">
		<ItemCard
			name={'Horse'}
			description={"These can most often be found on plains. Their usefulness as transportation has made them valuable since ancient times. That said, wild horses do tend to get spooked and run off when approached, so if you're looking to snag one, it's best to sneak up on it."}
			imgSrc={'https://botw-compendium.herokuapp.com/api/v2/entry/horse/image'}
		/>
		<ItemCard
			name={'Giant Horse'}
			description={'This giant horse is the last of its kind. Its physical capabilities completely overshadow those of regular horses, but its temperament is extremely wild. Only a truly skilled rider can train, or even catch, this beast of a mount. This is a horse that chooses its rider.'}
			imgSrc={'https://botw-compendium.herokuapp.com/api/v2/entry/giant_horse/image'}
		/>
	</ul>
</div>
