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
{name:'Woo Ma Ca Moo',     price:100, img:"https://scontent.fbkk29-1.fna.fbcdn.net/v/t1.6435-9/101162692_163106041866788_5291762955531059200_n.jpg?stp=dst-jpg_p720x720&_nc_cat=101&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeFEMEtAH-f6xY9EJvxBVn9Aa3fegTUZ2-Zrd96BNRnb5nQQcCttvfUJ_nChJ4-XtW9twmcIkRdxvPMAoWcSut3K&_nc_ohc=WbxTnS3nc18AX-5hZ9s&_nc_ht=scontent.fbkk29-1.fna&oh=00_AfBrQMiqJc5fgTIUcNeJOeP3wAwo7ETm40rdL5VPDgOnwQ&oe=653867EC", quantity: 0 ,
    text_box:'  Woo Ma Ca Moo แม่กำปอง หลักๆ ของที่นี่คือเค้าเป็นที่พักฟีลโฮมมี่ โคซี่แบบญี่ปุ่นสุดๆ บรรยากาศดีแบบสุดๆ และถึงแม้ว่าไม่ได้พักที่นี่ ก็ยังสามารถมาแวะจิบกาแฟชิลๆ ในบรรยากาศแบบบ้านญี่ปุ่นกลางขุนเขา'
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