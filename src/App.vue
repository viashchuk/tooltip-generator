<template>
  <main class="bg-blue-100 h-screen w-screen overflow-hidden flex">
    <div class="flex-grow">
      <preview/>
    </div>
    <sidebar/>
  </main>
</template>

<script>
import Sidebar from '@/components/Sidebar.vue'
import Preview from '@/components/Preview.vue'

export default {
  components: {
    Sidebar,
    Preview
  }
}
</script>
