<template>
  <PageLoading
    loader="bars"
    :active="isLoading"
    :can-cancel="true"
    :is-full-page="false"
  ></PageLoading>
  <div class="container gx-0 bg-black rounded border border-body border-3">
    <div class="row row-cols-1 row-cols-lg-2">
      <div class="col ge-0">
        <div class="container News-banner" />
      </div>
      <div class="col gs-0">
        <div class="container d-flex align-items-center h-100 p-3 bg-black">
          <div class="container mb-2 p-4 rounded h-50 d-flex align-items-center bg-black">
            <figure class="text-center text-lg-start">
              <blockquote class="blockquote">
                <p class="fs-1 text-light font-Noto fw-bold">
                  <i> 我們堅信合意信教的正確性，而一想到那些無辜受驚的民眾，我還是會感到難過!</i>
                </p>
              </blockquote>
              <figcaption class="blockquote-footer font-Noto fs-5 text-lg-end">
                2010/5/28 <cite title="Source Title">拜燈教主</cite>
              </figcaption>
            </figure>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="container gx-0 mt-2 mb-3 mb-lg-4 News-title rounded border border-body border-5">
    <div class="row">
      <h2 class="fs-1 my-3 font-Noto fw-600 text-light text-center">稗史與公告</h2>
    </div>
  </div>
  <div class="container gx-0 bg-body shadow-sm rounded">
    <div class="row row-cols-1 row-cols-lg-3 g-4">
      <template v-for="article in articles" :key="article.id">
        <div class="col" v-if="article.isPublic">
          <RouterLink :to="`/userArticle/${article.id}`" v-if="article.isPublic" class="btn">
            <div class="card shadow mb-1 p-1">
              <!-- 主圖替換 -->
              <img
                v-if="article.id == '-N-tl8D5WkaIJ1frNRRB'"
                src="@/assets/images/Godsman.jpg"
                class="card-img-top"
                alt="GodsMan"
              />
              <img
                v-if="article.id == '-N-qk3J_UqL6i1RH6BRz'"
                src="@/assets/images/Brush.jpg"
                class="card-img-top"
                alt="Brush"
              />
              <img
                v-if="article.id == '-N-qjhkvfCqcb-6Mx1G-'"
                src="@/assets/images/Egg.jpg"
                class="card-img-top"
                alt="Egg"
              />
              <img
                v-if="article.id == '-N-qjTKf-jAcAT4ND249'"
                src="@/assets/images/TombSweeping.jpg"
                class="card-img-top"
                alt="TombSweeping"
              />
              <img
                v-if="article.id == '-N-qjOg2fvc8GOSgmkrN'"
                src="@/assets/images/Wallet.jpg"
                class="card-img-top"
                alt="Wallet"
              />
              <img
                v-if="article.id == '-N-qjALHXwnpNgIrpokr'"
                src="@/assets/images/MoneyIsTheProblem.jpg"
                class="card-img-top"
                alt="MoneyIsTheProblem"
              />
              <div class="card-body text-start">
                <h4 class="card-title font-Noto fw-500">
                  {{ article.title }}
                </h4>
                <div
                  class="text-start font-Noto text-muted"
                  style="max-height: 3rem; overflow: hidden"
                  v-html="article.description"
                ></div>
              </div>
            </div>
          </RouterLink>
        </div>
      </template>
    </div>
  </div>
  <div class="container gx-0 mt-4 bg-dark">
    <div class="row row-cols-1 row-cols-lg-2 my-1">
      <div class="col col-lg-6">
        <div class="container bg-dark p-sm-5 rounded">
          <div class="row row-cols-1">
            <div class="col m-auto">
              <h2
                class="mt-5 mb-4 text-nowrap text-warning text-center text-sm-start font-Noto fw-600"
              >
                立即訂閱
              </h2>
              <p class="fs-6 text-light text-sm-nowrap font-Noto fw-400">
                在了解了本集團歷史與公開資訊後，是否讓您對本集團也感到有興趣了呢?
              </p>
              <p class="fs-6 text-light text-sm-nowrap font-Noto fw-400">
                馬上註冊您的信箱，當作者錢不夠用時，會第一時間聯繫您!
              </p>
              <VForm ref="form" v-slot="{ errors }" @submit="subscribe">
                <div class="input-group mb-auto mx-auto">
                  <VField
                    id="email"
                    name="email"
                    type="email"
                    :class="{ 'is-invalid': errors['email'] }"
                    class="form-control"
                    placeholder="馬上輸入信箱取得通知"
                    style="max-width: 50rem"
                    v-model="form.email"
                    rules="email|required"
                  ></VField>
                  <button
                    class="btn btn-primary font-Noto fw-600"
                    type="submit"
                    :disabled="isLoading"
                  >
                    訂閱
                    <div v-if="isLoading" class="spinner-border spinner-border-sm text-light"></div>
                  </button>

                  <ErrorMessage name="email" class="invalid-feedback fs-5"></ErrorMessage>
                </div>
              </VForm>
            </div>
          </div>
        </div>
      </div>
      <div class="d-none d-sm-grid col col-lg-6">
        <div class="userArticles-footer-banner" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      articles: [],
      isLoading: false,
      isNew: false,
      tempArticle: {},
      form: {
        email: '',
      },
    };
  },
  methods: {
    subscribe() {
      this.isLoading = true;
      setTimeout(this.subscribeCallback, 1000);
    },
    getArticles(page = 1) {
      const api = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/articles?page=${page}`;
      this.isLoading = true;
      this.$http
        .get(api)
        .then((response) => {
          this.articles = response.data.articles;
          this.pagination = response.data.pagination;
          this.isLoading = false;
        })
        .catch((error) => {
          this.isLoading = false;
          this.$frontHttpMessageState(error.response, '公告截取失敗');
        });
    },
  },
  created() {
    this.getArticles();
  },
};
</script>
