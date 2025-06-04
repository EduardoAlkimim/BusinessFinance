<template>
    <div class="flex h-screen">
        <div class="hidden md:block w-[55%] h-screen">
            <img src="/src/assets/img/signIn.svg" alt="Imagem" class="w-full h-full object-cover" />
        </div>


        <div class="w-full md:w-[45%] flex items-center justify-center">
            <div class="w-full max-w-md px-6">
                <h1 class="text-4xl font-krona font-bold mb-2">Forgot Your
                    Password?</h1>
                <p class="text-gray-500 mb-8">No problem! Just tell us your email and we’ll send a password reset link right away</p>

                <form class="space-y-4">
                    <div class="pt-4 pb-8">
                        <input type="email" placeholder="Email"
                            class="mt-1 w-full border border-gray-300 rounded-2xl px-6 py-4 focus:outline-none focus:ring-2 focus:ring-purple-500" />
                    </div>

                    <button type="submit"
                        class="w-full bg-roxoCustom text-white py-4 rounded-full hover:bg-purple-700 transition">
                        Reset Password
                    </button>
                    <div class="flex justify-center">
                        <router-link to="/Login" href="#" class="text-sm text-roxoCustom hover:underline">Back</router-link >
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "ForgotPassword"
}
</script>
