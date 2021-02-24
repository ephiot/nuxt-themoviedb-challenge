<template>
  <ModalBackground v-if="open">
    <ModalWindow>
      <ModalWindowHeader>
        <slot name="header">
          Window title
        </slot>
        <ModalWindowCloseBtn
          align="right"
          min-width="32px"
          width="auto"
          min-height="32px"
          height="32px"
          @click="close"
        >
          close
        </ModalWindowCloseBtn>
      </ModalWindowHeader>
      <ModalWindowMain>
        <slot name="main">
          Window content
        </slot>
      </ModalWindowMain>
      <ModalWindowFooter>
        <slot name="footer" />
      </ModalWindowFooter>
    </ModalWindow>
  </ModalBackground>
</template>

<script>
import ModalBackground from '@/components/elements/ModalBackground'
import ModalWindow from '@/components/elements/ModalWindow'
import ModalWindowHeader from '@/components/elements/ModalWindowHeader'
import ModalWindowMain from '@/components/elements/ModalWindowMain'
import ModalWindowFooter from '@/components/elements/ModalWindowFooter'
import ModalWindowCloseBtn from '@/components/elements/ModalWindowCloseBtn'

export default {
  components: {
    ModalBackground,
    ModalWindow,
    ModalWindowHeader,
    ModalWindowMain,
    ModalWindowFooter,
    ModalWindowCloseBtn
  },
  data: () => {
    return {
      open: false
    }
  },
  methods: {
    show () {
      this.open = true
    },
    close () {
      this.open = false
    }
  }
}
</script>
