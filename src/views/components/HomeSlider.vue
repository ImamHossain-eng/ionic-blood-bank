<template>
  <ion-page>
    <ion-content>
      <swiper>
        <swiper-slide>
            <ion-img :src="'assets/images/slider/hub1.jpg'" />
        </swiper-slide>
        <swiper-slide>
            <ion-img :src="'assets/images/slider/hub2.jpg'" />
        </swiper-slide>
        <swiper-slide>
            <ion-img :src="'assets/images/slider/hub3.jpg'" />
        </swiper-slide>
      </swiper>
    </ion-content>
  </ion-page>
</template>

<script>
import { Swiper, SwiperSlide } from 'swiper/vue';
import { IonContent, IonPage, IonImg } from '@ionic/vue';

import 'swiper/css';
import '@ionic/vue/css/ionic-swiper.css';
export default {
    components: {
        Swiper,
        SwiperSlide,
        IonContent,
        IonPage,
        IonImg,
    }
    
}
</script>