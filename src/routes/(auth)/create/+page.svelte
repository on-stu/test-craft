<script lang="ts">
	import Container from '../../../lib/components/Container.svelte';
	import Header from '../../../lib/components/create/Header.svelte';
	import TrueOrFalseCard from '../../../lib/components/problem/TrueOrFalseCard.svelte';
	import type { Problem } from '../../../lib/types/problemTypes';

	let title = '';

	let problems: Problem[] = [];
</script>

<Container>
	<Header {title} />
	<div class="w-full h-full flex justify-center p-4">
		<div class="max-w-[1024px] w-full flex justify-start">
			<TrueOrFalseCard problem={{ question: '문제', answer: true }} />
		</div>
	</div>
</Container>
