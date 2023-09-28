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
{name:'Atlantis Valley',    price:140, img:"https://scontent.fbkk29-8.fna.fbcdn.net/v/t39.30808-6/280855552_287442430263297_3730015221058653370_n.jpg?stp=dst-jpg_p960x960&_nc_cat=105&ccb=1-7&_nc_sid=5614bc&_nc_eui2=AeELWTCu4XliW7Vi0Gsuwh6z_9MfKFJswXP_0x8oUmzBc6IaHrACd44CX6FYBEst1hukTtNtIdI8xlDit01QIb6e&_nc_ohc=gKbEsupQ35EAX81wSFh&_nc_oc=AQnBOkttpGi-1PJoCpYJVshumNXjkYJLcQONh95UZrvms_7CS_aYmJ3CR_0X8RyQAwU&_nc_ht=scontent.fbkk29-8.fna&oh=00_AfBMYyVFJOavaOXT1GB2I4RdWOHKQH4UDGi-iltufvs9dA&oe=6515C496", quantity: 0 ,
    text_box:' Atlantis Valley อีกหนึ่งคาเฟ่สวยแม่กำปอง ตัวร้านโดดเด่นสะดุดตาด้วยธงชาติอเมริกา ที่ขึงอยู่บริเวณด้านหน้า นั่นก็เพราะว่าเค้าเป็นคาเฟ่สไตล์อเมริกันเท่ ที่มีเอกลักษณ์เฉพาะตัว'
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
