<template>
  <div class="autocomplete" :class="type">
    <input
      class="input"
      type="text"
      placeholder="지역"
      v-model="selected"
      @keydown.enter.prevent="enter"
      @keydown.down="down"
      @keydown.up="up"
      @input="change"
    />
    <ul class="dropdown-menu" v-bind:class="{ open: openSuggestion }">
      <li
        v-for="(suggestion, $index) in matches"
        v-bind:class="{ active: isActive($index) }"
        @click="suggestionClick($index)"
        :key="$index"
        ref="li"
      >
        <a href="#">{{ suggestion }}</a>
      </li>
    </ul>
  </div>
</template>

<script>
import { address } from "@/assets/address.js";
export default {
  props: {
    select: {
      type: String,
      required: true,
      twoWay: true,
    },
    type: {
      type: String,
    },
  },
  data() {
    return {
      open: false,
      current: 0,
      items: [],
      value: "",
    };
  },
  created() {
    this.items = address;
  },
  computed: {
    matches() {
      return this.items.filter((str) => str.indexOf(this.selected) >= 0);
    },
    openSuggestion() {
      return this.selected !== "" && this.matches.length != 0 && this.open === true;
    },
    selected: {
      get() {
        return this.select;
      },
      set(newVal) {
        this.$emit("change", newVal);
      },
    },
  },
  methods: {
    enter() {
      this.$emit("change", this.matches[this.current]);
      this.open = false;
    },
    up() {
      if (this.current > 0) this.current--;
    },
    down() {
      if (this.current < this.matches.length - 1) this.current++;
      if (this.current >= 9) {
        this.$refs.li
          .find((item) => item.classList.contains("active"))
          .scrollIntoView({ block: "end" });
      }
    },
    isActive(index) {
      return index === this.current;
    },
    change() {
      if (this.open === false) {
        this.open = true;
      }
      this.current = 0;
    },
    suggestionClick(index) {
      this.$emit("change", this.matches[index]);
      this.open = false;
    },
  },
};
</script>
<style scoped>
.input {
  font-size: 2.8rem;
  padding: 0.5em;
  outline: none;
  border: none;
}

.dropdown-menu {
  display: none;
  position: absolute;
  z-index: 0;
  top: 34em;
  width: 20em;
  max-height: 20em;
  overflow-y: auto;
  background-color: whitesmoke;
  margin: 1em;
}

.dropdown-menu.open {
  display: flex;
  flex-direction: column;
}

.dropdown-menu li {
  padding: 0.5em 1em;
}

.active {
  background-color: darkgray;
}

/* type 별 스타일링  */
.houseAddForm .input {
  font-size: 1rem;
  border: 0.5px solid black;
  width: 94%;
}

.houseAddForm .dropdown-menu {
  top: 14.5em;
  left: 1em;
}

@media screen and (max-width: 24rem) {
  .input {
    font-size: 1.2rem;
    border-radius: 0.2em;
  }

  .dropdown-menu {
    top: 25.7em;
    left: 1em;
    width: 19.7em;
  }
}
</style>
