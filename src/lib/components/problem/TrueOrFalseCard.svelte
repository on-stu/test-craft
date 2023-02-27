<script lang="ts">
	import type { TrueOrFalseProblem } from '../../types/problemTypes';

	export let problem: TrueOrFalseProblem;
</script>

<div class="flex w-full border border-neutral-300 p-4 box-border">
	<span>{problem.question}</span>
</div>
