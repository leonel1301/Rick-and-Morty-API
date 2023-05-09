<template>
  <Card>
      <template #title>
          <img :src="image" :alt="name"/>
          </template>
      <template #content>
          <h2>{{name}}</h2>
          <p>
              {{$t('status')}}: <span>{{ status }}</span>
          </p>
          <p>
              {{$t('gender')}}: <span>{{ gender }}</span>
          </p>
      </template>
      <template #footer>
          <router-link :to="'/character/' + id">
          <Button icon="pi pi-check" label='detail' />
          </router-link>
      </template>
  </Card>
</template>

<script>
export default {
    name: "Cards-Component",
    props: [ 'name', 'id', 'status', 'gender', 'image', 'detail' ]
}
</script>

<style scoped>
Button{
    margin-left: auto;
    margin-right: auto;
}
img{
    border-radius: 5px 5px 0px 0px;
}
Card{
    border-radius: 5px;
    width: 332px;
    padding: 5px;
}
</style>