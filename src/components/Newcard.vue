<template>
<div class="cardall">
<div class="row mb-2 ">
        <div class="col-md-6 " v-for="(n,i) in travelList" :key="n">
          <div class="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
            <div class="card-bg col p-4 d-flex flex-column position-static">
              <strong class="d-inline-block mb-2 text-primary-emphasis "><span class="number">คาเฟ่ที่ {{ i+1 }}</span> </strong>
              <h3 class="mb-0">{{n.name}}</h3>
              <div class="mb-1 text-body-secondary "> <span class="price-text">ราคาต่อโต๊ะ  {{n.price}} บาท </span></div>
              <p class="card-text mb-auto">{{n.text_box}}</p>
              
              <div style="margin-bottom: 10px;">
              <RouterLink :to="{name: `news_${i+1}` , params: {id: n.name}}" class="icon-link gap-1 icon-link-hover stretched-link" >
                <span class="black-text">กดเพื่อจองก่อนเข้าร้าน</span>
                <svg class="bi" style="background-color: rgb(179, 206, 255); color: rgb(21, 48, 128);"> <use xlink:href="#chevron-right"/></svg>
             </RouterLink>
            </div>     
            </div>
            <div class="col-auto d-none d-lg-block ">
              <svg class="bd-placeholder-img" width="200" height="250" xmlns="http://www.w3.org/2000/svg" role="img"  preserveAspectRatio="xMidYMid slice" focusable="false" 
              style="margin: 15px;" >
                <image :xlink:href="n.img" x="0" y="0" width="300" height="300" />
              </svg>
            </div>
          </div>
        </div>

      
    </div>
  </div>

</template>

<script setup>
import { RouterLink } from 'vue-router'
import { ref } from 'vue';



//variable drinking
const travelList=ref([
   {name: 'Teddu Coffee',  price:200, img:"https://static.thairath.co.th/media/Dtbezn3nNUxytg04OOWcusYIDMcPXQzsXCaiy5agWDUF3K.jpg", quantity: 0 ,
    text_box:' eddu Coffee ร้านกาแฟที่เหมาะแก่การหิ้วหนังสือมามากที่สุด เพราะแวดล้อมด้วยต้นไม้ใหญ่ และน้ำตกหลังร้านที่เรานั่งแช่ขาจิบกาแฟชิลๆ ได้ รู้สึกตัวอีกทีก็เอนตัวลงนอนไปเรียบร้อยแล้ว'
    }, 

  {name:'The Giant Chiangmai Thailand',  price:250, img:"https://cms.dmpcdn.com/food/2020/07/08/f3ff3250-c0f5-11ea-bf65-718dd717db2e_original.jpg", quantity: 0 ,
    text_box:' หนีความวุ่นวาย มาใหเธรรมชาติบำบัดกันที่ The Giant Chiangmai Thailand ร้านกาแฟในป่า เพราะแวดล้อมด้วยต้นไม้ใหญ่ บรรยากาศคือชิลแบบสุดๆ'
    },
  
  {name:'บ้านลุงปุ๊ด & ป้าเป็ง',      price:150, img:"https://www.matichonacademy.com/wp-content/uploads/2021/03/%E0%B8%9A%E0%B9%89%E0%B8%B2%E0%B8%99%E0%B8%AE%E0%B8%B4%E0%B8%A1%E0%B8%AB%E0%B9%89%E0%B8%A7%E0%B8%A2_%E0%B8%A5%E0%B8%B8%E0%B8%87%E0%B8%9B%E0%B8%B8%E0%B9%8A%E0%B8%94_%E0%B8%9B%E0%B9%89%E0%B8%B2%E0%B9%80%E0%B8%9B%E0%B9%87%E0%B8%87.jpg", quantity: 0 ,
    text_box:' บ้านฮิมห้วย ลุงปุ๊ด & ป้าเป็ง ร้านกาแฟดังประจำแม่กำปอง ตัวร้านเป็นบ้านไม้ มาทีไรคนเยอะตลอด เพราะตกแต่งร้านได้ดี ดูเก๋ๆ ฮิปๆ มีที่นั่งชมลำธาร'
    },

  {name:'Woo Ma Ca Moo',     price:100, img:"https://scontent.fbkk29-1.fna.fbcdn.net/v/t1.6435-9/101162692_163106041866788_5291762955531059200_n.jpg?stp=dst-jpg_p720x720&_nc_cat=101&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeFEMEtAH-f6xY9EJvxBVn9Aa3fegTUZ2-Zrd96BNRnb5nQQcCttvfUJ_nChJ4-XtW9twmcIkRdxvPMAoWcSut3K&_nc_ohc=WbxTnS3nc18AX-5hZ9s&_nc_ht=scontent.fbkk29-1.fna&oh=00_AfBrQMiqJc5fgTIUcNeJOeP3wAwo7ETm40rdL5VPDgOnwQ&oe=653867EC", quantity: 0 ,
    text_box:'  Woo Ma Ca Moo แม่กำปอง หลักๆ ของที่นี่คือเค้าเป็นที่พักฟีลโฮมมี่ โคซี่แบบญี่ปุ่นสุดๆ บรรยากาศดีแบบสุดๆ และถึงแม้ว่าไม่ได้พักที่นี่ ก็ยังสามารถมาแวะจิบกาแฟชิลๆ ในบรรยากาศแบบบ้านญี่ปุ่นกลางขุนเขา'
    },

  {name:'Atlantis Valley',    price:1, img:"https://scontent.fbkk29-8.fna.fbcdn.net/v/t39.30808-6/280855552_287442430263297_3730015221058653370_n.jpg?stp=dst-jpg_p960x960&_nc_cat=105&ccb=1-7&_nc_sid=5614bc&_nc_eui2=AeELWTCu4XliW7Vi0Gsuwh6z_9MfKFJswXP_0x8oUmzBc6IaHrACd44CX6FYBEst1hukTtNtIdI8xlDit01QIb6e&_nc_ohc=gKbEsupQ35EAX81wSFh&_nc_oc=AQnBOkttpGi-1PJoCpYJVshumNXjkYJLcQONh95UZrvms_7CS_aYmJ3CR_0X8RyQAwU&_nc_ht=scontent.fbkk29-8.fna&oh=00_AfBMYyVFJOavaOXT1GB2I4RdWOHKQH4UDGi-iltufvs9dA&oe=6515C496", quantity: 0 ,
    text_box:' Atlantis Valley อีกหนึ่งคาเฟ่สวยแม่กำปอง ตัวร้านโดดเด่นสะดุดตาด้วยธงชาติอเมริกา ที่ขึงอยู่บริเวณด้านหน้า นั่นก็เพราะว่าเค้าเป็นคาเฟ่สไตล์อเมริกันเท่ ที่มีเอกลักษณ์เฉพาะตัว'
    },

  {name:'Pirunya Coffee',  price:60,  img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsoCQqfqLV0G7lp2-cFB1dYMcxgxUGFq1R7tblFueMO4U6pOL_cQ8q_-p8aWYnCxwVpw8&usqp=CAU", quantity: 0 ,
    text_box:' Pirunya Coffee (ปิรันย่า คอฟฟี่) ร้านนี้พิเศษตรงที่มีกาแฟไซฟ่อนให้ดื่มด้วย (เทคนิคชงกาแฟแบบสูญญากาศ) บรรยากาศดีมีที่นั่งชมนกชมไม้ เจ้าของร้านคุยง่ายสไตล์อินดี้'
    },


])

</script>

<style >
.card-bg{
  
  background: linear-gradient(  #1a462f , #293742 );
  color: rgb(255, 255, 255);
}
.black-text {
  background-color: rgb(235, 255, 251);
  margin-top: 20px;
  color: rgb(9, 27, 17); /* กำหนดสีข้อความเป็นสีดำ */

}
.price-text{
  color: rgb(255, 255, 255);
  background: rgb(11, 12, 66);
  padding-inline: 10px;


}
.number{
  color: rgb(255, 255, 255);
  padding-right: 100px;
  padding-left: 100px;
  padding-top: 20px;
  
  background: rgb(9, 27, 48);
}
.cardall{
  background: rgba(255, 255, 255, 0.374);
  padding: 20px;
  margin: 20px;
  border-top: 2px solid #e6e6e6 ;
  border-left: 2px solid #ffffff ;
  box-shadow: 20px #0b0427;
  border-radius: 15px;
  overflow: hidden;
  backdrop-filter: blur(4px);
  
}
</style>