<template>
    <div class="form-field">
        <label :for="id">
            {{ label }}
            <input
                    :type="type"
                    :id="id"
                    :placeholder="placeholder"
                    :value="value"
                    @input="$emit('update:modelValue', $event.target.value)"
            />
        </label>
    </div>
</template>

<script>
export default {
    name: "MyInput",

    props: {
        id:  [String,Number],
        label: String,
        placeholder: String,
        value: {
            type: [String, Number],
            default: "",
        },
        type: String
    },
};
</script>

<style scoped>
.form-field {
  border-radius: 8px;
  border: 1px solid gray;
  padding: 0.5em 1em;
}

label {
  color: gray;
  font-size: 1rem;
}

input {
  width: 100%;
  display: block;
  outline: none;
  border: none;
  padding: 0.3em 0;
  color: #111111;
  font-size: 1rem;
}


</style>