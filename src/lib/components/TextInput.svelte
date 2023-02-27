<!-- this is coded with tailwindcss -->
<script lang="ts">
	import { createEventDispatcher } from 'svelte';

	type InputStatus = 'default' | 'disabled' | 'invalid';
	type InputSize = 'small' | 'default' | 'field' | 'large';

	const dispatch = createEventDispatcher();

	export let status: InputStatus = 'default';
	export let size: InputSize = 'default';
	export let placeholder: string = '';
	export let value: string;
	export let disabled = false;
	export let invalid = false;

	function handleChange(event: Event) {
		dispatch('change', (event.target as HTMLInputElement).value);
	}
</script>

<!-- a input component with carbon design system -->
<!-- this input has disabled, invalid -->
<!-- and it has size of small, default, field, large -->

<input
	class="w-full h-full focus:outline-none
  {status === 'default' && 'bg-white text-gray-700'}
  {status === 'disabled' && 'bg-gray-100 text-gray-500'}
  {status === 'invalid' && 'bg-red-100 text-red-500'}
  {size === 'small' && 'px-2 py-1 text-sm'}
  {size === 'default' && 'px-3 py-2 text-base'}
  {size === 'field' && 'px-4 py-3 text-lg'}
  {size === 'large' && 'px-5 py-4 text-xl'}
  {disabled && 'opacity-50 cursor-not-allowed'}
  {invalid && 'border-2 border-red-500'}"
	on:change={handleChange}
	bind:value
	{placeholder}
	{disabled}
/>
