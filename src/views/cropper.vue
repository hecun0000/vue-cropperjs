<template>
  <div class="box">
    <el-upload
      class="upload-demo"
      drag
      action=" "
      :show-file-list="false"
      :auto-upload="false"
      :on-change="handleChange"
    >
      <i class="el-icon-upload"></i>
      <div class="el-upload__text">
        将文件拖到此处，或
        <em>点击上传</em>
      </div>
    </el-upload>

    <tailor
      :uploadDialog="uploadDialog"
      :fileUrl="fileUrl"
      @getImgPath="getImgPath"
      ratio="26/7"
    ></tailor>
  </div>
</template>
      
<script>
import upload from "@/mixins/upload";
import tailor from "@/components/tailor";

export default {
  name: "cropper",
  mixins: [upload],
  components: {
    tailor
  },
  data() {
    return {};
  }
};
</script>

<style lang="less" scoped>
.box {
  display: flex;
  justify-content: center;
  padding-top: 20px;
}
</style>
      