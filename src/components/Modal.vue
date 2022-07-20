<script setup lang="ts">
const props = defineProps({
  show: Boolean,
})
defineEmits(['close'])
</script>

<template>
  <Transition name="modal">
    <div v-if="props.show" class="modal-mask">
      <div class="modal-wrapper">
        <div class="modal-container">
          <div class="modal-header">
            <button class="modal-button-close" @click="$emit('close')">
              X
            </button>
          </div>
          <div class="modal-content">
            <div class="modal-content-img" />
            <div class="modal-content-wrapper">
              <h2>Gratulujemy!</h2>
              <p>Test końcowy został zaliczony. Możesz już pobrać swój Certyfikat!</p>
              <button class="modal-button-confirm" @click="$emit('close')">
                Pobierz certyfikat za to szkolenie!
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Transition>
</template>

<style>
.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: table;
  transition: opacity 0.3s ease;
}

.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
}

.modal-container {
  max-width: 1300px;
  margin: 0px auto;
  padding: 20px 30px;
  background-color: #fff;
  border-radius: 20px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
  transition: all 0.3s ease;
  display: flex-column;
}

.modal-header{
  display: flex;
  justify-content: flex-end;
}

.modal-content {
  display: flex;
  margin: 1em 3em;
}

.modal-content-img {
  width: 20em;
}

.modal-content-wrapper {
  display: flex-row;
}

.modal-button-confirm {
  background-color: #dff0e1;
  border-radius: 28px;
  border: 1px solid #e5e5e5;
  display: inline-block;
  cursor: pointer;
  color: #479e77;
  font-size: 17px;
  padding: 16px 31px;
  text-decoration: none;
  text-shadow: 0px 1px 0px #a4d0a2;
}

.modal-enter-from {
  opacity: 0;
}

.modal-leave-to {
  opacity: 0;
}

.modal-enter-from .modal-container,
.modal-leave-to .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}
</style>
