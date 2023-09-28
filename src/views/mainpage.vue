<script setup>
import newcard from '../components/Newcard.vue'
import { ref } from 'vue';

const Box_news=ref([
   {name: '30 คาเฟ่อยุธยา อัปเดต 2023 ใกล้กรุงเทพนิดเดียว Hopping ได้ชิลๆ', 
   img:"https://cms.dmpcdn.com/food/2022/12/29/818c7600-8746-11ed-b743-434c73e90148_webp_original.jpg",
    data_time:'24 มีนาคม 2566'
    }, 

    {name: '“อัปเดต 28 คาเฟ่ ร้านกาแฟ บางแสน ริมทะเล 2023 บรรยากาศดี ชิลลืมร้อน', 
    img:"https://cms.dmpcdn.com/food/2023/03/15/d5864800-c2e5-11ed-b4a5-8966ffc2ffeb_webp_original.jpg",
    data_time:'15 มีนาคม 2566 '
    },
  
    {name: 'อัปเดต 45 คาเฟ่พัทยา 2023 ร้านกาแฟสวย น่านั่งชิล วิวดี ใกล้กรุงเทพ’', 
    img:"https://cms.dmpcdn.com/food/2023/03/02/996dc750-b8c5-11ed-a0a0-2bac0c6bf823_webp_original.jpg",
    data_time:'12 กันยายน 2566'
    },

])
</script>

<template>
        <newcard></newcard>

      <!--Side bar-->
      <div class="abote_1">
          <div class="col-md-4">
            <div class="position-sticky" style="top: 2rem;">
              <div class="p-4 mb-3 bg-body-tertiary rounded">
                <h4 class="abote1">ร้านกาแฟ</h4>
                <p class="mb-0"> แม่กำปอง เชียงใหม่ ที่เที่ยวดีๆ ที่ถึงหน้าหนาวเมื่อไหร่ก็ต้องไปให้ได้ทุกปี ด้วยบรรยากาศเนิบๆ เบาๆ ทำให้การได้มาที่นี่เป็นการพักผ่อนที่ดีมากๆ ค่ะ รวมถึงที่นี่ยังมี ร้านกาแฟ กระจายตัวอยู่ในหมู่บ้าน มีวิวสวยๆ ให้ชิลอีกด้วย ตามเรามานั่งชิลกับ 15 ร้านกาแฟ คาเฟ่ แม่กำปอง เชียงใหม่ อัปเดต 2022 ไปจิบกาแฟชิลๆ ชมวิวสวยกลางขุนเขา ใรบรรยากาศสบายๆ กันได้เลยค่า</p>
              </div>
          </div>
          <div class="Box_new">
      
              <div class="abote_2">
                <h4 class="abote2">ยอดนิยมในตอนนี้</h4>
                <ul class="list-unstyled">
                  <li>
                    
                    <a class="d-flex flex-column flex-lg-row gap-3 align-items-start align-items-lg-center py-3 link-body-emphasis text-decoration-none border-top" href="#" v-for="(i,index) in Box_news" :key="index">
                    <svg class="bd-placeholder-img"  xmlns="http://www.w3.org/2000/svg" aria-hidden="true" preserveAspectRatio="xMidYMid slice" focusable="false">
                      <image :xlink:href="i.img" x="0" y="40" width="200px" />
                    </svg>
                      <div class="col-lg-8">
                        <h6 class="mb-0">{{i.name }}</h6>
                        <small class="text-body-secondary">{{i.data_time}}</small>
                      </div>
                    </a>
                  
                  </li>
                </ul>
              </div>
              </div>
            </div>

      
      
      
      </div>
    
</template>

<style>
.abote1,.abote2{
  background: rgb(16, 55, 58);
  color: aliceblue;



}
.Box_new{
  background: white;
  padding: 20px;
  margin: ;
}



</style>