<template>
   <div>
        <site-header/>
        <div>
            <div class="bg-[url('/images/home-bg.jpg')]" style=" background-repeat: no-repeat, repeat; background-size: cover;">
                <div class="py-40">
                    <div class="flex flex-col gap-8 justify-center mb-5 items-center">
                        <div class="text-white text-4xl font-bold">
                            What Problem Do You Need Solved?
                        </div>
                        <div class="w-2/4">
                            <div class="w-full border border-white rounded-full">
                                <input type="text" class="rounded-full w-full text-white bg-black px-4 py-2" placeholder="Submit your problem here..."/>
                            </div>
                        </div>
                        <div>
                            <button class="border border-white px-5 py-3 text-white bg-darkgreen rounded-full"> Core Advisory Areas </button>
                        </div>
                    </div>
           
                    <RightMenu/>
                </div>
            </div>
        </div>
        <div>
            <site-footer/>
        </div>
   </div>
</template>
<style lang="scss" scoped>

</style>