<template>
  <div class="box">
                <div class="box_all">
                <div class="col" v-for="(n,i) in travelList" :key="n">
                  <div class="card" style="width: 500px;"  >
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
{name:'Pirunya Coffee',  price:60,  img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsoCQqfqLV0G7lp2-cFB1dYMcxgxUGFq1R7tblFueMO4U6pOL_cQ8q_-p8aWYnCxwVpw8&usqp=CAU", quantity: 0 ,
    text_box:' Pirunya Coffee (ปิรันย่า คอฟฟี่) ร้านนี้พิเศษตรงที่มีกาแฟไซฟ่อนให้ดื่มด้วย (เทคนิคชงกาแฟแบบสูญญากาศ) บรรยากาศดีมีที่นั่งชมนกชมไม้ เจ้าของร้านคุยง่ายสไตล์อินดี้'
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