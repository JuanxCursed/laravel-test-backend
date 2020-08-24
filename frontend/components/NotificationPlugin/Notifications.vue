<template>
  <div class="notifications">
    <SlideYUpTransition
      :duration="transitionDuration"
      group
      mode="out-in"
    >
      <Notification
        v-for="notification in notifications"
        :key="notification.timestamp.getTime()"
        v-bind="notification"
        :click-handler="notification.onClick"
        @close="removeNotification"
      />
    </SlideYUpTransition>
  </div>
</template>
<script>
import { SlideYUpTransition } from 'vue2-transitions'
import Notification from './Notification.vue'

export default {
  components: {
    SlideYUpTransition,
    Notification,
  },
  props: {
    transitionDuration: {
      type: Number,
      default: 200,
    },
    overlap: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      notifications: this.$notifications.state,
    }
  },
  watch: {
    overlap(newVal) {
      this.$notifications.settings.overlap = newVal
    },
  },
  created() {
    this.$notifications.settings.overlap = this.overlap
  },
  methods: {
    removeNotification(timestamp) {
      this.$notifications.removeNotification(timestamp)
    },
  },
}
</script>
