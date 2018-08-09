<template>
  <div class="container" @click="clickHandle('test click', $event)">
    <p>Vuex counter：{{ count }}</p>
    <button v-if="!userInfo.avatarUrl" open-type="getUserInfo" @click="getUserInfo()">获取信息</button>
    <div class="userinfo" @click="bindViewTap">
      <img class="userinfo-avatar" v-if="userInfo.avatarUrl" :src="userInfo.avatarUrl" background-size="cover" />
      <div class="userinfo-nickname">
        <card :text="userInfo.nickName"></card>
      </div>
    </div>

    <div class="usermotto">
      <div class="user-motto">
        <card :text="motto"></card>
      </div>
    </div>

    <form class="form-container">
      <input type="text" class="form-control" v-model="motto" placeholder="v-model" />
      <input type="text" class="form-control" v-model.lazy="motto" placeholder="v-model.lazy" />
    </form>
    <a href="/pages/counter/main" class="counter">去往Vuex示例页面</a>
  </div>
</template>

<script>
import card from '@/components/card'
import store from '@/store/store.js'
export default {
  data () {
    return {
      motto: 'Hello World',
      userInfo: {}
    }
  },
  computed: {
    count () {
      return store.state.count
    }
  },
  components: {
    card
  },

  methods: {
    bindViewTap () {
      const url = '../logs/main'
      wx.navigateTo({ url })
    },
    getUserInfo () {
      // 调用登录接口
      wx.login({
        success: (res) => {
          console.log(res)
          if (res.code) {
            console.log(res.code)
            // wx.request({
            //   url: `https://api.weixin.qq.com/sns/jscode2session?appid=${APPID}&secret=SECRET&js_code=${res.code}&grant_type=authorization_code`,
            //   type: 'GET'
            // })
          }
          wx.getUserInfo({
            withCredentials: true,
            success: (res) => {
              console.log(res.userInfo)
              this.userInfo = res.userInfo
            }
          })
        }
      })
    },
    clickHandle (msg, ev) {
      console.log('clickHandle:', msg, ev)
    }
  },

  created () {
    // 调用应用实例的方法获取全局数据
    this.getUserInfo()
  }
}
</script>

<style scoped>
.userinfo {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.userinfo-avatar {
  width: 128rpx;
  height: 128rpx;
  margin: 20rpx;
  border-radius: 50%;
}

.userinfo-nickname {
  color: #aaa;
}

.usermotto {
  margin-top: 150px;
}

.form-control {
  display: block;
  padding: 0 12px;
  margin-bottom: 5px;
  border: 1px solid #ccc;
}

.counter {
  display: inline-block;
  margin: 10px auto;
  padding: 5px 10px;
  color: blue;
  border: 1px solid blue;
}
</style>
