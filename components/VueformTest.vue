<template>
  <ClientOnly>
    <Vueform :schema="formSchema.schema" :form="formSchema.form" />
  </ClientOnly>
</template>

<script>
import goalFormSchema from '@/schema/goalFormSchema'

export default {
  data() {
    return {
      formSchema: goalFormSchema
    }
  }
}
</script>
