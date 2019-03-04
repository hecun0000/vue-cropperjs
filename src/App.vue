<template>
  <div id="app">
    <div class="tabs">
      <el-button-group>
        <el-button
          v-for="(item,index) in tabsData"
          :key="index.link" 
          :type="active==item.link?'primary':''"
          @click="toggleUploadType(item.link)"
        >{{item.text}}</el-button>
      </el-button-group>
    </div>

    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "app",
  data() {
    return {
      active: "common",
      tabsData: [
        {
          link: "common",
          text: "普通上传"
        },
        {
          link: "cropper",
          text: "裁剪上传"
        }
      ]
    };
  },
  watch: {
    $route: {
      handler(val) {
        this.active = val.name;
      },
      immediate: true
    }
  },
  methods: {
    toggleUploadType(link) {
      this.$router.push(link);
    }
  }
};
</script>
<style lang="less" scoped>
.tabs {
  margin: 20px 0;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
