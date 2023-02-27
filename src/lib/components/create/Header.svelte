<script lang="ts">
	import Button from '../Button.svelte';
	import TextInput from '../TextInput.svelte';

	export let title: string;
</script>

<div class="w-full bg-black p-4 box-border shrink-0 flex justify-between">
	<div class="w-[500px]">
		<TextInput bind:value={title} status="default" size="field" placeholder="제목을 입력하세요" />
	</div>
	<div class="flex gap-x-2">
		<div class="w-[100px]">
			<Button status="tertiary">미리보기</Button>
		</div>
		<div class="w-[100px]">
			<Button>저장</Button>
		</div>
	</div>
</div>
