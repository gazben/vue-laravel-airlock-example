<template>
    <div>
        <input type="text" v-model="credentials.email" placeholder="email"/>
        <input type="password" v-model="credentials.password" placeholder="password"/>
        <button @click="sendLogin">LOGIN</button>
    </div>
</template>

<script>
export default {
    name: 'Login',
    data () {
        return {
            credentials: {
              email: '',
              password: '',
            }
        }
    },
    methods: {
        sendLogin() {
          this.axios.get('airlock/csrf-cookie').then(response => {
            console.log(response);

            this.axios.post('auth/login', this.credentials).then((data) => {
              console.log('LOGIN SUCCESFUL')
              console.log(data);

              this.axios.get('auth/user').then(response => {
                console.log('User queried');
                console.log(response);

              }).catch((exception) => {
                console.log('User query unsuccesful');
                console.error(exception)
            });

            }).catch((exception) => {
                console.log('Login unsuccesful');
                console.error(exception)
            });
          });
        }
    }
}
</script>