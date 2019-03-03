
export default  {
    data() {
        return {
            fileUrl:'',
            imageUrl:'',
            item:'',
            uploadDialog: {
                visible: false
            },
        };
    },
    methods: {
        //获取本地连接
        getObjectURL(file) {
            let url = null;
            if (window.createObjectURL != undefined) {
                // basic
                url = window.createObjectURL(file);
            } else if (window.URL != undefined) {
                // mozilla(firefox)
                url = window.URL.createObjectURL(file);
            } else if (window.webkitURL != undefined) {
                // webkit or chrome
                url = window.webkitURL.createObjectURL(file);
            }
            return url;
        },
        handleChange(file) {
            this.fileUrl = this.getObjectURL(file.raw);
            this.uploadDialog.visible= true;

        },
        getImgPath(url){
            this.item = true;
            this.imageUrl = url

        },
    }
}