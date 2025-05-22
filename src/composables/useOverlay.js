import { ref, onMounted, onUnmounted } from "vue";

export function useOverlay() {
    const isOverlay = ref(false);

    function onKeyUp(event) {
        if (event.key === "Escape") {
            hideOverlay();
        }
    }

    function showOverlay() {
        isOverlay.value = true;
    }

    function hideOverlay() {
        isOverlay.value = false;
    }

    onMounted(() => {
        document.addEventListener("keyup", onKeyUp);
    });

    onUnmounted(() => {
        document.removeEventListener("keyup", onKeyUp);
    });

    return {
        isOverlay,
        showOverlay,
        hideOverlay
    };
}