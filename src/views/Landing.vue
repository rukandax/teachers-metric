<template>
  <div class="container">
    <div
      class="p-3 py-4 border-bottom d-flex align-items-center justify-content-between"
    >
      <h2 class="logo mb-0 d-flex align-items-center">
        <img class="mr-3" :src="`${$publicPath}images/logo.png`" />
        SMK ASSALAM DEPOK
      </h2>
      <div>
        <div class="btn btn-success ml-3">Isi Angket</div>
        <div class="btn btn-warning ml-3">Riwayat Angket</div>
      </div>
    </div>
    <div class="row">
      <div
        v-for="i in 6"
        :key="`teacher-${i}`"
        class="col-lg-4 p-4 text-center"
      >
        <div class="border rounded-lg p-4">
          <div
            class="profile-picture border rounded-circle mx-auto overflow-hidden"
          >
            <img :src="`${$publicPath}profile/default.png`" />
          </div>
          <h5 class="mt-3">Nama Guru</h5>
          <div class="mt-3">
            <div class="profile-stars--empty mx-auto">
              <div class="profile-stars--fill"></div>
            </div>
          </div>
          <div class="mt-2 text-muted">
            <small><em>5.0 Points - 1000 Feedbacks</em></small>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  mounted() {
    console.log(this.$publicPath);
  }
};
</script>

<style lang="scss" scoped>
.logo {
  img {
    height: 40px;
  }
}

.profile-picture {
  height: 125px;
  width: 125px;

  img {
    width: 100%;
  }
}

[class*="profile-stars--"] {
  height: 20px;
  background-repeat: repeat-x;
  background-size: contain;
}

.profile-stars--empty {
  width: 155px;
  background-image: url("/images/star-empty.png");
}

.profile-stars--fill {
  width: 155px;
  background-image: url("/images/star-fill.png");
}
</style>
