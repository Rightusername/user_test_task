<template>
  <div class="app-main">
    <header>
      <h1>
        Users
      </h1>
      <div class="header-controls">
        <div class="search-wrap" :class="{ closed: !isOpenSearch }">
          <div class="open-search" @click="openSearch">
            <img src="./../../assets/images/search.svg" svg-inline alt="" />
          </div>
          <input
            ref="searchInput"
            v-model="searchQuery"
            type="text"
            class="t-input"
            placeholder="Search by name"
          />
          <div class="close-search" @click="closeSearch">
            <img src="./../../assets/images/cancel.svg" svg-inline alt="" />
          </div>
        </div>
        <div class="primary-btn" @click="createUser">Create User</div>
      </div>
    </header>

    <div v-if="!users || filteredUsers.length == 0" class="no-users">
      <span v-show="!usersLoaded">Loading...</span>
      <span v-show="usersLoaded">No users</span>
    </div>
    <div class="users-list">
      <div v-for="item in filteredUsers" :key="item.id" class="user">
        <div class="controls">
          <div class="edit-user-btn" @click.stop.prevent="editUser(item)">
            <img
              src="./../../assets/images/edit-button.svg"
              svg-inline
              alt=""
            />
          </div>
          <div class="remove-user-btn" @click.stop.prevent="removeUser(item)">
            <img src="./../../assets/images/cancel.svg" svg-inline alt="" />
          </div>
        </div>
        <h4>
          Name
        </h4>
        <div class="name user-info-field">{{ item.name }}</div>
        <h4>
          Email
        </h4>
        <div class="email user-info-field">{{ item.email }}</div>
        <h4>
          Street
        </h4>
        <div class="street user-info-field">{{ item.address.street }}</div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import cloneDeep from 'lodash-es/clonedeep';

import UserCreateModal from 'app/components/modals/UserCreateModal.vue';
import UserEditModal from 'app/components/modals/UserEditModal.vue';
import ConfrimModal from 'app/components/modals/ConfirmModal.vue';

export default {
  name: 'Main',
  components: {},
  data() {
    return {
      usersLoaded: false,
      searchQuery: '',

      isOpenSearch: false,
    };
  },
  computed: {
    ...mapGetters(['users']),
    filteredUsers() {
      if (this.searchQuery.length == 0) {
        return this.users;
      } else {
        let reg = new RegExp(this.searchQuery, 'gi');
        return this.users.filter(user => user.name.match(reg));
      }
    },
  },

  created() {
    this.$store.dispatch('FETCH_USERS').then(() => {
      this.usersLoaded = true;
    });
  },

  beforeDestroy() {},

  mounted() {},

  methods: {
    createUser() {
      this.$modal.show(
        UserCreateModal,
        {},
        {
          transition: 'fade',
        }
      );
    },

    removeUser(user) {
      this.$modal.show(
        ConfrimModal,
        {
          data: {
            title: 'Remove user',
            text: 'Are you sure you want to remove this user?',
            btns: {
              confirm: {
                title: 'Remove',
                callback: () => {
                  this.$store.dispatch('USER_REMOVE', user);
                },
              },
            },
          },
        },
        {
          transition: 'fade',
        }
      );
    },

    editUser(user) {
      this.$modal.show(
        UserEditModal,
        {
          user: cloneDeep(user, { deep: true }),
        },
        {
          transition: 'fade',
        }
      );
    },

    openSearch() {
      this.isOpenSearch = true;
      setTimeout(() => {
        this.$refs.searchInput.focus();
      }, 200);
    },
    closeSearch() {
      this.isOpenSearch = false;
      this.searchQuery = '';
    },
  },
};
</script>

<style lang="scss" scoped>
@import '~styles/_mixins.scss';
@import '~styles/media.scss';

.app-main {
  max-width: 1100px;
  margin: 0 auto;
  position: relative;
  transition: none;
  height: 100%;
  padding-bottom: 20px;
  box-sizing: border-box;

  header {
    height: 100px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    .header-controls {
      display: flex;
      align-items: center;

      .search-wrap {
        margin-right: 20px;
        position: relative;
        input {
          width: 200px;
          padding: 7px 30px;
          transition: 0.2s ease;
        }

        .open-search {
          position: absolute;
          cursor: pointer;
          z-index: 1;
          top: 0px;
          left: 0px;
          width: 30px;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: 0.2s ease;

          svg {
            width: 16px;
            height: auto;
            path {
              fill: rgb(136, 136, 136);
            }
          }
        }

        .close-search {
          position: absolute;
          cursor: pointer;
          top: 0px;
          right: 0px;
          width: 30px;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: 0.2s ease;

          svg {
            width: 10px;
            height: auto;
            path {
              fill: rgb(136, 136, 136);
            }
          }
        }

        &.closed {
          input {
            opacity: 0;
            width: 30px;
            padding-right: 0;
          }

          .close-search {
            opacity: 0;
            pointer-events: none;
          }
        }
      }
    }
  }

  .no-users {
    text-align: center;
    margin-top: 40px;
    color: var(--input-border-color);
    font-size: 14px;
  }

  .users-list {
    display: grid;
    grid-auto-rows: max-content;
    gap: 20px;
    // display: flex;
    // flex-wrap: wrap;
    overflow: auto;
    height: calc(100% - 100px);
    @include scrollbar(2px);

    @include media(
      (
        grid-template-columns: (
          all: 1fr,
          min-400: 1fr 1fr,
          min-640: 1fr 1fr 1fr,
          min-900: 1fr 1fr 1fr 1fr,
        ),
      )
    );

    .user {
      width: 100%;
      height: 260px;
      padding: 20px;
      overflow: hidden;
      background: var(--sec-btn-bg);
      border: 1px solid var(--sec-btn-border-color);
      box-sizing: border-box;
      border-radius: 8px;
      position: relative;

      h4 {
        margin: 8px 0;
        font-size: 14px;
      }

      .user-info-field {
        font-size: 13px;
      }

      .controls {
        position: absolute;
        top: 7px;
        right: 7px;

        display: flex;
        align-items: center;
        justify-content: flex-end;
        .remove-user-btn {
          display: flex;
          cursor: pointer;

          padding: 6px;

          svg {
            width: 12px;
            height: auto;
          }
        }

        .edit-user-btn {
          display: flex;
          cursor: pointer;

          padding: 6px;

          svg {
            width: 15px;
            height: auto;

            path {
              fill: rgb(136, 136, 136);
            }
          }
        }
      }
    }
  }
}
</style>
