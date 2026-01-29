<template>
  <div class="main-container">
    <Navbar />
    <Background />
    <div id="/" class="hero-section">
      <div class="profile-image animate-profile">
        <img src="@/assets/Manik.jpg" alt="Profile" />
      </div>
      <div class="hero-content">
        <h1 class="hero-title">
          <span>Manik Sheikh</span><br />
          <span id="typewriter"></span> <br />
          <span class="gradient-text">Currently Work @CONNEKT STUDIO</span>
        </h1>
        <p class="hero-description">
          "Hi, I'm Manik Sheikh — a self-taught Frontend Developer with 2.5 years
          of experience. I specialize in building responsive, user-friendly web
          interfaces using modern technologies. Passionate about clean code,
          UI/UX, and continuous learning. Now i am working Social media Marketing and learning this.
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
            <h3>Design Implement</h3>
            <p class="build-description">
              Creating intuitive user experiences and visually appealing
              interfaces.
            </p>
          </div>
          <div class="box-3">
            <div class="icon-wrapper">
              <Target />
            </div>
            <h3>Innovation</h3>
            <p class="build-description">
              Turning creative ideas into practical solutions with cutting-edge technologies.
            </p>
          </div>
        </div>
      </div>
    </div>
    <!-- Projects section -->
    <div id="projects" class="projects-container">
      <h1>My Projects</h1>
      <vue3-marquee
        :duration="25"
        :spacing="40"
        :pauseOnHover="true"
        gradient
        gradientColor="[16, 16, 16]">
        <div class="project-grid">
          <div
            class="project-card"
            v-for="project in projects"
            :key="project.id"
            :class="project.colorClass"
            @click="handleProjectClick(project)">
            <div class="title-svg">
              <h2>
                {{ project.title }}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="28"
                  height="28"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
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
      </vue3-marquee>
    </div>
    <!-- Achivement section -->
    <section class="achievements">
      <h2 class="title">Achievements</h2>
      <div class="grid">
        <div class="card">
          <div class="icon clock">
            <Clock />
          </div>
          <div class="value">2+</div>
          <div class="label">Years Active</div>
        </div>
        <div class="card">
          <div class="icon box">
            <Box />
          </div>
          <div class="value">5+</div>
          <div class="label">Products Creating</div>
        </div>
        <div class="card">
          <div class="icon code">
            <Code />
          </div>
          <div class="value">5+</div>
          <div class="label">Technologies Mastered</div>
        </div>
      </div>
    </section>
    <!-- Tech Stack Skills -->
    <div id="skills" class="tech-stack-container">
      <h2>Skills & Technologies</h2>
      <div class="tech-stacks">
        <div class="stacks" v-for="(stack, index) in stacks" :key="index">
          <h3>
            <span class="stack-icon" v-html="stack.icon"></span>
            <span class="stack-title">{{ stack.title }}</span>
          </h3>
          <hr />
          <div class="items-grid">
            <div v-for="item in stack.items" :key="item.name" class="tech-item">
              {{ item.name }}
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Footer section  -->
    <div id="contact" class="footer-section">
      <h2 class="contact-heading">Get in Touch</h2>
      <div class="contact-container">
        <div class="contact-form">
          <form @submit.prevent="handleSubmit" action="https://formspree.io/f/xovdlwqj" method="POST">
            <div class="form-group">
              <input type="text" v-model="formData.name" name="name" placeholder="Your Name" required />
            </div>
            <div class="form-group">
              <input type="email" v-model="formData.email" name="email" placeholder="Your Email" required />
            </div>
            <div class="form-group">
              <input type="text" v-model="formData.subject" name="subject" placeholder="Subject" required />
            </div>
            <div class="form-group">
              <textarea v-model="formData.message" name="message" placeholder="Your Message" required></textarea>
            </div>
            <button type="submit" class="submit-btn" :disabled="submitting">
              {{ submitting ? 'Sending...' : 'Send Message' }}
            </button>
          </form>
        </div>
        <div class="contact-icons">
          <a href="https://www.linkedin.com/in/muhammad-manik-sheikh-6ab92433b/" target="_blank" class="contact-item">
          <Linkedin /> <span>LinkedIn</span>
        </a>
        <a href="mailto:example@email.com" class="contact-item">
          <Mail /> <span>Email</span>
        </a>
        <a href="https://github.com/maniksheikh" target="_blank" class="contact-item">
          <Github /> <span>GitHub</span>
        </a>
        <a href="https://x.com/dev_man50733" target="_blank" class="contact-item">
          <Twitter /> <span>Twitter</span>
        </a>
      </div>
    </div>
      <hr />
      <p class="copyright">
        &copy; {{ currentYear }} Manik Sheikh. All rights reserved.
      </p>
    </div>
  </div>
</template>

<script setup>
import { Vue3Marquee } from 'vue3-marquee';
import {
  Brain,
  Rocket,
  Target,
  Clock,
  Box,
  Mail,
  Twitter,
  Linkedin,
  Github,
  Code,
} from "lucide-vue-next";
import Background from "../components/Background.vue";
import Navbar from "../components/Navbar.vue";
import projects from "../data/projects.json";
import stacks from "../data/techData.json";
import { ref, nextTick, onMounted } from 'vue';
import { useHead } from '@unhead/vue';

const currentYear = new Date().getFullYear();

const handleProjectClick = (project) => {
  if (project.link) {
    window.open(project.link, "_blank");
  }
};

const handleTagClick = (project) => {
  if (project.id === "vocals") {
    window.open("https://vocalo.ai/", "_blank");
  }
};

const formData = ref({
  name: '',
  email: '',
  subject: '',
  message: ''
});

const submitting = ref(false);
const handleSubmit = async (e) => {
  submitting.value = true;
  
  try {
    const form = e.target;
    const formDataToSend = new FormData(form);
    
    const response = await fetch(form.action, {
      method: 'POST',
      body: formDataToSend,
      headers: {
        'Accept': 'application/json'
      }
    });
    
    if (response.ok) {
      formData.value = {
        name: '',
        email: '',
        subject: '',
        message: ''
      };
      
      form.reset();
      await nextTick();
      
      alert('Thank you for your message! I will get back to you soon.');
    } else {
      throw new Error('Failed to send message');
    }
  } catch (error) {
    console.error('Form submission error:', error);
    alert('Sorry, there was an error sending your message. Please try again later.');
  } finally {
    submitting.value = false;
  }
};

useHead({
  title: "My Portfolio",
  meta: [{ name: "description", content: "My Portfolio" }],
});

// Typewriter effect
onMounted(() => {
  const text = "Frontend Developer";
  const typewriterElement = document.getElementById("typewriter");
  let isDeleting = false;
  let i = 0;
  let delta = 100;

  function typeWriter() {
    const currentText = typewriterElement.textContent;
    if (!isDeleting && i <= text.length) {
      typewriterElement.textContent = text.substring(0, i);
      i++;
      delta = 100;
    } else if (isDeleting && i >= 0) {
      typewriterElement.textContent = text.substring(0, i);
      i--;
      delta = 50;
    }

    if (i === text.length + 1) {
      isDeleting = true;
      delta = 2000;
    }

    if (i === -1) {
      isDeleting = false;
      i = 0;
      delta = 500;
    }
    setTimeout(typeWriter, delta);
  }
  typeWriter();
});

</script>

<style lang="scss">
.main-container {
  font-family: "Montserrat", sans-serif;
  padding: 70px 0 0 0;
  margin: 0;
  box-sizing: border-box;
  margin: auto;
  max-width: 1200px;
  z-index: 10000000;

  .hero-section {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 5rem;
    min-height: 80vh;
    padding: 2rem;
    margin: 0 auto;
    max-width: 1400px;

    @media (max-width: 968px) {
      flex-direction: column;
      gap: 3rem;
      text-align: center;
      padding: 4rem 1rem;
    }

    .profile-image {
      width: 220px;
      height: 220px;
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
      cursor: pointer;

      @media (max-width: 768px) {
        width: 150px;
        height: 150px;
      }

      &:hover {
        transform: scale(1.05);
        border: 1px gray solid;
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

      @media (max-width: 968px) {
        display: flex;
        flex-direction: column;
        align-items: center;
      }

      .hero-title {
        font-size: 3.7rem;
        font-weight: 700;
        line-height: 1.2;
        margin-bottom: 1.5rem;

        @media (max-width: 768px) {
          font-size: 2.5rem;
        }

        span:first-child {
          background: linear-gradient(135deg, #4e54c8, #8f94fb);
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
          display: inline-block;
          margin-bottom: 15px;
        }

        #typewriter {
          background: linear-gradient(90deg, #3a3eff, #e450b7);
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
          display: inline-block;
        }

        .gradient-text {
          font-size: 1.5rem;
          font-weight: 600;
          background: linear-gradient(90deg, #00cfff, #3a3eff);
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
          transition: all 0.3s ease-in-out;
          display: inline-block;

          @media (max-width: 768px) {
            font-size: 1.2rem;
          }
        }
      }

      .hero-description {
        font-size: 1.2rem;
        font-weight: 400;
        color: #f8f4f4;
        line-height: 1.6;
        max-width: 600px;

        @media (max-width: 768px) {
          font-size: 1rem;
          padding: 0 1rem;
        }
      }
    }
  }

  .build-section {
    .build-content {
      .build-title {
        text-align: center;
        font-size: 3.5rem;
        font-weight: 700;
        background: linear-gradient(135deg, #3a3eff, #e450b7);
        -webkit-background-clip: text;
        background-clip: text;
        -webkit-text-fill-color: transparent;
        margin-bottom: 2.5rem;
        position: relative;
        display: inline-block;
        width: 100%;

        &::before {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(135deg,
              rgba(58, 62, 255, 0.1),
              rgba(228, 80, 183, 0.1));
          filter: blur(8px);
          z-index: -1;
          border-radius: 8px;
        }
        @media (max-width: 768px) {
          font-size: 2.5rem;
        }
      }

      .box-content {
        display: grid;
        grid-template-columns: repeat(3, minmax(0, 1fr));
        gap: 2rem;
        padding: 0 2rem;

        @media (max-width: 968px) {
          grid-template-columns: repeat(2, 1fr);
          padding: 0 1rem;
        }

        @media (max-width: 640px) {
          grid-template-columns: 1fr;
          padding: 0 1rem;
        }

        .box-1,
        .box-2,
        .box-3 {
          width: 100%;
          min-height: 250px;
          display: flex;
          flex-direction: column;
          text-align: center;
          align-items: center;
          justify-content: center;
          background: rgba(255, 255, 255, 0.05);
          border-radius: 10px;
          padding: 2rem;
          cursor: pointer;
          transition: all 0.3s ease-in-out;

          @media (max-width: 768px) {
            min-height: 200px;
            padding: 1.5rem;
          }

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
            @media (max-width: 768px) {
              width: 32px;
              height: 32px;
            }
          }

          h3 {
            font-size: 1.8rem;
            font-weight: 600;
            margin-bottom: 1rem;
            @media (max-width: 768px) {
              font-size: 1.25rem;
            }
          }

          .build-description {
            font-size: 1rem;
            color: #f8f4f4;
            line-height: 1.7;
            @media (max-width: 768px) {
              font-size: 0.9rem;
            }
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
    min-height: 60vh;

    @media (max-width: 768px) {
      margin-top: 3rem;
      min-height: 100%;
    }

    h1 {
      text-align: center;
      font-size: 3.5rem;
      margin-bottom: 3rem;
      font-weight: bold;
      background: linear-gradient(135deg, #e450b7, #ff6b6b);
      -webkit-background-clip: text;
      background-clip: text;
      -webkit-text-fill-color: transparent;
      display: inline-block;
      width: 100%;
      position: relative;

      @media (max-width: 768px) {
        font-size: 2.5rem;
        margin-bottom: 2rem;
      }

      @media (max-width: 480px) {
        font-size: 2rem;
      }

      &::before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: linear-gradient(135deg,
            rgba(58, 62, 255, 0.1),
            rgba(228, 80, 183, 0.1));
        filter: blur(8px);
        z-index: -1;
        border-radius: 8px;
      }
    }

    .project-grid {
      display: flex;
      gap: 2rem;
      width: 100%;
      padding: 0 2rem;
      flex-wrap: nowrap;
      align-items: stretch;
      @media (max-width: 768px) {
        gap: 1.5rem;
        padding: 0 1rem;
      }
    }

    .project-card {
      min-width: 350px;
      max-width: 400px;
      width: 100%;
      background: linear-gradient(145deg, #0e0e12, #16161d);
      border-radius: 1rem;
      padding: 2rem;
      box-shadow: 0 0 10px rgba(255, 255, 255, 0.05);
      transition: all 0.3s ease-in-out;
      border: 1px solid transparent;
      position: relative;
      overflow: hidden;
      cursor: pointer;
      flex-shrink: 0;

      @media (max-width: 768px) {
        padding: 1.5rem;
        min-width: 300px;
        max-width: 350px;
      }
      @media (max-width: 480px) {
        min-width: 280px;
        max-width: 320px;
      }

      &::before {
        content: "";
        position: absolute;
        top: 0;
        left: -100%;
        width: 100%;
        height: 100%;
        background: linear-gradient(90deg,
            transparent,
            rgba(255, 255, 255, 0.1),
            transparent);
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

          @media (max-width: 768px) {
            font-size: 1.1rem;
          }

          svg {
            width: 1.3rem;
            height: 1.3rem;
            stroke: currentColor;
            opacity: 0.7;
            cursor: pointer;
            @media (max-width: 768px) {
              width: 1rem;
              height: 1rem;
            }
          }
        }
      }

      p {
        font-size: 0.95rem;
        color: #c5c5c5;
        margin-bottom: 1.2rem;
        line-height: 1.6;
        @media (max-width: 768px) {
          font-size: 0.9rem;
        }
      }

      .tags {
        display: flex;
        flex-wrap: wrap;
        gap: 0.8rem;
        @media (max-width: 768px) {
          gap: 0.6rem;
        }

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

          @media (max-width: 768px) {
            font-size: 0.7rem;
            padding: 0.25rem 0.5rem;
          }

          &:hover {
            border-color: rgba(255, 255, 255, 0.3);
            box-shadow: 0 5px 15px rgba(255, 255, 255, 0.1);
            cursor: pointer;
            &::before {
              content: "";
              position: absolute;
              top: 0;
              left: -100%;
              width: 100%;
              height: 100%;
              background: linear-gradient(90deg,
                  transparent,
                  rgba(255, 255, 255, 0.1),
                  transparent);
              animation: shine 1s ease-in-out;
            }
          }
        }
      }

      &.vocals h2 {
        color: #da71ff;
      }
      &.invoice h2 {
        color: #00ff88;
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
      &.product-shoping h2 {
        color: #ff5260;
      }
      &.linkedin-clone h2 {
        color: #0077b5;
      }
    }
  }

  .achievements {
    margin-top: 2rem;
    padding: 2rem 0;
    min-height: 50vh;
    @media (max-width: 768px) {
      margin-top: 2rem;
      padding: 1rem;
      min-height: auto;
    }

    .title {
      text-align: center;
      font-size: 3rem;
      font-weight: 700;
      background: linear-gradient(135deg, #00ff88, #00cfff);
      -webkit-background-clip: text;
      background-clip: text;
      -webkit-text-fill-color: transparent;
      margin-bottom: 3rem;
      position: relative;
      display: inline-block;
      width: 100%;

      @media (max-width: 768px) {
        font-size: 2.5rem;
        margin-bottom: 2rem;
      }
      @media (max-width: 480px) {
        font-size: 2rem;
        margin-bottom: 1.5rem;
      }
    }

    .grid {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 2rem;
      max-width: 1200px;
      margin: 0 auto;

      @media (max-width: 1024px) {
        grid-template-columns: repeat(2, 1fr);
        gap: 1.5rem;
      }
      @media (max-width: 640px) {
        grid-template-columns: 1fr;
        gap: 1rem;
        padding: 0;
      }

      .card {
        background: rgba(255, 255, 255, 0.05);
        border-radius: 1rem;
        padding: 2rem;
        text-align: center;
        transition: all 0.3s ease;
        border: 1px solid rgba(255, 255, 255, 0.1);
        position: relative;
        overflow: hidden;
        cursor: pointer;

        @media (max-width: 768px) {
          padding: 1.5rem;
        }

        @media (max-width: 480px) {
          padding: 1.25rem;
        }

        &:hover {
          box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);

          &:nth-child(1) {
            border: 2px solid #3a3eff;
            box-shadow: 0 10px 20px rgba(58, 62, 255, 0.1);
          }
          &:nth-child(2) {
            border: 2px solid #e450b7;
            box-shadow: 0 10px 20px rgba(228, 80, 183, 0.1);
          }
          &:nth-child(3) {
            border: 2px solid #00ff88;
            box-shadow: 0 10px 20px rgba(0, 255, 136, 0.1);
          }
          &:nth-child(4) {
            border: 2px solid #ffd700;
            box-shadow: 0 10px 20px rgba(255, 215, 0, 0.1);
          }
        }

        .icon {
          margin-bottom: 1rem;
          display: flex;
          justify-content: center;
          align-items: center;

          svg {
            width: 2rem;
            height: 2rem;
            color: #00ff88;
            @media (max-width: 768px) {
              width: 1.75rem;
              height: 1.75rem;
            }
          }

          &.clock svg {
            color: #e450b7;
          }
          &.box svg {
            color: #3a3eff;
          }
          &.users svg {
            color: #00ff88;
          }
          &.star svg {
            color: #ffd700;
          }   
          &.code svg {
            color: #00cfff; 
          }
          &.book svg {
            color: #ff5ca2;
          }
        }

        .value {
          font-size: 2.5rem;
          font-weight: 700;
          margin-bottom: 0.5rem;
          background: linear-gradient(135deg, #00ff88, #00cfff);
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;

          @media (max-width: 768px) {
            font-size: 2rem;
          }
          @media (max-width: 480px) {
            font-size: 1.75rem;
          }
        }

        .label {
          font-size: 1rem;
          color: #f8f4f4;
          @media (max-width: 768px) {
            font-size: 0.9rem;
          }
        }
      }
    }
  }

  $primary-color: #3a3eff;
  $secondary-color: #e450b7;
  $accent-color: #00ff88;
  $text-primary: rgb(75, 71, 71);
  $text-secondary: #807878;
  $card-bg: rgba(255, 255, 255, 0.05);
  $border-color: rgba(255, 255, 255, 0.1);
  $transition: all 0.3s ease-in-out;

  .tech-stack-container {
    padding: 4rem 2rem;
    font-family: Inter, "Segoe UI", sans-serif;

    @media (max-width: 768px) {
      padding: 2rem 1rem;
    }

    h2 {
      text-align: center;
      font-size: 3rem;
      font-weight: 700;
      background: linear-gradient(135deg, #ffd400, #ff5ca2);
      -webkit-background-clip: text;
      background-clip: text;
      -webkit-text-fill-color: transparent;
      margin-bottom: 3rem;
      position: relative;
      display: inline-block;
      width: 100%;
      @media (max-width: 768px) {
        font-size: 2.5rem;
      }
    }

    .tech-stacks {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 3rem;
      max-width: 1200px;
      margin: 0 auto;

      @media (max-width: 1024px) {
        grid-template-columns: repeat(2, 1fr);
      }

      @media (max-width: 640px) {
        grid-template-columns: 1fr;
      }

      .stacks {
        background: rgb(10, 25, 47);
        border-radius: 1rem;
        padding: 2rem;
        border: 1px solid $border-color;
        transition: $transition;

        &:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
        }

        h3 {
          font-size: 1.5rem;
          font-weight: 600;

          color: $primary-color;
          text-align: center;

          .stack-title {
            font-size: 1.5rem;
            color: rgb(204, 214, 246);
            margin-bottom: 1.5rem;
            margin-left: 1rem;
            -webkit-text-fill-color: transparent;
            position: relative;
            display: inline-block;
            background: linear-gradient(90deg,
                rgb(100, 255, 218),
                rgb(204, 214, 246));
            -webkit-background-clip: text;
            background-clip: text;
          }
        }

        .items-grid {
          display: flex;
          flex-direction: column;
          gap: 1rem;
          margin-top: 1.5rem;

          .tech-item {
            background: rgba(255, 255, 255, 0.08);
            padding: 0.8rem;
            border-radius: 0.5rem;
            text-align: center;
            font-size: 0.9rem;
            color: rgb(204, 214, 246);
            transition: $transition;
            cursor: pointer;
            &:hover {
              background: rgba(255, 255, 255, 0.12);
              color: white;
              transform: translateY(-2px);
            }
          }
        }

        &:nth-child(1) {
          border-color: rgba($primary-color, 0.3);
          &:hover {
            border-color: rgba($primary-color, 0.8);
          }
        }

        &:nth-child(2) {
          border-color: rgba($secondary-color, 0.3);
          &:hover {
            border-color: rgba($secondary-color, 0.8);
          }
        }

        &:nth-child(3) {
          border-color: rgba($accent-color, 0.3);
          &:hover {
            border-color: rgba($accent-color, 0.8);
          }
        }
      }
    }
  }

  .footer-section {
    padding: 4rem 2rem;
    text-align: center;
    border-radius: 1rem;
    position: relative;
    z-index: 1;

    @media (max-width: 768px) {
      padding: 2rem 1rem;
    }

    .contact-form {
      max-width: 650px;
      margin: 0 auto 3rem;
      padding: 2rem;
      background: rgba(255, 255, 255, 0.05);
      border-radius: 1rem;
      border: 1px solid rgba(255, 255, 255, 0.1);
      z-index: 1;

      @media (max-width: 768px) {
        padding: 1.5rem;
        margin-bottom: 2rem;
      }

      .form-group {
        margin-bottom: 1.5rem;

        input,
        textarea {
          width: 100%;
          padding: 1rem;
          background: rgba(255, 255, 255, 0.08);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 0.5rem;
          color: #fff;
          font-size: 1rem;
          transition: all 0.3s ease;
          &:focus {
            outline: none;
            border-color: #3a3eff;
            background: rgba(255, 255, 255, 0.12);
          }
          &::placeholder {
            color: rgba(255, 255, 255, 0.5);
          }
        }

        textarea {
          min-height: 150px;
          resize: vertical;
        }
      }

      .submit-btn {
        padding:12px 2rem ;
        background: linear-gradient(135deg, #3a3eff, #e450b7);
        border: none;
        border-radius: 0.5rem;
        color: #fff;
        font-size: 1rem;
        font-weight: 600;
        cursor: pointer;
        transition: all 0.3s ease;
        &:hover {
          transform: translateY(-2px);
          box-shadow: 0 5px 15px rgba(58, 62, 255, 0.3);
        }
        &:active {
          transform: translateY(0);
        }
      }
    }

    .contact-heading {
      font-size: 3.5rem;
      font-weight: 700;
      margin-bottom: 3rem;
      background: linear-gradient(135deg, #00ff88, #3a3eff);
      -webkit-background-clip: text;
      background-clip: text;
      -webkit-text-fill-color: transparent;

      @media (max-width: 768px) {
        font-size: 2.5rem;
        margin-bottom: 2rem;
      }
      @media (max-width: 480px) {
        font-size: 2rem;
      }
    }

    .contact-icons {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 2rem;
      justify-content: center;
      align-items: center;
      margin-bottom: 3rem;
      max-width: 700px;
      margin: 0 auto;
      @media (max-width: 768px) {
        grid-template-columns: repeat(2, 1fr);
        gap: 1.5rem;
      }

      @media (max-width: 768px) {
        gap: 2rem;
        margin-bottom: 2rem;
      }

      @media (max-width: 480px) {
        gap: 1.5rem;
        flex-direction: column;
        align-items: center;
      }

      .contact-item {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 0.5rem;
        padding: 1rem;
        border-radius: 8px;
        transition: all 0.3s ease;
        text-decoration: none;
        color: #fff;
        &:hover {
          color: #e450b7;
          transform: translateY(-2px);
        }

        svg {
          width: 24px;
          height: 24px;
        }
        span {
          font-size: 1rem;
        }
      }
    }

    hr {
      border: none;
      border-top: 1px solid rgba(255, 255, 255, 0.1);
      margin: 2rem 0;
      @media (max-width: 768px) {
        margin: 1.5rem 0;
      }
    }

    .copyright {
      background: linear-gradient(90deg, #06c2cf, #d32ca1);
      -webkit-background-clip: text;
      background-clip: text;
      -webkit-text-fill-color: transparent;
      font-size: 1rem;
      text-align: center;
      opacity: 0.6;
      transition: opacity 0.3s ease;
      &:hover {
        opacity: 1;
      }
    }
  }

  @keyframes moveStars {
    from {
      background-position: 0 0;
    }
    to {
      background-position: -1000px 1000px;
    }
  }
}

// Animations
@keyframes border-glow {
  0% {
    box-shadow: 0 0 20px rgba(228, 80, 183, 0.2);
  }
  50% {
    box-shadow: 0 0 30px rgba(228, 80, 183, 0.4);
  }
  100% {
    box-shadow: 0 0 20px rgba(228, 80, 183, 0.2);
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
