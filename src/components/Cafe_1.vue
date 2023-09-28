<template>
  <div class="box">
                <div class="box_all">
                <div class="col" v-for="(n,i) in travelList" :key="n">
                  <div class="card" style="width: 500px;" >
                    <img :src="n.img" class="card-img-top">
                    <div class="card-body">
                      <h3 class="card-title">{{ n.name }}</h3>
                      <p>ราคาจอง : {{n.price}}</p>
                      <h6>***แจ้งจำนวนคน***</h6>

                      <a class="btn btn-primary" @click="list_local_control(i.name, i.quantity)"> จอง </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
    </template>
    
<script setup>

import { ref } from 'vue';

const travelList=ref([
{name: 'Teddu Coffee',  price:200, img:"https://static.thairath.co.th/media/Dtbezn3nNUxytg04OOWcusYIDMcPXQzsXCaiy5agWDUF3K.jpg", quantity: 0 ,
    text_box:' eddu Coffee ร้านกาแฟที่เหมาะแก่การหิ้วหนังสือมามากที่สุด เพราะแวดล้อมด้วยต้นไม้ใหญ่ และน้ำตกหลังร้านที่เรานั่งแช่ขาจิบกาแฟชิลๆ ได้ รู้สึกตัวอีกทีก็เอนตัวลงนอนไปเรียบร้อยแล้ว'
    }])


</script>

<style>

.card-img-top{
  height: 100%;
  padding: 25px;
  justify-content: center;
  align-items: center;
  text-align: center;
  


}
.box_all{
  justify-content: center;
  align-items: center;
  text-align: center;
  

  
  

}
.box{
  background: rgba(139, 140, 195, 0.823);
  padding: auto;
  margin: 20px;
  border-top: 2px solid #ffffff ;
  border-left: 2px solid #ffffff ;
  box-shadow: #000000;
  border-radius: 15px;
  overflow: hidden;
  backdrop-filter: blur(4px);
}

</style>
