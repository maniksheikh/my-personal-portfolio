<template>
  <nav class="navbar">
    <div class="navbar-container">
      <div class="logo">
        <NuxtLink to="/">Manik Sheikh</NuxtLink>
      </div>
      <div class="menu-icon" @click="toggleMenu">
        <div class="bar" :class="{ active: isMenuOpen }"></div>
        <div class="bar" :class="{ active: isMenuOpen }"></div>
        <div class="bar" :class="{ active: isMenuOpen }"></div>
      </div>
      <ul class="nav-links" :class="{ active: isMenuOpen }">
        <li><NuxtLink to="/" @click="closeMenu">Home</NuxtLink></li>
        <li><NuxtLink to="#projects" @click="closeMenu">Projects</NuxtLink></li>
        <li><NuxtLink to="#skills" @click="closeMenu">Skills</NuxtLink></li>
        <li><NuxtLink to="#contact" @click="closeMenu">Contact</NuxtLink></li>
      </ul>
    </div>
  </nav>
</template>

<script setup>
const isMenuOpen = ref(false);

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};

const closeMenu = () => {
  isMenuOpen.value = false;
};
</script>

<style lang="scss">
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000;
  background: rgba(10, 25, 47, 0.85);
  backdrop-filter: blur(10px);
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);

  .navbar-container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 1rem 2rem;
    display: flex;
    justify-content: space-between;
    align-items: center;

    .logo {
      a {
        font-size: 1.5rem;
        font-weight: 700;
        background: linear-gradient(135deg, #e450b7 0%, #6f42c1 50%, #2196f3 100%);
        -webkit-background-clip: text;
        background-clip: text;
        -webkit-text-fill-color: transparent;
        text-decoration: none;
        transition: all 0.3s ease;
        &:hover {
          background: linear-gradient(135deg, #ff6b6b 0%, #e450b7 50%, #6f42c1 100%);
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
        }
      }
    }

    .nav-links {
      display: flex;
      gap: 2rem;
      list-style: none;

      li {
        a {
          color: #c5c5c5;
          text-decoration: none;
          font-weight: 500;
          transition: color 0.3s ease;
          &:hover {
            color: #e450b7;
          }
        }
      }
    }

    .menu-icon {
      display: none;
      cursor: pointer;
      flex-direction: column;
      gap: 6px;

      .bar {
        width: 25px;
        height: 2px;
        background-color: #c5c5c5;
        transition: all 0.3s ease;

        &.active {
          &:nth-child(1) {
            transform: rotate(45deg) translate(6px, 6px);
          }
          &:nth-child(2) {
            opacity: 0;
          }
          &:nth-child(3) {
            transform: rotate(-45deg) translate(6px, -6px);
          }
        }
      }
    }
  }
}

@media (max-width: 768px) {
  .navbar {
    .navbar-container {
      .menu-icon {
        display: flex;
      }

      .nav-links {
        position: fixed;
        top: 70px;
        left: 0;
        width: 100%;
        flex-direction: column;
        align-items: center;
        background: rgba(10, 25, 47, 0.95);
        padding: 2rem;
        gap: 1.5rem;
        transform: translateY(-150%);
        transition: transform 0.3s ease;
        backdrop-filter: blur(10px);
        &.active {
          transform: translateY(0);
        }
      }
    }
  }
}
</style>