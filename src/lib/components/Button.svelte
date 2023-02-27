<!-- this button should be made with tailwind css -->
<script lang="ts">
	import { createEventDispatcher } from 'svelte';

	type ButtonStatus = 'primary' | 'secondary' | 'tertiary' | 'danger';
	type ButtonSize = 'small' | 'default' | 'field' | 'large';

	const dispatch = createEventDispatcher();

	export let status: ButtonStatus = 'primary';
	export let size: ButtonSize = 'default';
	export let disabled = false;

	function handleClick() {
		dispatch('click');
	}
</script>

<!-- a button components with carbon design system -->
<!-- this button has status of primary, secondary, tertiary, danger -->
<!-- and it has size of small, default, field, large -->

<button
	class="w-full h-full flex items-center justify-center focus:outline-none
  {status === 'primary' && 'bg-blue-500 text-white'}
  {status === 'secondary' && 'bg-gray-200 text-gray-700'}
  {status === 'tertiary' && 'bg-gray-100 text-gray-700'}
  {status === 'danger' && 'bg-red-500 text-white'}
  {size === 'small' && 'px-2 py-1 text-sm'}
  {size === 'default' && 'px-3 py-2 text-base'}
  {size === 'field' && 'px-4 py-3 text-lg'}
  {size === 'large' && 'px-5 py-4 text-xl'}
  {disabled && 'opacity-50 cursor-not-allowed'}"
	on:click={handleClick}
	{disabled}
>
	<slot />
</button>
