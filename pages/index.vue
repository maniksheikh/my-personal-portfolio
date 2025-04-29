<template>
  <div class="main-container">
    <div class="hero-section">
      <div class="profile-image animate-profile">
        <img src="/profile.JPG" alt="Profile" />
      </div>
      <div class="hero-content">
        <h1 class="hero-title">
          <span>Building Tomorrow's</span><br />
          <span class="gradient-text">AI Solutions</span>
        </h1>
        <p class="hero-description">
          "Hi, I'm Manik Sheikh — a self-taught Frontend Developer with 2 years
          of experience. I specialize in building responsive, user-friendly web
          interfaces using modern technologies. Passionate about clean code,
          UI/UX, and continuous learning.
        </p>
      </div>
    </div>
    <!-- Build section  -->
    <div class="build-section">
      <div class="build-content">
        <h2 class="build-title">A True Builder</h2>
        <div class="box-content">
          <div class="box-1">
            <div class="icon-wrapper">
              <Brain />
            </div>
            <h3>Engineering</h3>
            <p class="build-description">
              Software engineering with expertise in Web and AI Technologies.
            </p>
          </div>
          <div class="box-2">
            <div class="icon-wrapper">
              <Rocket />
            </div>
            <h3>Design</h3>
            <p class="build-description">
              Creating intuitive user experiences and visually appealing interfaces.
            </p>
          </div>
          <div class="box-3">
            <div class="icon-wrapper">
              <Target />
            </div>
            <h3>Marketing</h3>
            <p class="build-description">
              Building and growing products with effective marketing strategies.
            </p>
          </div>
        </div>
      </div>
    </div>
    <!-- Projects section -->
    <div class="projects-container">
      <h1>Projects</h1>
      <div class="grid">
        <div 
          class="card" 
          v-for="project in projects" 
          :key="project.id" 
          :class="project.colorClass"
          @click="handleProjectClick(project)"
        >
          <div class="title-svg">
            <h2>{{ project.title }}
              <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                class="lucide lucide-external-link w-4 h-4 text-orange-400 opacity-70 group-hover:opacity-100 transition-colors">
                <path d="M15 3h6v6"></path>
                <path d="M10 14 21 3"></path>
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
              </svg>
            </h2>
          </div>
          <p>{{ project.description }}</p>
          <div class="tags">
            <span 
              v-for="tag in project.tags" 
              :key="tag" 
              class="tag"
              @click="handleTagClick(project)"
            >{{ tag }}</span>
          </div>
        </div>
      </div>
    </div>


  </div>
</template>

<script setup>
import { Brain, Rocket, Target } from "lucide-vue-next";
import projects from "../data/projects.json";

const handleProjectClick = (project) => {
  if (project.link) {
    window.open(project.link, '_blank');
  }
};

const handleTagClick = (project) => {
  if (project.id === 'vocals') {
    window.open('https://vocalo.ai/', '_blank');
  }
};

useHead({
  title: "My Portfolio",
  meta: [{ name: "description", content: "My Portfolio" }],
});
</script>

<style lang="scss">
.main-container {
  font-family: "Inter", sans-serif;
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  margin: auto;
  max-width: 1200px;

  .hero-section {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 5rem;
    height: 80vh;
    padding: 0 2rem;

    .profile-image {
      width: 150px;
      height: 160px;
      border-radius: 50%;
      overflow: hidden;
      display: flex;
      justify-content: center;
      align-items: center;
      border: 2px solid rgba(228, 80, 183, 0.2);
      box-shadow: 0 0 20px rgba(255, 255, 255, 0.1);
      flex-shrink: 0;
      animation: border-glow 3s infinite;
      transition: transform 0.3s ease-in-out;

      &:hover {
        transform: scale(1.05);
      }

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        object-position: top;
        transition: transform 0.5s ease-in-out;

        &:hover {
          transform: scale(1.1);
        }
      }
    }

    .hero-content {
      width: 100%;
      max-width: 700px;
      text-align: left;

      .hero-title {
        font-size: 3.5rem;
        font-weight: 700;
        color: rgb(75, 71, 71);

        .gradient-text {
          font-size: 5rem;
          font-weight: 800;
          background: linear-gradient(90deg, #00cfff, #3a3eff);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          transition: all 0.3s ease-in-out;
          display: inline-block;

          &:hover {
            transform: scale(1.02);
          }
        }
      }

      .hero-description {
        font-size: 1.1rem;
        font-weight: 400;
        color: #807878;
        line-height: 1.6;
      }
    }
  }

  .build-section {
    .build-content {
      .build-title {
        text-align: center;
        font-size: 3rem;
        font-weight: 700;
        color: rgb(75, 71, 71);
        margin-bottom: 2rem;
      }

      .box-content {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 2rem;

        .box-1,
        .box-2,
        .box-3 {
          text-align: center;
          align-items: center;
          justify-items: center;
          background: rgba(255, 255, 255, 0.05);
          border-radius: 10px;
          padding: 2rem;
          cursor: pointer;
          transition: all 0.3s ease-in-out;

          .icon-wrapper {
            transition: all 0.3s ease-in-out;
          }

          &:hover {
            .icon-wrapper {
              transform: translateY(-5px) scale(1.1);
            }
          }

          &.box-1 {
            border: 2px solid rgba(58, 62, 255, 0.3);
            box-shadow: 0 10px 20px rgba(58, 62, 255, 0.1);

            svg {
              color: #3a3eff;
            }

            h3 {
              color: #6567e6;
            }

            &:hover {
              border-color: rgba(58, 62, 255, 0.5);
              box-shadow: 0 10px 20px rgba(58, 62, 255, 0.2);
            }
          }

          &.box-2 {
            border: 2px solid rgba(228, 80, 183, 0.3);
            box-shadow: 0 10px 20px rgba(228, 80, 183, 0.1);

            svg {
              color: #e450b7;
            }

            h3 {
              color: #e26ebf;
            }

            &:hover {
              border-color: rgba(228, 80, 183, 0.5);
              box-shadow: 0 10px 20px rgba(228, 80, 183, 0.2);
            }
          }

          &.box-3 {
            border: 2px solid rgba(0, 255, 136, 0.3);
            box-shadow: 0 10px 20px rgba(0, 255, 136, 0.1);

            svg {
              color: #00ff88;
            }

            h3 {
              color: #53e29f;
            }

            &:hover {
              border-color: rgba(0, 255, 136, 0.5);
              box-shadow: 0 10px 20px rgba(0, 255, 136, 0.2);
            }
          }

          svg {
            width: 40px;
            height: 40px;
            margin-bottom: 1rem;
          }

          h3 {
            font-size: 1.5rem;
            font-weight: 600;
            margin-bottom: 1rem;
          }

          .build-description {
            font-size: 1rem;
            color: #807878;
            line-height: 1.5;
          }
        }
      }
    }
  }

  @media (max-width: 768px) {
    .main-container {
      .build-section {
        .build-content {
          grid-template-columns: 1fr;

          .build-title {
            font-size: 2.5rem;

            .gradient-text {
              font-size: 3rem;
            }
          }
        }
      }
    }
  }

  .projects-container {
    margin-top: 8rem;
    padding: 2rem 0;
    min-height: 80vh;

    h1 {
      text-align: center;
      font-size: 3rem;
      margin-bottom: 3rem;
      font-weight: bold;
    }

    .grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
      gap: 2rem;
      justify-items: center;
    }

    .card {
      background: linear-gradient(145deg, #0e0e12, #16161d);
      border-radius: 1rem;
      padding: 2rem;
      box-shadow: 0 0 10px rgba(255, 255, 255, 0.05);
      transition: all 0.3s ease-in-out;
      border: 1px solid transparent;
      position: relative;
      overflow: hidden; 
      cursor: pointer;

      &::before {
        content: '';
        position: absolute;
        top: 0;
        left: -100%;
        width: 100%;
        height: 100%;
        background: linear-gradient(
          90deg,
          transparent,
          rgba(255, 255, 255, 0.1),
          transparent
        );
        transition: left 1s ease-in-out;
      }

      &:hover::before {
        left: 100%;
      }

      &:hover {
        box-shadow: 0 10px 20px rgba(255, 255, 255, 0.1);
        background: linear-gradient(145deg, #12121a, #1a1a24);
        border-color: rgba(255, 255, 255, 0.1);

        .title-svg svg {
          opacity: 1;
        }
      }

      .title-svg {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;

        h2 {
          font-size: 1.25rem;
          margin-bottom: 1rem;
          display: flex;
          align-items: center;
          justify-content: space-between;
          width: 100%;
          gap: 0.5rem;

            svg {
              width: 1.3rem;
              height: 1.3rem;
              stroke: currentColor;
              opacity: 0.7;
              cursor: pointer;
            }
        }
      }

      p {
        font-size: 0.95rem;
        color: #c5c5c5;
        margin-bottom: 1.2rem;
        line-height: 1.6;
      }

      .tags {
        display: flex;
        flex-wrap: wrap;
        gap: 0.8rem;

        .tag {
          font-size: 0.75rem;
          padding: 0.3rem 0.6rem;
          border-radius: 0.5rem;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.1);
          color: white;
          backdrop-filter: blur(5px);
          position: relative;
          overflow: hidden;

          &:hover {
            border-color: rgba(255, 255, 255, 0.3);
            box-shadow: 0 5px 15px rgba(255, 255, 255, 0.1);
            cursor: pointer;
            
            &::before {
              content: '';
              position: absolute;
              top: 0;
              left: -100%;
              width: 100%;
              height: 100%;
              background: linear-gradient(
                90deg,
                transparent,
                rgba(255, 255, 255, 0.1),
                transparent
              );
              animation: shine 1s ease-in-out;
            }
          }
        }
      }

      &.vocals h2 {
        color: #da71ff;
      }

      &.sketch h2 {
        color: #ff5ca2;
      }

      &.luna h2 {
        color: #ffd400;
      }

      &.photo h2 {
        color: #4cc7ff;
      }

      &.story h2 {
        color: #ffa933;
      }

      &.word h2 {
        color: #ff5260;
      }
    }
  }



}

// Animations
@keyframes border-glow {
  0% {
    border-color: rgba(255, 255, 255, 0.2);
  }

  50% {
    border-color: rgba(0, 207, 255, 0.5);
  }

  100% {
    border-color: rgba(255, 255, 255, 0.2);
  }
}

@keyframes fade-in {
  to {
    opacity: 1;
  }
}

@keyframes fade-in-up {
  0% {
    opacity: 0;
    transform: translateY(10px);
  }

  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes pulse {

  0%,
  100% {
    opacity: 1;
  }

  50% {
    opacity: 0.5;
  }
}

@keyframes bounce {

  0%,
  100% {
    transform: translateY(0);
  }

  50% {
    transform: translateY(8px);
  }
}
@keyframes shine {
  to {
    left: 100%;
  }
}
</style>
