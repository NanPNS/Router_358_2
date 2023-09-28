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
{name:'บ้านลุงปุ๊ด & ป้าเป็ง',      price:150, img:"https://www.matichonacademy.com/wp-content/uploads/2021/03/%E0%B8%9A%E0%B9%89%E0%B8%B2%E0%B8%99%E0%B8%AE%E0%B8%B4%E0%B8%A1%E0%B8%AB%E0%B9%89%E0%B8%A7%E0%B8%A2_%E0%B8%A5%E0%B8%B8%E0%B8%87%E0%B8%9B%E0%B8%B8%E0%B9%8A%E0%B8%94_%E0%B8%9B%E0%B9%89%E0%B8%B2%E0%B9%80%E0%B8%9B%E0%B9%87%E0%B8%87.jpg", quantity: 0 ,
    text_box:' บ้านฮิมห้วย ลุงปุ๊ด & ป้าเป็ง ร้านกาแฟดังประจำแม่กำปอง ตัวร้านเป็นบ้านไม้ มาทีไรคนเยอะตลอด เพราะตกแต่งร้านได้ดี ดูเก๋ๆ ฮิปๆ มีที่นั่งชมลำธาร'
    },])


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
  background: rgba(18, 47, 60, 0.529);
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