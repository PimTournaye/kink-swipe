<script>
  import swipeStore from "./stores";

  export let lefts = []; // List of swipe lefts kinks
  export let rights = []; // List of swipe rights kinks

  // Get results from swipeStore
  $: {
    lefts = $swipeStore.left;
    rights = $swipeStore.right;

    console.log(lefts);
  }

</script>

<div class="results">
  <div class="column">
    <h2>Swipe Lefts</h2>
    <ul>
      {#each lefts as left}
        <li>{left.kink}</li>
      {/each}
    </ul>
  </div>

  <div class="column border-r-black">
    <h2>Swipe Rights</h2>
    <ul>
      {#each rights as right}
        <li>{right.kink}</li>
      {/each}
    </ul>
  </div>
</div>

<style lang="postcss">
  .results {
    @apply w-full mx-16 my-8 flex flex-row justify-between;
  }

  ul {
    @apply font-medium text-lg flex flex-col;
  }

  li {
    @apply my-2;
  }

  .column {
    width: 45%;
    @apply flex flex-col
  }

  h2 {
    @apply text-3xl font-bold mb-4;
  }
</style>