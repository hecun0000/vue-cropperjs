<template>
  <div class="file-box" v-if="getFileList.length>0">
    <p class="file-title">文件列表</p>
    <ul class="file-list">
      <li class="item" v-for="(item,index) in getFileList" :key="index">
        <img :src="item" alt srcset>
        <div class="img-info-box">
          <span class="img-src">{{item}}</span>
          <span class="btn-copy" @click="copySrc(item)">复制</span>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>

import { mapGetters} from "vuex";
export default {
  name: "fileList",
  computed: {
    ...mapGetters(["getFileList"])
  },
  methods: {
    copySrc(item) {
      let oInput = document.createElement("input");
      oInput.value = item;
      document.body.appendChild(oInput);
      oInput.select(); // 选择对象
      document.execCommand("Copy"); // 执行浏览器复制命令
      oInput.className = "oInput";
      oInput.style.display = "none";
      this.$message.success('复制成功')
    }
  }
};
</script>
<style lang="less" scoped>
.file-box {
  max-width: 800px;
  margin: 0 auto;
}

.file-box .file-title {
  font-size: 16px;
  color: #3eaf7c;
  text-align: center;
  line-height: 32px;
}

.file-box .item {
  height: 80px;
  border: 1px solid #eee;
  border-left: 0;
  border-right: 0;
  margin-bottom: 10px;
  display: flex;
  align-items: center;
}

.file-box .item img {
  width: 60px;
  height: 60px;
  display: inline-block;
}

.file-box .img-src {
  font-size: 14px;
  color: #666;
}

.file-box .btn-copy {
  color: #3eaf7c;
  cursor: pointer;
}

.file-box .btn-copy:hover {
  color: #319065;
}

.img-info-box {
  flex: 1;
  display: flex;
  padding: 0 10px;
  justify-content: space-between;
}
</style>
