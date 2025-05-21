import { ref } from "vue";

export function useOverlay() {
    const isOverlay = ref(false);

    function showOverlay() {
        isOverlay.value = true;
    }

    function hideOverlay() {
        isOverlay.value = false;
    }

    return {
        isOverlay,
        showOverlay,
        hideOverlay
    };
}