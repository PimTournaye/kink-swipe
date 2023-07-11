<script>
  import swipeStore from "$lib/stores.js";

  export let subject = {};

  let color = {
    color: '#000', // Default color black
    textColor: 'white', // Default text color white
  };

  $: {
    if (subject && subject.context) {
      color = getColor(subject.context);
    }
  }
  function getColor(subject) {
  // Create an object to store the colors.
  const colors = {
    "Feminist Theory": "#F06090",
    "Race Theory": "#660033",
    "Marxist Theory": "#DAA520",
    "Queer Theory": "#9ACD32",
    "Disability Theory": "#9D38BD",
  };

  // Check if the string is in the object.
  if (colors.hasOwnProperty(subject)) {
    // Return the color for the given subject.
    const color = colors[subject];

    // Determine whether the text should be white or black based on the color.
    const textColor = color === "#F06090" || color === "#DAA520" ? "white" : "black";

    // Return the color and text.
    return { color, textColor }};
}

</script>

<!-- svelte-ignore a11y-no-static-element-interactions -->
<div class="card" style="background-color: {color.color}">
  <!-- Card Details -->
  <div class="details">
    <div>
      <p id="context" style="color: {color.textColor}">{subject.context}</p>
      <p id="kink" style="color: {color.textColor}">{subject.kink}</p>
    </div>
    <p id="quote" style="color: {color.textColor}">"{subject.quote}"</p>
    <p id="instruction" style="color: {color.textColor}">{subject.swipeLeftRight}</p>
  </div>
</div>

<style lang="postcss">
  /* Tinder style cards */
  .card {
    @apply border-4 border-solid rounded-xl
 mx-2 px-8 py-8;
 height: 90vh;
  }

  .details {
    @apply flex flex-col justify-between h-full pb-40
  }

  #context {
    @apply text-5xl font-bold mb-4;
  }

  #kink {
    @apply text-3xl font-bold;
  }

  #quote {
    @apply text-8xl text-center italic;
  }

  #instruction {
    @apply text-3xl text-center font-light;
  }
</style>
