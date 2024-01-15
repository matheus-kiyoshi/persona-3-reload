<template>
  <section class="pv-area">
    <a href="https://www.youtube.com/watch?v=zdKwmXoo0b0?autoplay=1&amp;mute=1" class="pv" title="PV" data-fancybox="pv" data-thumb="https://img.youtube.com/vi/zdKwmXoo0b0/hqdefault.jpg">
      <video ref="video" class="movie" autoplay preload="auto" muted playsinline="true" loop>
        <source src="@/assets/trailer.mp4" type="video/mp4">
      </video>
      <div class="cover"></div>
      <p class="headline-text play">PLAY TRAILER
        <svg class="arrow" viewBox="0 0 24 24"><path fill="currentColor" d="M4,11V13H16L10.5,18.5L11.92,19.92L19.84,12L11.92,4.08L10.5,5.5L16,11H4Z"></path></svg>
      </p>
    </a>
    <a href="https://www.youtube.com/watch?v=hLZDgaIqJ3Y?autoplay=1&amp;mute=1" class="pv" title="PV" data-fancybox="pv" data-thumb="https://img.youtube.com/vi/hLZDgaIqJ3Y/hqdefault.jpg"></a> 
    <a href="https://www.youtube.com/watch?v=jRxhpAppNBU?autoplay=1&amp;mute=1" class="pv" title="PV" data-fancybox="pv" data-thumb="https://img.youtube.com/vi/jRxhpAppNBU/hqdefault.jpg"></a> 
    <a href="https://www.youtube.com/watch?v=uGDZwFcnKTI?autoplay=1&amp;mute=1" class="pv" title="PV" data-fancybox="pv" data-thumb="https://img.youtube.com/vi/uGDZwFcnKTI/hqdefault.jpg"></a> 
    <a href="https://www.youtube.com/watch?v=ezWQ_Me2OP0?autoplay=1&amp;mute=1" class="pv" title="PV" data-fancybox="pv" data-thumb="https://img.youtube.com/vi/ezWQ_Me2OP0/hqdefault.jpg"></a> 
    <a href="https://www.youtube.com/watch?v=yFBimytPCi4?autoplay=1&amp;mute=1" class="pv" title="PV" data-fancybox="pv" data-thumb="https://img.youtube.com/vi/yFBimytPCi4/hqdefault.jpg"></a>
    <a href="https://www.youtube.com/watch?v=MhePWZ1CxbU?autoplay=1&amp;mute=1" class="pv" title="PV" data-fancybox="pv" data-thumb="https://img.youtube.com/vi/MhePWZ1CxbU/hqdefault.jpg"></a> 
    <a href="https://www.youtube.com/watch?v=yd5vSt4yZU0?autoplay=1&amp;mute=1" class="pv" title="PV" data-fancybox="pv" data-thumb="https://img.youtube.com/vi/yd5vSt4yZU0/hqdefault.jpg"></a> 
    <a href="https://www.youtube.com/watch?v=pBfVh8YprWg?autoplay=1&amp;mute=1" class="pv" title="PV" data-fancybox="pv" data-thumb="https://img.youtube.com/vi/pBfVh8YprWg/hqdefault.jpg"></a>
  </section>
</template>

<script lang="ts" setup>
  import { ref, onMounted } from 'vue';

  const video = ref<HTMLVideoElement>();

  onMounted(() => {
    if (video.value)
      video.value.currentTime = 5
  });
</script>

<style scoped>
  .movie {
    opacity: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    filter: grayscale(100%);
    background: rgb(0, 0, 0, 0.7);
  }

  .pv-area:hover .movie {
    opacity: 100;
  }

  .pv-area {
    background: #dce9f5;
    position: relative;
    margin-top: -1px;
    height: 240px;
    overflow: hidden;
    color: #1d384a;
  }

  .pv {
    cursor: pointer;
    display: block;
    position: relative;
    z-index: 10;
    width: 100vw;
    height: 240px;
    overflow: hidden;
    cursor: pointer;
    outline: none;
    text-decoration: none;
    background-color: #dce9f5;
  }

  .cover {
    display: block;
    position: absolute;
    z-index: 20;
    width: 100%;
    height: 100%;
    background: #dce9f5;
    -webkit-transition: 0.5s ease-out;
    transition: 0.5s ease-out;
  }

  .pv .play {
    color: #1d384a;
    font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
    font-size: xx-large;
    position: absolute;
    z-index: 50;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: end;
    -ms-flex-align: end;
    align-items: end;
    top: 50%;
    left: 50%;
    -webkit-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
  }

  .headline-text {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .pv .play .arrow {
    width: 32px;
    height: 31px;
    margin-bottom: 8px;
    display: inline-block;
    margin-left: 14px;
    -webkit-transition: -webkit-transform 0.3s linear;
    transition: -webkit-transform 0.3s linear;
    transition: transform 0.3s linear;
    transition: transform 0.3s linear, -webkit-transform 0.3s linear;
  }

  .pv:hover .play {
    color: white;
  }

  .pv:hover .play .arrow {
    -webkit-transform: translateX(5px);
    transform: translateX(5px);
  }
</style>