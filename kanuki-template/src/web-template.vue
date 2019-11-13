
<template>
    <div id="webtemplate">
        <div v-if="isMiniature" class="center" style="background-color: #ff638450;">
            <h1>Miniature</h1>
            <div>Bar</div>
        </div>
        <div v-else-if="!edit" class="center" style="background-color: #4383e950;">
            <h1>View</h1>
            <div>Bar</div>
        </div>
        <div v-else class="center" style="background-color: #fdd83550;">
            <h1>Editing</h1>
            <div>Bar</div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'web-template',
    props: {
        content: Object, 
        user: Object, 
        card: Object,
        isMiniature: Boolean,
        edit: Boolean
    }
}
</script>

<style>
    .center {
        display: flex;
        flex-direction: column;
        width: 100%;
        height: 100%;
        justify-content: center;
        align-items: center;
    }
</style>

