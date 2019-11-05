<template>
  <header>
    <div class="logo">exchange</div>
    <nav>
      <div class="menu-item">
        How it works
        <div class="menu-item-content">
          <ul>
            <li>Test content</li>
          </ul>
        </div>
      </div>
      <div class="menu-item">Support</div>
      <div class="menu-item">For partners</div>
      <div class="menu-item">
        Our solutions
        <div class="menu-item-content">
          <ul>
            <li>Solution1</li>
            <li>Solution2</li>
            <li>Solution3</li>
            <li>Solution4</li>
            <li>Solution5</li>
          </ul>
        </div>
      </div>
    </nav>
  </header>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'

@Component
export default class Header extends Vue {}
</script>

<style scoped>
header {
  display: flex;
  justify-content: space-between;
}

.logo {
  color: white;
  font-weight: 800;
  font-size: 1.5 rem;
}

nav {
  display: flex;
}

.menu-item {
  position: relative;
  font-weight: 400;
  font-size: 1rem;
  padding-right: 3rem;
  padding: 1rem;
  color: white;
  cursor: pointer;
}

.menu-item:hover .menu-item-content {
  display: block;
  animation: showMenu 0.2s ease-out;
  animation-fill-mode: forwards;
}

.menu-item-content {
  position: absolute;
  overflow: hidden;
  left: 0;
  top: 100%;
  background-color: rgba(255, 255, 255, 0.95);
  width: 100%;
  opacity: 0;
  display: none;
  border-radius: 0.2rem;
}

.menu-item-content ul {
  list-style: none;
  padding: 0.5rem 1rem;
  margin: 0;
}

.menu-item-content ul li {
  margin: 0.5rem 0;
  font-weight: 400;
  color: black;
  cursor: pointer;
}

@keyframes showMenu {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
</style>
