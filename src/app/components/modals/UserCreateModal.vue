<template>
  <div
    class="app-user-create-modal t-modal"
    data-close="true"
    @mousedown="onClose"
  >
    <div class="modal">
      <header>
        <div class="title">Create User</div>
        <div class="close-btn" data-close="true" @click="close">
          <svg
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            x="0px"
            y="0px"
            viewBox="0 0 512 512"
            style="enable-background:new 0 0 512 512;"
            xml:space="preserve"
          >
            <g>
              <g>
                <path
                  d="M505.943,6.058c-8.077-8.077-21.172-8.077-29.249,0L6.058,476.693c-8.077,8.077-8.077,21.172,0,29.249
                C10.096,509.982,15.39,512,20.683,512c5.293,0,10.586-2.019,14.625-6.059L505.943,35.306
                C514.019,27.23,514.019,14.135,505.943,6.058z"
                />
              </g>
            </g>
            <g>
              <g>
                <path
                  d="M505.942,476.694L35.306,6.059c-8.076-8.077-21.172-8.077-29.248,0c-8.077,8.076-8.077,21.171,0,29.248l470.636,470.636
                c4.038,4.039,9.332,6.058,14.625,6.058c5.293,0,10.587-2.019,14.624-6.057C514.018,497.866,514.018,484.771,505.942,476.694z"
                />
              </g>
            </g>
          </svg>
        </div>
      </header>
      <main>
        <input
          ref="name"
          v-model="user.name"
          type="text"
          required
          class="t-input name-input"
          placeholder="Name"
        />
        <div v-show="errors.name" class="error">{{ errors.name }}</div>

        <input
          ref="email"
          v-model="user.email"
          type="email"
          required
          class="t-input email-input"
          placeholder="Email"
        />
        <div v-show="errors.email" class="error">{{ errors.email }}</div>

        <input
          ref="street"
          v-model="user.address.street"
          type="text"
          required
          class="t-input street-input"
          placeholder="Street"
        />
        <div v-show="errors.street" class="error">{{ errors.street }}</div>

        <div class="controls">
          <div class="controls-btn cancel" @click="close">
            Cancel
          </div>
          <div class="controls-btn confirm" @click="confirm">
            Save
          </div>
        </div>
      </main>
    </div>
  </div>
</template>

<script>

export default {
  name: 'UserCreateModal',
  components: {},

  data() {
    return {
      errors: {
        name: null,
        email: null,
        street: null,
      },
      user: {
        name: '',
        username: '',
        email: '',
        address: {
          street: '',
          suite: '',
          city: '',
          zipcode: '',
          geo: {
            lat: '',
            lng: '',
          },
        },
        phone: '',
        website: '',
        company: {
          name: '',
          catchPhrase: '',
          bs: '',
        },
      },
    };
  },
  computed: {},
  created() {},
  mounted() {
    setTimeout(() => {
      this.$refs.name.focus();
    }, 100);
  },
  methods: {
    close() {
      this.$emit('close');
    },
    onClose(e) {
      if (e.target.dataset.close) {
        this.close();
      }
    },

    validate() {
      let isValid = true;

      if (this.user.name.length == 0) {
        isValid = false;
        this.errors.name = 'Name is required';
      } else {
        this.errors.name = '';
      }

      if (this.user.email.length == 0) {
        isValid = false;
        this.errors.email = 'Email is required';
      } else {
        if (!this.user.email.match(/.{1,}@.{1,}/)) {
          isValid = false;
          this.errors.email = 'Wrong email';
        } else {
          this.errors.email = '';
        }
      }

      if (this.user.address.street.length == 0) {
        isValid = false;
        this.errors.street = 'Address street is required';
      } else {
        this.errors.street = '';
      }

      return isValid;
    },

    confirm() {
      if (this.validate()) {
        this.$store.dispatch('USER_ADD', this.user);
        this.close();
      }
    },
  },
};
</script>

<style lang="scss" scoped>
@import '~styles/_mixins.scss';

.app-user-create-modal {
  .modal {
    width: 440px;
    height: auto;
  }
  input {
    height: 35px;
    margin-bottom: 20px;
  }

  .error {
    color: #ff405e;
    font-size: 12px;
    height: 22px;
    padding-top: 5px;
    margin-top: -18px;
  }

  main {
    .name-input {
      margin-bottom: 20px;
    }

    .section-title {
      display: flex;
      justify-content: space-between;
      align-items: center;
      .add-btn {
        width: 26px;
        height: 26px;
        background: var(--sec-btn-bg);
        border: 1px solid var(--sec-btn-border-color);
        cursor: pointer;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;

        svg {
          width: 13px;
          height: auto;
        }
      }
    }

    p {
      font-size: 13px;
      line-height: 2.2;
      margin: 0;
      margin-bottom: 10px;
    }
  }
}
</style>
