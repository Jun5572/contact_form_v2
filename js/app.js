let validation = new Vue({
  el: '#app',
  data: {
    name: '',
    name_kana: '',
    email: '',
    email_confirm: '',
    category: '',
    body: '',
    isActive: false,
    errors: {
      name : [],
      name_kana : [],
      email : [],
      email_confirm : [],
      category : [],
      body : [],
    }
  },
  methods: {
    validator: function(type, max) {
      let name = [];
      let name_kana = [];
      let email = [];
      let email_confirm = [];
      let category = [];
      let body = [];
      let style = [];
      let message = max + '文字以内で入力してください。';
      
      if (type === 'name') {
        if (this.name.length > max) {
          name.push(message);
        }
        this.errors.name = name;
      }
    }
  }
});