<template>

  <form @submit.prevent="form_submit">

    <div class="form_group">
      <label for="username"/>
      <input id="username"
             type="text"
             class="form_item"
             :class="$v.form.username.$error ? 'invalid' : ''"
             v-model.trim="form.username"
             placeholder="Имя"
      >
      <span class="invalid_text"
            v-if="$v.form.username.$dirty && !$v.form.username.required"
      >Обязательное поле</span>
    </div>

    <div class="form_group">
      <label for="phone"/>
      <input id="phone"
             type="text"
             class="form_item"
             :class="$v.form.phone.$error ? 'invalid' : ''"
             v-model.trim.lazy="form.phone"
             placeholder="+7 ___ ___-__-__"
             v-phone

      >
      <span class="invalid_text"
            v-if="$v.form.phone.$dirty && !$v.form.phone.required"
      >Обязательное поле</span>
    </div>


    <div class="form_group">
      <label for="address"/>
      <input
          id="address"
          type="text"
          class="form_item"
          :class="$v.form.address.$error ? 'invalid' : ''"
          v-model.trim="form.address"
          placeholder="Адрес"
      >
      <span class="invalid_text"
            v-if="$v.form.address.$dirty && !$v.form.address.required"
      >Обязательное поле</span>
    </div>

    <div>
      <button type="submit" class="form_btn">
        Отправить
      </button>
    </div>


  </form>

</template>

<script>
import {validationMixin} from 'vuelidate'
import {required} from 'vuelidate/lib/validators'

export default {
  mixins: [validationMixin],
  data() {
    return {
      form: {
        username: '',
        phone: '',
        address: ''
      },
    }
  },
  validations: {
    form: {
      username: {
        required,
      },
      phone: {
        required,

      },
      address: {
        required
      }
    }

  },
  methods: {
    form_submit() {
      this.$v.form.$touch()
      if (this.form.$error) {
        console.log('form error')
      }
    }
  },
}
</script>

<style scoped>
.form_group {
  width: 100%;
  margin-bottom: 16px;
}

.success {
  border: 1px solid lawngreen !important;
  outline: none;
}

.form_item {
  height: 50px;
  width: 100%;
  border-radius: 8px;
  border: 1px solid rgba(0, 0, 0, .3);
  padding: 15px 14px;
  outline: none;
}

.invalid {
  border: 1px solid red;

}

.form_btn {
  height: 50px;
  width: 100%;
  border-radius: 8px;
  background-color: #59606D;
  color: white;
  border: none;
  cursor: pointer;
}

.invalid_text {
  font-weight: 900;
  font-size: 8px;
  color: red;
  margin-top: 6px;
}

</style>
