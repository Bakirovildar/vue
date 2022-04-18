export default {
    mounted(el, binding) {
        console.log(el, binding)
        if(binding.modifiers.color) {
            el.style.color = binding.value
        } else {
            el.style[binding.arg] = binding.value
        }
    }
} 