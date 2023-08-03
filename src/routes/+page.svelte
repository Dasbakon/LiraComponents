<script lang="ts">
	import { onMount } from 'svelte';
	import Accordion from '../Accordion.svelte';
	import HoverableTable from '../HoverableTable.svelte';
	import '../app.css';
	import { Record, records } from '../classes/record';
	import Alert from '../Alert.svelte';
	import Avatar from '../Avatar.svelte';
	import AvatarStack from '../AvatarStack.svelte';
	import Breadcrumb from '../Breadcrumb.svelte';
	import Button from '../Button.svelte';
	import Card from '../Card.svelte';
	import Chip from '../Chip.svelte';
	import Dialog from '../Dialog.svelte';
	import { bind } from 'svelte/internal';

	let revenue: number = 100;
	let expense: number = 50;
	let revenues = 0;
	let expenses = 0;
	let balance: number;
	let recordsValue: Array<Record>;
	let alertComponent: Alert;
	let alertVariant: string;
	let dialogComponent: Dialog;

	// let records is an array of Record<string, number>
	records.subscribe((value) => (recordsValue = value));

	$: balance = revenues - expenses;

	onMount(() => {
		loadRecords();
	});

	function loadRecords() {
		const recordsString = sessionStorage.getItem('records');
		if (recordsString) {
			const recordsArray = JSON.parse(recordsString);
			records.set(recordsArray);
		}
	}

	function showNotification() {
		alertComponent.show();
	}

	// function to add revenue to table
	function addRevenue(value: number) {
		console.log('add value: ' + value);
		revenues += value;
		const record = new Record(new Date().toLocaleDateString(), value, 'R');
		records.update((records) => [...records, record]);
		sessionStorage.setItem('records', JSON.stringify(recordsValue));
	}

	function addExpense(value: number) {
		console.log('subtract value: ' + value);
		expenses += value;
		const record = new Record(new Date().toLocaleDateString(), -value, 'E');
		records.update((records) => [...records, record]);
		sessionStorage.setItem('records', JSON.stringify(recordsValue));
	}

	function openDialog() {
		dialogComponent.open();
	}
</script>

<div class="justify-center flex sm:flex-wrap">
	<div class="revenue md:w-1/4 sm:w-full">
		<label for="revenues">Revenue</label>
		<input
			class="border px-1"
			type="number"
			id="revenues"
			min="1"
			max="1000000000000"
			bind:value={revenue}
		/>
		<Button variant='success' onClick={() => addRevenue(revenue)}>Add Revenue</Button>
	</div>
	<div class="expense md:w-1/4 sm:w-full">
		<label for="expenses">Expense</label>
		<input
			class="border px-1"
			type="number"
			id="expenses"
			min="1"
			max="1000000000000"
			bind:value={expense}
		/>
		<Button variant='error' onClick={() => addExpense(expense)}>Add Expense</Button>
	</div>
</div>
<div class="flex justify-center">
	<p>Balance: {balance}</p>
</div>
<div class="w-1/2 mx-auto">
	<HoverableTable records={recordsValue} />
	<Accordion title={'1'}><p>Creio em Deus Pai, Todo-poderoso, criador do Céu e da Terra e em Jesus Cristo, Seu único filho, nosso Senhor</p></Accordion>
	<Accordion title={'2'}><p>Que foi concebido pelo poder do Espírito Santo. Nasceu da Virgem Maria, padeceu sob Pôncio Pilatos.</p></Accordion>
	<Accordion title={'3'}><p>Foi crucificado, morto e sepultado. Desceu à mansão dos mortos, ressuscitou ao terceiro dia, subiu aos Céus, está sentado à direita de Deus Pai, Todo-poderoso, de onde há de vir a julgar os vivos e os mortos.</p></Accordion>
	<Accordion title={'4'}><p>Creio no Espírito Santo, na Santa Igreja Católica, na comunhão dos Santos, na remissão dos pecados, na ressurreição da carne, na vida eterna. Amém.</p></Accordion>	
	<Accordion title={'Disabled'} disabled />
	<Button
		variant="primary"
		onClick={() => {
			alertVariant = 'info';
			showNotification();
		}}>Show Alert</Button
	>
	<Button
		variant="success"
		onClick={() => {
			alertVariant = 'success';
			showNotification();
		}}>Success Alert</Button
	>
	<Button
		variant="warning"
		onClick={() => {
			alertVariant = 'warning';
			showNotification();
		}}>Warning Alert</Button
	>
	<Button
		variant="error"
		onClick={() => {
			alertVariant = 'error';
			showNotification();
		}}>Error Alert</Button
	>
	<Alert bind:this={alertComponent} time={3000} variant={alertVariant}>
		<p slot="message">Teste de notificação Svelte</p>
	</Alert>
	<br />
	<br />
	Avatar quadrado <Avatar /><br />
	Avatar redondo médio <Avatar variant="rounded-md" /><br />
	Avatar redondo <Avatar variant="rounded" /><br />
	Avatar Stack <AvatarStack /><br />
	Breadcrumb <Breadcrumb />
	<Button variant='primary'>Primary</Button>
	<Button variant='secondary'>Secondary</Button>
	<Button variant='success'>Success</Button>
	<Button variant='warning'>Warning</Button>
	<Button variant='error'>Error</Button>
	<Button variant='light'>Light</Button>
	<Button variant='dark'>Dark</Button>
	<Button variant='link'>Link</Button>
	<Button variant='outlined' color='slate-500' >Outlined</Button><br>
	Button Sizes: <br>
	<Button variant='primary' size='sm'>Small</Button>
	<Button variant='primary' size='md'>Medium</Button>
	<Button variant='primary' size='lg'>Large</Button><br><br>
	<Button block variant='primary'>Button Block</Button><br><br>
	<Button><i slot="icon-left" class="fa-regular fa-bookmark"/> Add to Bookmark</Button>
	<Button><i slot="icon-left" class="fa fa-cloud-arrow-up"/> Upload Files</Button>
	<Button variant="outlined" color="red-500"><i slot="icon-right" class="fa fa-arrows-rotate"/>Refresh</Button>
	<Button variant="link" color="red-500"><i slot="icon-right" class="fa fa-arrow-right"/> Read More</Button><br><br>

	Card <Card/><br>
	Chips <Chip/><br>
	Chips colors <br>
	<Chip color="blue-500">blue</Chip>
	<Chip color="red-500">red</Chip>
	<Chip color="green-500">green</Chip>
	<Chip color="amber-500">amber</Chip>
	<Chip color="pink-500">pink</Chip>
	<Chip color="indigo-500">indigo</Chip>
	<Chip color="purple-500">purple</Chip>
	<Chip color="teal-500">teal</Chip>
	<Chip color="cyan-500"><i slot="icon" class="fa fa-check"></i>cyan</Chip><br><br>
	<Chip><i slot="icon" class="fa fa-download"></i> downloads</Chip>
	<Chip dismissible>Dismissible</Chip>
	<Chip color="teal-800"><Avatar twclass="w-6 h-4" variant="rounded"></Avatar>Fulano da Silva</Chip>
	<br><br>
	<h1>Dialogs</h1> <br>
	<Button onClick={() => openDialog()}>Open Dialog</Button>
	<Dialog bind:this={dialogComponent} title="A Simple Dialog">
		<p >Dialog Body</p>
	</Dialog>
</div>

<style>

	.revenue input {
		color: green;
	}

	.expense input {
		color: red;
	}
</style>
