<script setup>
import { header__nav } from './constants';
</script>

<template>
  <header id="header" role="banner">
      <div class="header__inner">
          <h1 class="header__logo">
              <a href="#">portfolio<em>vue.js</em></a>
          </h1>
          <nav 
						class="header__nav"
						:class="{show: isNavVisible}"
						role="navigation"
						aria-label="메인 메뉴"
					>
					<!--class: 원래 구성된 class이 값 
						:class: 추가적으로 생성된 클래스의 값
						L> isNavVisible의 값에 따라서 show클래스의 값을 추가할 것인지, 추가하지 않을 것인지 설정한다.
					-->
              <ul>
								<li v-for="(nav, key) in header__nav" :key="key">
									<!-- v-bind, bind, :key 모두 동일하게 동작한다. -->
									<a href="#intro">{{ nav.title }}</a>
									<!-- vue에서는 데이터를 바인딩할 때 {{  }}이렇게 이중으로 구성한다. -->
								</li>
									<!-- <li><a href="#intro">intro</a></li>
                  <li><a href="#skill">skill</a></li>
                  <li><a href="#site">site</a></li>
                  <li><a href="#port">portfolio</a></li>
                  <li><a href="#contact">contact</a></li> -->
              </ul>
          </nav>
          <div 
						class="header__nav__mobile" 
						id="headerToggle" 
						aria-controls="primary-menu" 	
						:aria-expanded="isNavVisible.toString()" 
						role="button" 
						tabindex="0"
						@click="toggleMobileMenu"
					>
					<!--버튼의 값을 클릭하면 해당 함수(메소드)의 값이 실행된다.
							L> 초깃값 false의 값이 반대로 변경된다.-->
              <span></span>
          </div>
      </div>
  </header>
</template>

<script>
export default {
	data() {
		return {
			isNavVisible: false
		}
	},
	method: {
		toggleMobileMenu() {
			// 여기서 this의 값은 상단의 isNavVisible을 말한다.
			this.isNavVisible = !this.isNavVisible
		}
	}
}
</script>

<style lang="scss" scoped>
// scoped의 값을 붙이면 고유의 데이터 값이 생성된다.
//   같이 조합해서 작업을 하거나 해도, 충돌이 발생할 일이 현저히 줄어든다.
@import "@/assets/scss/mixin";

#header {
    @include position-fixed;
    z-index: 10000;
}
.header__inner {	
    @include flex-between;
    background-color: rgba(116, 99, 99, 0.1);
    backdrop-filter: blur(15px);
    padding: 1rem;

    .header__logo {
        font-size: 0.9rem;
        text-align: center;
        text-transform: uppercase;
        line-height: 1;

        em {
            font-size: 10px;
            display: block;
            color: var(--black200);
        }
    }
    
    .header__nav {

        @media (max-width: 800px){
            display: none;

            &.show {
                display: block;

                ul {
                    display: block;
                    position: absolute;
                    right: 0;
                    top: 68px;
                    background-color: rgba(116,99,99,0.1);
                    backdrop-filter: blur(15px);
                    z-index: 10000;
                    min-width: 150px;
                    padding: 20px 0;

                    li {
                        display: block;
                        text-align: right;

                        a {
                            display: inline-block;
                            padding: 10px;
                        }
                    }
                }
            }
            &.show + .header__nav__mobile span::before {
                width: 20px;
            }
            &.show + .header__nav__mobile span::after {
                width: 20px;
            }
        }
        
        li {
            display: inline;
    
            a {
                text-transform: uppercase;
                font-size: 14px;
                padding: 14px;
                position: relative;
    
                &::before {
                    content: '';
                    width: calc(100% - 28px);
                    height: 1px;
                    background-color: var(--black);
                    position: absolute;
                    left: 14px;
                    bottom: 10px;
                    transform: scaleX(0);
                    transition: all 0.3s;
                }
                &:hover::before {
                    transform: scaleX(1);
                }
            }
        }
    }
    
    .header__nav__mobile {
        display: none;
        width: 40px;
        height: 40px;
        cursor: pointer;

        @media (max-width: 800px){
            display: block;
        }

        span {
            display: block;
            width: 40px;
            height: 2px;
            background-color: var(--black);
            margin-top: 19px;
            position: relative;

            &::before {
                content: "";
                width: 40px;
                height: 2px;
                background-color: var(--black);
                position: absolute;
                right: 0;
                top: 6px;
                transition: width 0.3s;
            }
            &::after {
                content: "";
                width: 40px;
                height: 2px;
                background-color: var(--black);
                position: absolute;
                left: 0;
                bottom: 6px;
                transition: width 0.3s;
            }
        }
    }
} 
</style>