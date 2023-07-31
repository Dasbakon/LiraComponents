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

	let revenue: number = 100;
	let expense: number = 50;
	let revenues = 0;
	let expenses = 0;
	let balance: number;
	let recordsValue: Array<Record>;
	let alertComponent: Alert;
	let alertVariant: string;

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
	<Accordion title={'1'} />
	<Accordion title={'2'} />
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
	<Button variant='outlined' color='' >Outlined</Button><br>
	Button Sizes: <br>
	<Button variant='primary' size='sm'>Small</Button>
	<Button variant='primary' size='md'>Medium</Button>
	<Button variant='primary' size='lg'>Large</Button><br><br>
	<Button block variant='primary'>Button Block</Button><br><br>
	<Button><i slot="icon" class="fa fa-bookmark"/> Add to Bookmark</Button>
</div>

<style>

	.revenue input {
		color: green;
	}

	.expense input {
		color: red;
	}
</style>
