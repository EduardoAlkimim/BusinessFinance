<template>
    <div class="flex h-screen">

        <div class="hidden md:block w-[55%] h-screen">
            <img src="/src/assets/img/signIn.svg" alt="Imagem" class="w-full h-full object-cover" />
        </div>


        <div class="w-full md:w-[45%] flex items-center justify-center">
            <div class="w-full max-w-md px-6">
                <h1 class="text-4xl font-krona font-bold mb-2">Sign In<br />to your <br /> account</h1>
                <p class="text-gray-500 mb-8">Fill up your academy details</p>

                <form class="space-y-4">
                    <div>
                        <input type="email" placeholder="Email"
                            class="mt-1 w-full border border-gray-300 rounded-2xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500" />
                    </div>

                    <div>
                        <input type="password" placeholder="Password"
                            class="mt-1 w-full border border-gray-300 rounded-2xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500" />
                    </div>

                    <div class="flex justify-end">
                        <a href="#" class="text-sm text-roxoCustom hover:underline">Forgot Password?</a>
                    </div>

                    <button type="submit"
                        class="w-full bg-roxoCustom text-white py-4 rounded-full hover:bg-purple-700 transition">
                        Sign In
                    </button>
                </form>
            </div>
        </div>
    </div>
</template>
