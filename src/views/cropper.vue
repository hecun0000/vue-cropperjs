<template>
  <div>
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
    </div>
    <fileListComponent/>

    <tailor :uploadDialog="uploadDialog" :fileUrl="fileUrl" @getImgPath="getImgPath" ratio="4/3" isCircle></tailor>
  </div>
</template>
      
<script>
import upload from "@/mixins/upload";
import fileListComponent from "@/components/fileList";

export default {
  name: "cropper",
  mixins: [upload],
  components: {
    fileListComponent
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
      