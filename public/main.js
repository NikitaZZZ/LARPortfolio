new Vue ({
  el: '#main',
  methods: {
    jump: (link) => {
      location.href = link
      test()
    }
  }
})

function soon() {
  Swal.fire({
    title: 'Скоро!',
    html: 'The First of Them обзятельно появится в Google Play <br> Новости тут: <a href="https://vk.com/public_lar" target="_blank" >Группа ВКонтакте</a>'
  })
}