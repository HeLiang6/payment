<template>
    <div id="section">
        <div class="section-top">
            <img src="../public/images/return.png" alt="">
            <p>支付订单</p>
        </div>
        <div class="section-money">
            <div class="section-money-top">¥104.00</div>
            <div class="section-money-bottom">支付金额</div>
        </div>
        <div class="section-commodity">
            <ul>
                <li>
                    <p>订单编码</p>
                    <em>0000001</em>
                </li>
                <li class="shopping-name">
                    <p>商品名称：</p>
                    <em>尔有信测试</em>
                </li>
            </ul>
        </div>
        <div class="section-payment">
            <!-- 支付 -->
            <ul class="list">
                <li v-for="(item,index) in list" :key="index">
                    <p>
                        <img :src="item.img" alt="">
                        <em>{{item.name}}</em>
                    </p>
                    <span id="circle" :class="{active:active==index}"  @click="handerConfirm(index,list.isflag)">
                        <!-- <img src="../public/images/confirm.png" alt=""> -->
                    </span>
                </li>
            </ul>
            <div class="payment-buttom">
                微信支付¥104.00
            </div>
        </div>
    </div>
</template>

<script>
import WeChat from '../public/images/WeChat.png'
import Alipay from '../public/images/Alipay.png'
import eastOfBeijing from '../public/images/eastOfBeijing.png'
import CloudFlashPay from '../public/images/CloudFlashPay.png'
export default {
  data () {
    return {
      active: 0,
      list: [{
        id: 1,
        img: WeChat,
        name: '微信支付'
      }, {
        id: 2,
        img: Alipay,
        name: '支付宝'
      }, {
        id: 3,
        img: eastOfBeijing,
        name: '京东支付'
      }, {
        id: 4,
        img: CloudFlashPay,
        name: '云闪付'
      }
      ]
    }
  },
  methods: {
    handerConfirm (index, flag) {
      this.active = index
    }
  }
}
</script>
<style scoped>
#section .section-top {
  display: flex;
  padding: .11rem 0 .11rem .15rem;
  border-bottom: 1px solid #E3E5E9;
}

#section .section-top p {
  margin-left: 1.27rem;
  font-size: .16rem;
  color: #232326;
}

#section .section-money {
  padding: .3rem 0 .275rem 0;
  border-bottom: .1rem solid #F8F8F8;
}

#section .section-money .section-money-top {
  text-align: center;
  color: #E02020;
  font-size: .3rem;
  font-family: 'DIN Alternate Bold';
  font-weight: bold;
}

#section .section-money .section-money-bottom {
  margin: 0 auto;
  width: .7rem;
  height: 0.2rem;
  background: #F8F8F8;
  text-align: center;
  border-radius: .11rem;
  line-height: .2rem;
  margin-top: .07rem;
  color: #cccccc;
}

#section .section-commodity {
  padding: .15rem .2rem;
  border-bottom: .1rem solid #F8F8F8;
}

#section .section-commodity li {
  display: flex;
  justify-content: space-between;
}

#section .section-commodity li p {
  color: #cccccc;
  font-size: .13rem;
}

#section .section-commodity li em {
  color: #000000;
  font-size: .13rem;
}

#section .section-commodity .shopping-name {
  margin-top: .1rem;
}

#section .section-payment {
  padding: 0 .19rem;
}

#section .section-payment ul li {
  height: .585rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 0.5px solid #F8F8F8;
}

#section .section-payment ul li p {
  display: flex;
  align-items: center;
}

#section .section-payment ul li p em {
  font-size: .13rem;
  margin-left: .1rem;
}

#circle {
  width: 0.2rem;
  height: 0.2rem;
  border-radius: 50%;
  border: 1px solid #ccc;
}
ul li .active{
 background:url('../public/images/confirm.png');
}
#section .section-payment .payment-buttom {
  box-sizing: border-box;
  width: 100%;
  height: .4rem;
  text-align: center;
  line-height: .4rem;
  background: #1490DF;
  border-radius: .2rem;
  font-size: .15rem;
  color: #fff;
  margin-top: .58rem;
}

</style>
