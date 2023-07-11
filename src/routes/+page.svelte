<script>
  import { fade } from 'svelte/transition';
  import Card from '$lib/Card.svelte';
  import Results from '$lib/Results.svelte';
  import swipeStore from '$lib/stores.js';
  import { subjects } from '$lib/subjects';
  import { tick } from 'svelte';

  let currentSubject = subjects[0];
  let showCard = true;

  let allSwiped = false

  // Swipe handlers
  async function handleSwipe(direction) {
    showCard = false;
    await tick(); // wait for the card to fade out

    if (direction === "left") {
      // Update the 'left' array in swipeStore
      swipeStore.update((store) => ({
        ...store,
        left: [...store.left, currentSubject],
      }));
    } else if (direction === "right") {
      // Update the 'right' array in swipeStore
      swipeStore.update((store) => ({
        ...store,
        right: [...store.right, currentSubject],
      }));
    }
    // Remove current subject from subjects array
    subjects.shift();

    // Check if we have any cards left
    if (subjects.length === 0) {
      // If not, replace main content with results
      allSwiped = true;
    } else {
      // If so, get the next card
      currentSubject = subjects[0];
    }

    showCard = true;
  }
</script>
  
{#if allSwiped}
  <div transition:fade={{duration: 500}}>
    <Results left={$swipeStore.left} right={$swipeStore.right}/>
  </div>
  {:else if subjects.length !== 0}
<main>
  <button id="left" class="bg-red-600 text-white"  on:click={() => handleSwipe('left')}>Swipe Left</button>
  {#if showCard}
    <div transition:fade={{duration: 500}}>
      <Card subject={currentSubject} />
    </div>
  {/if}
  <button id="right" class="bg-green-600 text-white" on:click={() => handleSwipe('right')}>Swipe Right</button>
</main>
{/if}

<style lang="postcss">
  main {
    @apply flex flex-row justify-center h-full my-3
  }

  button {
    @apply w-1/3 h-20 rounded-lg
  }
</style>
