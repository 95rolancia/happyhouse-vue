<template>
  <naver-maps
    class="map"
    :height="height"
    :width="width"
    :mapOptions="mapOptions"
    :initLayers="initLayers"
    @load="onLoad"
    @dragend="drag"
  >
    <div v-for="(house, index) in houseList" :key="index">
      <naver-marker
        :lat="+house.houserent_lat"
        :lng="+house.houserent_lng"
        @click="onMarkerClicked(index)"
        @load="onMarkerLoaded"
      />
      <naver-info-window :isOpen="info" :marker="marker" @load="onWindowLoad">
        <h3>{{ info_detail }}</h3>
      </naver-info-window>
    </div>
  </naver-maps>
</template>

<script>
export default {
  name: "Map",
  props: ["loc", "houseList"],
  data() {
    return {
      width: 1500,
      height: 800,
      info: true,
      info_detail: "",
      markerList: [],
      marker: null,
      count: 1,
      map: null,
      isCTT: false,
      mapOptions: {
        lat: this.loc.lat,
        lng: this.loc.lng,
        zoom: 17,
        // zoomControl: true,
        // zoomControlOptions: { position: "TOP_RIGHT" },
        mapTypeControl: true,
      },
      initLayers: [
        "BACKGROUND",
        "BACKGROUND_DETAIL",
        "POI_KOREAN",
        "TRANSIT",
        "ENGLISH",
        "CHINESE",
        "JAPANESE",
      ],
    };
  },
  methods: {
    onLoad(vue) {
      this.map = vue;
    },
    onWindowLoad() {},
    onMarkerClicked(index) {
      this.marker = this.markerList[index];
      this.$emit("markerClicked", index);
    },
    onMarkerLoaded(vue) {
      this.marker = vue.marker;
      this.markerList.push(this.marker);
    },
    drag() {
      this.$emit("drag", {
        lat: this.map.map.center.y,
        lng: this.map.map.center.x,
      });
    },
  },
};
</script>
<style scoped>
.map {
  z-index: 2;
}
.info-window-container {
  display: flex;
  font-size: 0.5rem;
  padding: 10px;
  width: 300px;
  height: 100px;
}

@media screen and (max-width: 24rem) {
  #vue-naver-maps {
    width: 100% !important;
    height: 100% !important;
  }
}
</style>
