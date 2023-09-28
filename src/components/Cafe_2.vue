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
{name:'The Giant Chiangmai Thailand',  price:250, img:"https://cms.dmpcdn.com/food/2020/07/08/f3ff3250-c0f5-11ea-bf65-718dd717db2e_original.jpg", quantity: 0 ,
    text_box:' หนีความวุ่นวาย มาใหเธรรมชาติบำบัดกันที่ The Giant Chiangmai Thailand ร้านกาแฟในป่า เพราะแวดล้อมด้วยต้นไม้ใหญ่ บรรยากาศคือชิลแบบสุดๆ'
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