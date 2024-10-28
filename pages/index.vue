<template>
   <div>
        <site-header/>
        <div>
            <div class="bg-[url('/images/home-bg.jpg')]" style=" background-repeat: no-repeat, repeat; background-size: cover;">
                <div class="py-20 flex flex-col gap-3">
                    <div class="text-white text-4xl font-bold">
                        What Problem Do You Need Solved?
                    </div>
                    <div>
                        <div class="w-2/4 border border-white rounded-full">
                            <input type="text" class="rounded-full w-full text-white bg-black p-2" placeholder="Submit your problem here..."/>
                        </div>
                    </div>
                    <div>
                        <button class="px-3 py-2 text-white bg-darkgreen rounded-full"> Core Advisory Areas </button>
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