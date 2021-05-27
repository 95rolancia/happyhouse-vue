<template>
  <div>
    <div class="user-menu">
      <font-awesome-icon :icon="['fas', 'user']" />
      <font-awesome-icon :icon="['fas', 'chevron-down']" />
      <div class="dropdown-content">
        <button class="user-update-btn" @click="toggleUserUpdateModal">회원 정보</button>
        <button
          v-if="user.user_admin === '1'"
          class="admin-add-house-btn"
          @click="toggleHouseAddModal"
        >
          매물 추가
        </button>
        <button class="user-logout-btn" @click="handleLogout">로그 아웃</button>
      </div>
    </div>
    <Modal v-if="showUserUpdateModal" @close="toggleUserUpdateModal">
      <template slot="header">
        <h1>회원 수정</h1>
        <font-awesome-icon :icon="['fas', 'window-close']" @click="toggleUserUpdateModal" />
      </template>
      <UserUpdateForm @close="toggleUserUpdateModal" />
    </Modal>

    <Modal v-if="showHouseAddModal" @close="toggleHouseAddModal">
      <template slot="header">
        <h1>매물 등록</h1>
        <font-awesome-icon :icon="['fas', 'window-close']" @click="toggleHouseAddModal" />
      </template>
      <HouseAddForm @close="toggleHouseAddModal" />
    </Modal>
  </div>
</template>
<script>
import Modal from "@/components/Modal/Modal.vue";
import UserUpdateForm from "@/components/UserMenu/UserUpdateForm.vue";
import HouseAddForm from "@/components/House/HouseAddForm.vue";
import { mapActions, mapGetters } from "vuex";
export default {
  components: { Modal, UserUpdateForm, HouseAddForm },
  data() {
    return {
      showUserUpdateModal: false,
      showHouseAddModal: false,
    };
  },
  methods: {
    ...mapActions(["logout"]),
    handleLogout() {
      alert("로그아웃이 완료되었습니다.");
      this.logout();
      this.$router.push("/");
    },
    toggleUserUpdateModal() {
      this.showUserUpdateModal = !this.showUserUpdateModal;
    },
    toggleHouseAddModal() {
      console.log("toggle");
      this.showHouseAddModal = !this.showHouseAddModal;
    },
  },
  computed: {
    ...mapGetters(["user"]),
  },
};
</script>
<style scoped>
.user-menu {
  color: whitesmoke;
  font-size: 1.5rem;
  margin-right: 1em;
  border: 0.5px solid whitesmoke;
  border-radius: 1em;
  cursor: pointer;
  transition: all 200ms ease-out;
  /* position: relative; */
}

.user-menu:hover {
  color: orange;
  background-color: whitesmoke;
}

.fa-user,
.fa-chevron-down {
  margin: 0.5em;
}

.dropdown-content {
  position: absolute;
  /* z-index: 3; */
  display: none;
  margin-left: 0.2em;
  background-color: #f9f9f9;
  border-radius: 0.2em;
}

.user-menu:hover .dropdown-content {
  display: block;
}

.user-update-btn,
.user-logout-btn,
.admin-add-house-btn {
  display: flex;
  padding: 0.5em 1em;
}
.user-update-btn:hover,
.user-logout-btn:hover,
.admin-add-house-btn:hover {
  color: whitesmoke;
  background-color: darkmagenta;
}
</style>
