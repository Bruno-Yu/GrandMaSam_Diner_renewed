<template>
  <PageLoading loader="bars" :active="isLoading" :can-cancel="true" :is-full-page="false" />
  <ModalMessage ref="modalMessage" />
  <div class="container">
    <div class="row justify-content-center">
      <h1 class="h3 my-5 font-weight-normal text-center fw-bolder">榮譽會員登入處</h1>
      <div class="col-8 col-lg-5 mb-5">
        <form id="form" class="form-signin" @submit.prevent="login">
          <div class="form-floating mb-3">
            <input
              v-model="username"
              type="email"
              class="form-control secure-input"
              id="username"
              readonly
              placeholder="name@example.com"
              required
              @contextmenu.prevent
            />
            <label for="username">Email address</label>
          </div>
          <div class="form-floating">
            <input
              v-model="password"
              type="password"
              class="form-control secure-input"
              readonly
              id="password"
              placeholder="Password"
              required
              @contextmenu.prevent
            />
            <label for="password">Password</label>
          </div>
          <button
            class="btn btn-lg btn-warning fw-bold shadow w-100 mt-3"
            data-name="loginBtn"
            type="submit"
          >
            登入
          </button>
        </form>
        <div class="container text-center mt-3">
          <p class="text-muted fw-bold">只有會員才能登入呦! 如果您也想登入</p>
          <p class="text-muted fw-bold">
            請立即點<router-link to="/about" class="link-danger fw-bold">這邊</router-link
            >並斗內作者
          </p>
        </div>
      </div>
    </div>
    <p class="mt-5 mb-1 text-center font-Noto fw-500">&copy; 2022~∞ - 八角學堂向以下人員致敬</p>
    <p class="mb-3 text-muted text-center font-Noto fw-500">
      辛苦的卡老師、Ray與其他同期的駁二裝置藝術們
    </p>
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue';
import { useRouter } from 'vue-router';
import axios from 'axios';
const router = useRouter();
const modalMessage = ref(null);
const isLoading = ref(true);
const username = ref('brunoyu2022@gmail.com');
const password = ref('jPe5zX6PeTgkEZs');

const login = async () => {
  isLoading.value = true;
  const user = { username: username.value, password: password.value };

  try {
    const response = await axios.post(`${process.env.VUE_APP_API}/admin/signin`, user);
    const { token, expired } = response.data;
    document.cookie = `hexToken=${token};expires=${new Date(expired)};`;
    isLoading.value = false;
    modalMessage.value.openModal(true, 'login');
    // 可以在這裡添加登錄成功後的路由導航
    router.push('/admin');
  } catch (error) {
    isLoading.value = false;
    modalMessage.value.openModal(false, 'login');
  }
};

onMounted(() => {
  setTimeout(() => {
    isLoading.value = false;
  }, 3000);
});
</script>

<style lang="scss" scoped>
.secure-input {
  user-select: none;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
}
</style>
