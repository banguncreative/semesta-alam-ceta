<script setup>
import navVue from './components/nav.vue';
import navItem from './components/nav-item.vue';
import navItemDropdown from './components/nav-item-dropdown.vue';
import waveAnimated from './components/wave-animated.vue';
import social from './components/global/global-social.vue';
import sectionCardsUnion from './components/section-cards-union.vue';
import sectionAbout from './components/section-about.vue';
import waves1 from './components/waves-1.vue';
import sectionContentService from './components/section-content-service.vue';
import sectionContacMaps from './components/section-contact-maps.vue';
import sectionAfiliates from './components/section-afiliates.vue';
import loadingscreen from './components/global/global-loadingsceen.vue';
import sectionTeams from './components/section-teams.vue';
import sectionCallinaction from './components/section-callinaction.vue';
import globalTable from './components/global/global-table.vue';
import globalModal from './components/global/global-modal.vue';
import sectionExperience from './components/section-experience.vue';
import sectionFormSubmiter from './components/form-submit.vue';

import { def } from '@vue/shared';

import profile from './profile.js';
import experience from "./exp.lib";
</script>

<template>
  <loadingscreen
    :isLoading="isLoading"
  ></loadingscreen>
  <!-- -------- START Navbar ------- -->
  <div class="container-fluid position-sticky z-index-sticky top-0 p-0 m-0" style="">
    <navVue
      :profile="profile"
      :page_links="page_links"
    >
      <navItem 
        v-for="page in nav"
        :title="page.title"
        :url="page.url"
      >
        <navItemDropdown 
          v-if="page.dropdown"
          :items="page.dropdown"
        >
        </navItemDropdown>
      </navItem>
    </navVue>
  </div>
  <!-- -------- END Navbar ------- -->

  <!-- -------- START HEADER 7 w/ text and video ------- -->
  <header class="bg-gradient-dark">
    <div class="page-header min-vh-75" style="background-image: url('../assets/img/forest_landing.jpeg')">
      <span class="mask bg-gradient-info opacity-8"></span>
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-lg-8 text-center mx-auto my-auto">
            <h1 class="text-white main-tagline">{{profile.tagline}}</h1>
            <p class="lead mb-4 text-white opacity-8">{{profile.description}}</p>
            <button type="submit" class="btn bg-white text-dark" data-toggle="modal" data-target="#form-submit">Dapatkan Penawaranmu Sekarang</button>
            <h6 class="text-white text-center mb-2 mt-5">Find us on</h6>
            <social
              :socials="profile.socials"
              class="pb-5"
            >
            </social>
          </div>
        </div>
      </div>
      <waveAnimated/>
    </div>
    <global-modal id="form-submit" modalTitle="Hubungi kami melalui Email" class="" style="max-width: 600px;">
      <div class="modal-body" >
        <sectionFormSubmiter ></sectionFormSubmiter>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-primary" data-dismiss="modal">Close</button>
      </div>
    </global-modal>
  </header>
  <!-- -------- END HEADER 7 w/ text and video ------- -->

  <!-- -------- START CARD SECTION ------- -->
  <sectionCardsUnion
    v-if="exp_data"
    :vendors="vendors_count"
    :documents="documents_count"
    :founded="profile.founded"
  
  ></sectionCardsUnion>
  <!-- -------- END CARD SECTION ------- -->

  <!-- -------- START ABOUT SECTION ------- -->
  <sectionAbout
    :name="profile.name"
    :founded="profile.founded"
    :vision="profile.vision"
    :missions="profile.missions"
  ></sectionAbout>
  <!-- -------- END ABOUT SECTION ------- -->
  
  <!---- experience modal ---->
  <globalModal id="modalPengalaman" modalTitle="Daftar pengalaman">
    <div class="modal-body">
      <sectionExperience
        v-if="exp_data"
        :exp_data="exp_data"
        modalTitle="Pengalaman"
      ></sectionExperience>
    </div>
    <div class="modal-footer">
      <button type="button" class="btn btn-primary" data-dismiss="modal">Close</button>
    </div>
  </globalModal>
  <!-- end experience modal -->

  <waves1
    color1="#a7b9a1"
    color2="#379237"
  ></waves1>

  <!-- -------- CONTENT SERVICE --------- -->
  <sectionContentService
    :services="profile.service"
  ></sectionContentService>
  <!-- ------ END CONTENT SERVICE ------- -->

  <sectionTeams></sectionTeams>

  <!-- <sectionCallinaction
    :profile="profile"
  ></sectionCallinaction> -->

  <sectionAfiliates
    :vendors="vendors_count"
  ></sectionAfiliates>

  <!-- ------ Maps Contact -------------- -->
  <sectionContacMaps
    :profile="profile"
  ></sectionContacMaps>
  <!-- ------ END Maps Contact ---------- -->
  



</template>

<script>
  export default{
    data: function(){
      return {
        isLoading: true,
        profile: profile,
        exp_data: null,
        nav:[],
        ex: [
          {
            title: "Pages",
            dropdown:[
              {
                title: "Landing Pages",
                childrens:[
                  {
                    title: "About Us",
                    url: "#"
                  },
                  {
                    title: "Contact Us",
                    url: "#"
                  },
                  {
                    title: "Author",
                    url: "#"
                  }
                ]
              },
              {
                title: "Account",
                childrens:[
                  {
                    title: "Sign In",
                    url: "#"
                  }
                ]
              }
            ]
          }
        ],
        page_links:[
          {
            text:"About",
            url: "#about-us",
            title: "wanna know more"
          },
          {
            text:"Service",
            url: "#service",
            title: "check out our service"
          },
          {
            text:"Afiliates",
            url: "#afiliates",
            title: ""
          },
          {
            text:"Contact",
            url: "#contact",
            title: "save out contact"
          },
        ]
      }
    },
    async mounted(){
      let scrollpos = window.scrollY
      const navbar = document.querySelector("#navbar")
      const navbar_height = navbar.offsetHeight

      const add_class_on_scroll = () => {
        navbar.classList.add("bg-gradient-accent")
      }
      const remove_class_on_scroll = () => {
        navbar.classList.remove("bg-gradient-accent")
      }

      window.addEventListener('scroll', function() { 
        scrollpos = window.scrollY;

        if (scrollpos >= navbar_height) { add_class_on_scroll() }
        else { remove_class_on_scroll() }
      })

      // experience
      const exp_token = "AKfycbysDNKbTBXISo0cvKz6IELe9Ji7JyYw0cinMoS_GpSAZt7DKZwBFfZXNbFyAGW2MjJc";
      var exp = new experience(exp_token);
      var res = await exp.getAllData();
      this.exp_data = res.data
      this.isLoading = false;
      console.log(this.exp_data);

      // tilt.js
      VanillaTilt.init(document.querySelectorAll(".tilt"), {
          max: 25,
          speed: 400
      });
    },
    computed:{
      vendors_count(){
        return this.exp_data? this.exp_data.vendors.length: 0;
      },
      documents_count(){
        return this.exp_data.experiences.reduce((a,b)=> a + b.data.length, 0);
      }
    }
  }
</script>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
