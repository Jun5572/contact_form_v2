let validation = new Vue({
  el: '#app',
  data: {
    name_first: '',
    name_last: '',
    kana_first: '',
    kana_last: '',
    email: '',
    email_confirm: '',
    category: '',
    body: '',
    isActive: false,
    errors: {
      name_first : [],
      name_last : [],
      kana_first : [],
      kana_last : [],
      email : [],
      email_confirm : [],
      category : [],
      body : [],
    }
  },
  methods: {
    validator: function(type, max) {
      let name_first = [];
      let name_last = [];
      let kana_first = [];
      let kana_last = [];
      let email = [];
      let email_confirm = [];
      let category = [];
      let body = [];
      let style = [];
      let message = max + '文字以内';
      
      if (type === 'name_first') {
        if (this.name_first.length > max) {
          name_first.push(message);
        }
        this.errors.name_first = name_first;
      } else if(type === 'name_last') {
        if (this.name_last.length > max) {
          name_last.push(message);
        }
        this.errors.name_last = name_last;
      } else if(type === 'kana_first') {
        if (this.kana_first.length > max) {
          kana_first.push(message);
        }
        this.errors.kana_first = kana_first;
      }　else if(type === 'kana_last') {
        if (this.kana_last.length > max) {
          kana_last.push(message);
        }
        this.errors.kana_last = kana_last;
      }
    }
  }
});