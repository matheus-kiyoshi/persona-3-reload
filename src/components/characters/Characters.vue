<template>
  <v-carousel
    show-arrows="hover"
    hide-delimiter-background
    hide-delimiters
    delimiter-icon="mdi-square"
    height="100vh"
    style="z-index: 999;"
  >
    <v-carousel-item>
      <div class="item">
        <div class="prota">
          <div class="textBox texbox">
            <h1>
              <svg fill="#fff" id="_レイヤー_2" data-name="レイヤー 2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 747.37 211.14"><g id="SEES_text"><g><path class="cls-1" d="m1.68,198.79l-1.68-42.96h1.68c11.23,34.54,31.45,51.38,56.16,51.38,22.74,0,44.08-15.44,44.08-42.4s-20.22-37.06-44.36-49.14l-14.04-7.02C23.58,98.83,4.21,85.92,4.21,55.88,4.21,23.87,27.8,0,61.21,0c15.44,0,36.22,5.05,49.7,12.07v33.41h-1.68C98.27,16.29,80.86,3.93,60.09,3.93c-23.59,0-39.31,16-39.31,39.59s18.53,33.69,35.1,42.12l14.04,7.02c24.71,12.35,48.57,25.55,48.57,59.24s-25.83,59.24-64.02,59.24c-16.29,0-39.87-5.05-52.79-12.35Z"></path><path class="cls-1" d="m129.69,195.14c0-8.99,7.3-16.29,16.29-16.29s16,7.3,16,16.29-7.3,16-16,16-16.29-7.3-16.29-16Z"></path><path class="cls-1" d="m318.62,160.6l-6.46,47.17h-141.51v-1.68c19.09,0,20.22-12.63,20.22-33.41V38.47c0-20.78-1.12-33.41-20.22-33.41v-1.68h137.3l3.65,42.12h-1.68c-14.32-32.01-23.59-37.62-54.19-37.62h-40.15v91.25h31.45c25.27,0,30.89-6.74,35.66-27.52h1.68v61.49h-1.68c-4.77-19.94-10.39-29.48-35.66-29.48h-31.45v86.48c0,8.42,2.53,13.2,11.23,13.2h33.13c29.76,0,40.43-5.05,57-42.68h1.68Z"></path><path class="cls-1" d="m333,195.14c0-8.99,7.3-16.29,16.29-16.29s16,7.3,16,16.29-7.3,16-16,16-16.29-7.3-16.29-16Z"></path><path class="cls-1" d="m521.93,160.6l-6.46,47.17h-141.51v-1.68c19.09,0,20.22-12.63,20.22-33.41V38.47c0-20.78-1.12-33.41-20.22-33.41v-1.68h137.3l3.65,42.12h-1.68c-14.32-32.01-23.59-37.62-54.19-37.62h-40.15v91.25h31.45c25.27,0,30.89-6.74,35.66-27.52h1.68v61.49h-1.68c-4.77-19.94-10.39-29.48-35.66-29.48h-31.45v86.48c0,8.42,2.53,13.2,11.23,13.2h33.13c29.76,0,40.43-5.05,57-42.68h1.68Z"></path><path class="cls-1" d="m536.31,195.14c0-8.99,7.3-16.29,16.29-16.29s16,7.3,16,16.29-7.3,16-16,16-16.29-7.3-16.29-16Z"></path><path class="cls-1" d="m587.07,198.79l-1.68-42.96h1.68c11.23,34.54,31.45,51.38,56.16,51.38,22.74,0,44.08-15.44,44.08-42.4s-20.22-37.06-44.36-49.14l-14.04-7.02c-19.94-9.83-39.31-22.74-39.31-52.79,0-32.01,23.59-55.88,57-55.88,15.44,0,36.22,5.05,49.7,12.07v33.41h-1.68c-10.95-29.2-28.36-41.55-49.14-41.55-23.59,0-39.31,16-39.31,39.59s18.53,33.69,35.1,42.12l14.04,7.02c24.71,12.35,48.57,25.55,48.57,59.24s-25.83,59.24-64.02,59.24c-16.29,0-39.87-5.05-52.79-12.35Z"></path><path class="cls-1" d="m715.08,195.14c0-8.99,7.3-16.29,16.29-16.29s16,7.3,16,16.29-7.3,16-16,16-16.29-7.3-16.29-16Z"></path></g></g></svg>
            </h1>
            <div>
              <p>An aggregation vigilantly chosen to</p>
              <p>vanquish the Shadows, will face Destiny.</p>
              <p>Time won't wait for you, destiny won't change for you.</p>
            </div>
          </div>
          <div class="image-card">
            <div>
              <img src="https://p3re.jp/en/resources/img/top/character1_7a5245e0ed363381ae4baf13b04e324b.png" alt="Protagonist Photo">
            </div>
            <p>Protagonist</p>
          </div>
        </div>
      </div>
    </v-carousel-item>
    <v-carousel-item
      v-for="(character, i) in SEEAcharacters"
      :key="i"
    >
    <div class="item" :style="`background-color: ${character.bg};`">
        <div class="prota">
          <div class="textBox">
            <h1 style="height: auto; font-weight: bold;" class="text-md-h3 text-lg-h2">
              {{ character.name }}
            </h1>
            <div>
              <p v-for="(phrase, i) in character.phrases" :key="i">{{ phrase }}</p>
            </div>
          </div>
          <div class="image-card">
            <div>
              <img :src="character.image" alt="Character Photo">
            </div>
          </div>
        </div>
      </div>
    </v-carousel-item>
    <v-carousel-item>
      <div class="item" style="background-color: #93cc96;">
        <div class="prota">
          <div class="textBox strega" style="width: 100%;">
            <h1>
              <svg fill="#fff" id="_レイヤー_2" data-name="レイヤー 2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1042.94 211.14"><g id="SEES_text"><g><path class="cls-1" d="m1.68,198.79l-1.68-42.96h1.68c11.23,34.54,31.45,51.38,56.16,51.38,22.74,0,44.08-15.44,44.08-42.4s-20.22-37.06-44.36-49.14l-14.04-7.02C23.58,98.83,4.21,85.92,4.21,55.88,4.21,23.87,27.8,0,61.21,0c15.44,0,36.22,5.05,49.7,12.07v33.41h-1.68C98.27,16.29,80.86,3.93,60.09,3.93c-23.59,0-39.31,16-39.31,39.59s18.53,33.69,35.1,42.12l14.04,7.02c24.71,12.35,48.57,25.55,48.57,59.24s-25.83,59.24-64.02,59.24c-16.29,0-39.87-5.05-52.79-12.35Z"></path><path class="cls-1" d="m296.64,45.49h-1.68c-14.32-32.01-23.3-37.62-51.66-37.62h-9.83v164.82c0,20.78,1.12,33.41,20.22,33.41v1.68h-65.14v-1.68c19.09,0,20.22-12.63,20.22-33.41V7.86h-10.11c-28.36,0-37.06,5.62-51.66,37.62h-1.69l3.93-42.12h143.76l3.65,42.12Z"></path><path class="cls-1" d="m478.98,206.09v1.68c-3.65.56-15.44,1.12-23.02,1.12-18.53,0-23.59-10.11-58.4-84.51-5.33-10.67-11.23-12.63-20.22-12.63h-14.6v60.93c0,20.78.84,33.41,19.94,33.41v1.68h-64.86v-1.68c19.09,0,20.22-12.63,20.22-33.41V38.47c0-20.78-1.12-33.41-20.22-33.41v-1.68h69.63c43.24,0,68.23,21.34,68.23,53.91,0,27.8-21.34,44.92-45.77,51.66v.56c8.14,5.05,14.88,16.85,21.06,28.92,27.24,52.5,33.13,62.61,48.01,67.67Zm-116.24-98.83h21.06c30.6,0,45.77-17.69,45.77-48.29s-14.04-51.1-45.49-51.1h-10.67c-6.74,0-10.67,3.37-10.67,10.11v89.29Z"></path><path class="cls-1" d="m653.93,160.6l-6.46,47.17h-141.51v-1.68c19.09,0,20.22-12.63,20.22-33.41V38.47c0-20.78-1.12-33.41-20.22-33.41v-1.68h137.3l3.65,42.12h-1.68c-14.32-32.01-23.59-37.62-54.19-37.62h-40.15v91.25h31.45c25.27,0,30.89-6.74,35.66-27.52h1.68v61.49h-1.68c-4.77-19.94-10.39-29.48-35.66-29.48h-31.45v86.48c0,8.42,2.53,13.2,11.23,13.2h33.13c29.76,0,40.43-5.05,57-42.68h1.68Z"></path><path class="cls-1" d="m680.38,106.13c0-62.89,39.59-106.13,94.06-106.13,30.89,0,51.1,7.86,64.58,15.16v32.85h-1.69c-14.88-30.61-32.29-44.08-63.17-44.08-39.31,0-66.26,43.24-66.26,101.92s25.55,101.36,66.82,101.36c24.15,0,43.24-10.11,43.24-26.39v-30.88c0-20.78-1.68-31.17-17.97-32.29v-1.68h51.66v1.68c-8.42,1.12-8.98,11.51-8.98,32.29v40.99c-15.72,10.67-40.15,20.22-68.79,20.22-56.72,0-93.5-43.52-93.5-105.01Z"></path><path class="cls-1" d="m1017.39,171.84c8.42,23.58,13.76,33.13,25.55,34.25v1.68h-64.02v-1.68c15.72-1.12,20.78-10.39,14.88-27.52l-14.88-42.4h-66.26l-6.74,19.09c-11.51,33.13-11.79,49.14,8.42,50.82v1.68h-46.33v-1.68c13.48-1.4,20.78-18.53,32.57-52.51L954.78.56h2.25l60.37,171.27Zm-102.48-42.4h61.77l-30.89-88.44-30.89,88.44Z"></path></g></g></svg>
            </h1>
            <div>
              <p>The Dark Hour is a period of time hidden between each day that most people cannot perceive.</p>
              <p>A group called Strega takes advantage of this, using it to carry out requests for revenge on others.</p>
              <p>As the members of S.E.E.S. strive to solve the mystery of the Dark Hour, Strega stands before them as an adversary.</p>
            </div>
          </div>
        </div>
      </div>
    </v-carousel-item>
    <v-carousel-item
      v-for="(character, i) in STREGAcharacters"
      :key="i"
    >
    <div class="item" :style="`background-color: ${character.bg};`">
        <div class="prota">
          <div class="textBox">
            <h1 style="font-size: 48pt; height: auto;">
              {{ character.name }}
            </h1>
            <div>
              <p v-for="(phrase, i) in character.phrases" :key="i">{{ phrase }}</p>
            </div>
          </div>
          <div class="image-card">
            <div>
              <img :src="character.image" alt="Character Photo">
            </div>
          </div>
        </div>
      </div>
    </v-carousel-item>
  </v-carousel>
</template>

<style>
  .item {
    background: #5ba4d7;
    width: 100vw;
    height: 100vh;
  }

  .prota {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 100%;
    width: 90%;
    margin: auto;
  }

  
  .textBox {
    width: 40%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    padding-left: 10%;
  }
  
  @media screen and (max-width: 1280px) {
    .texbox h1{
      width: 100% !important;
      height: auto !important;
    }
  }

  .textBox h1 {
    width: 604px;
    height: 211px;
    color: #fff;
  }

  .textBox div {
    display: flex;
    flex-direction: column;
    gap: .5rem;
    margin-top: 8px;
  }

  .textBox p {
    text-align: left;
    font-size: .9rem;
    font-weight: 500;
    margin: 0;
    color: #fff;
  }

  .image-card {
    width: 40%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: start;
  }

  .image-card div {
    width: 100%;
    height: auto;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .image-card div img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }

  .image-card p {
    font-size: .9rem;
    font-weight: 400;  
    margin: 0;
    color: #fff;
  }

  @media screen and (max-width: 768px) {
    .prota {
      flex-direction: column;
      justify-content: center;
      align-items: center;
      padding: 16px;
      gap: 24px;
    }

    .image-card {
      width: auto;
      height: auto;
    }

    .textBox {
      width: 100%;
      padding-left: 0;
      height: auto;
    }

    .textBox p {
      font-size: .7rem;
      font-weight: 400;
    }

    .strega h1 {
      width: 90vw;
      height: auto;
    }
  }
</style>

<script lang="ts" setup>
import { ref } from 'vue';

const SEEAcharacters = ref([
  {
    name: 'Yukari Takeba',
    image: 'https://p3re.jp/en/resources/img/top/character2_1bbd90394affdfba42aba331abb840d3.png',
    phrases: [
      'A second-year at Gekkoukan High School and a classmate of the Protagonist.',
      'Her cheerful personality and good looks attract many admirers, but beneath the pleasantries, she is rather headstrong and aloof.',
      'She is a member of SEES as a Persona-user, and after she and the Protagonist have a close call with a Shadow, she reconsiders her lack of battle experience and joins him on the front lines.'
    ],
    bg: '#fc93ff'
  },
  {
    name: 'Junpei Iori',
    image: 'https://p3re.jp/en/resources/img/top/character3_32f8988ba6d0b9ed01387a45dd276911.png',
    phrases: [
      'Another of the Protagonist’s classmates, next to Yukari. He awakens to his Persona abilities shortly after the Protagonist transfers into the school, prompting him to join the rest of SEES in the Iwatodai Dorm.',
      'Quite the class clown, he is always ready to joke around and lighten the mood... which is not always appreciated by the eye-rolling Yukari.',
    ],
    bg: '#989ffb'
  },
  {
    name: 'Akihiko Sanada',
    image: 'https://p3re.jp/en/resources/img/top/character4_89ea0f57cc80f3d4c0a08af0c19f756d.png',
    phrases: [
      'A third-year at Gekkoukan High School and one of the founding members of SEES. ',
      'He’s the captain of the boxing team and excels in academics as well, earning him a lot of fans around school.',
      'He’s got an effortlessly cool and stoic personality, but can be stubborn and even a bit naïve at times.'
    ],
    bg: '#d3dada'
  },
  {
    name: 'Mitsuru Kirijo',
    image: 'https://p3re.jp/en/resources/img/top/character5_e69b29476f3c0fdf4488ebbe998a2f8f.png',
    phrases: [
      'The heiress of a powerful international corporation, the Kirijo Group. She’s a third-year at Gekkoukan High School and serves as student council president. She also leads SEES and organizes their operations.',
      'She is well respected as an honor student who excels in both studies and extracurriculars, but due to her high-class upbringing, she can be oblivious to things most folks would consider common sense.',
    ],
    bg: '#f68ca8'
  },
  {
    name: 'Fuuka Yamagishi',
    image: 'https://p3re.jp/en/resources/img/top/character6_cf9e9ae6bb2e93a9776da509166fed66.png',
    phrases: [
      'A quiet and calm second-year at Gekkoukan High School. Less upstanding students take advantage of her timidness, turning her into a bullying target.',
      'As a result of the bullying, she gets trapped within the Dark Hour and has to be rescued by the Protagonist and his friends. ',
      'This experience leads her to awaken to the power of Persona and decide to join SEES herself. '
    ],
    bg: '#95f5dc'
  },
  {
    name: 'Koromaru',
    image: 'https://p3re.jp/en/resources/img/top/character7_82e1ca02e98458228691fa18cf354246.png',
    phrases: [
      'A dog who awakens to the power of Persona after a tragic event. Since his original owner—the priest of the dorm’s neighboring Naganaki Shrine—had passed away, the protagonist and friends take him in as a full-fledged member of SEES.',
      'Clever, loyal, and friendly, he quickly becomes a beloved member of the group.'
    ],
    bg: 'rgb(173, 179, 173)'
  },
  {
    name: 'Aigis',
    image: 'https://p3re.jp/en/resources/img/top/character8_1322ce25a084f93a487defa23925e005.png',
    phrases: [
      'A man-made Anti-Shadow Suppression Weapon, 7th Generation. She joins SEES as an android with a humanlike heart, granting her the power of Persona.',
      'She harbors a mysterious attachment to the Protagonist from the first day they meet.',
      'Initially coming across as cold and robotic, she begins to discover more human emotions through her experiences with the group.'
    ],
    bg: 'rgb(227, 221, 105)'
  },
  {
    name: 'Ken Amada',
    image: 'https://p3re.jp/en/resources/img/top/character9_3fb17953a48e0744deee66b4f5986a2c.png',
    phrases: [
      'The youngest member of SEES—a 5th grader at Gekkoukan Elementary. After losing his mother in an accident, he comes to live at the Iwatodai Dorm.',
      'After awakening to his Persona abilities, he joins SEES of his own accord. While he strives to act mature with his mannerisms, deep down he is still a child with a passion for superhero TV shows.'
    ],
    bg: '#faba80'
  },
  {
    name: 'Shinjiro Aragaki',
    image: 'https://p3re.jp/en/resources/img/top/character10_3e9a87802f1cdde821cb45fc1f7350e4.png',
    phrases: [
      'A third-year at Gekkoukan High, though he can rarely be seen at school.',
      'He was a founding member of SEES alongside Mitsuru and Akihiko. After distancing himself for about two years, a certain turn of events convinces him to rejoin the group.',
      'While unapproachable at first glance, beneath the gruff exterior is a gentle heart and a knack for cooking.  '
    ],
    bg: '#ce8998'
  }
]);

const STREGAcharacters = ref([
  {
    name: 'Takaya',
    image: 'https://p3re.jp/en/resources/img/top/character11_3bbb0089bb637b9f97a15fa9dd3a6529.png',
    phrases: [
      'The leader of Strega, a group of three that uses the Dark Hour as a means to carry out requests for revenge.',
      'He considers the Dark Hour to be a special gift reserved only for those with the power of Persona, and does not wish for it to disappear.',
      'Despite his strange appearance, he has a charismatic personality that has earned him many devoted followers.'
    ],
    bg: '#93cc96'
  },
  {
    name: 'Jin',
    image: 'https://p3re.jp/en/resources/img/top/character12_09a76dad001aeb6dd222bcc49f493f96.png',
    phrases: [
      'A member of Strega, a group of three that uses the Dark Hour as a means to carry out requests for revenge.',
      'He is an intelligent young man who specializes in data analysis and runs the Revenge Request website for Strega’s activities.'
    ],
    bg: '#93cc96'
  },
  {
    name: 'Chidori',
    image: 'https://p3re.jp/en/resources/img/top/character13_b7afb82112b8da4613c5b0d2c9acc025.png',
    phrases: [
      'A member of Strega, a group of three that uses the Dark Hour as a means to carry out requests for revenge.',
      'She wears a striking white dress and rarely shows emotion, coldly pushing away those who dare speak to her.'
    ],
    bg: '#93cc96'
  }
])
</script>