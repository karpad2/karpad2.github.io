<template>
<div :class="'skill '+skill.style">
<div class="skill-text">
<span class="skill-title">{{skill.title}}</span>
<span class="skill-description">{{skill.desc}}</span>
                </div>
            </div>
</template>
<script>
export default ({
    props: {
            skill:{"title":"Test","desc":"test","style":""}
        },
})
</script>
