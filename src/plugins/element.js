import Vue from 'vue'
import {
    Button, Dialog, Loading, Select, Option, MessageBox, ButtonGroup, Upload, Message
} from 'element-ui'
// import '../element-variables.scss'

Vue.use(Button);
Vue.use(Dialog);
Vue.use(Select);
Vue.use(ButtonGroup);
Vue.use(Upload);
Vue.use(Option);

Vue.prototype.$loading = Loading.service;
Vue.prototype.$msgbox = MessageBox;
Vue.prototype.$message = Message;