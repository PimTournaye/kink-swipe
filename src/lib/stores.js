// src/stores/swipeStore.js
import { writable } from 'svelte/store';

const swipeStore = writable({
    left: [],
    right: [],
});

export default swipeStore;
