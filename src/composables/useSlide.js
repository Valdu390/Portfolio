import { ref } from "vue";

export function useSlide() {
    const index = ref(0)

    function previous(images) {
        const size = images.length;
        if (index.value === 0) index.value = size - 1;
        else index.value -= 1;
    }

    function next(images) {
        const size = images.length;
        if (index.value === size - 1) index.value = 0;
        else index.value += 1;
    }

    return { index, previous, next };
}