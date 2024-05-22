<template>
    <div class="register-container">
        <h1>Register</h1>
        <form @submit.prevent="registerUser">
            <div class="form-group">
                <label for="username">Username</label>
                <input type="text" id="username" v-model="username" required>
            </div>
            <div class="form-group">
                <label for="email">Email</label>
                <input type="email" id="email" v-model="email" required>
            </div>
            <div class="form-group">
                <label for="password">Password</label>
                <input type="password" id="password" v-model="password" required>
            </div>
            <button type="submit">Register</button>
        </form>
    </div>
</template>

<script>
export default {
    data() {
        return {
            username: '',
            email: '',
            password: ''
        };
    },
    methods: {
        registerUser() {
            // Add your registration logic here
            // You can use this.username, this.email, and this.password to access the form values
        }
    }
};
</script>

<style scoped>
.register-container {
    max-width: 80%;
    margin: 10px auto;
    padding: 20px;
    border-radius: 5px;
    
}

.form-group {
    margin-bottom: 20px;
}

label {
    display: block;
    font-weight: bold;
}

input {
    width: 100%;
    padding: 5px;
    border: 1px solid #ccc;
    border-radius: 3px;
}

button {
    padding: 10px 20px;
    background-color: #A3D1DD;
    color: #fff;
    border: none;
    border-radius: 3px;
    cursor: pointer;
}
</style>