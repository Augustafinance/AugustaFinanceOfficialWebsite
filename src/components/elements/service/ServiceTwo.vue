<template>
    <div class="row row--15 service-wrapper">
        <div class="col-xl-3 col-lg-6 col-md-6 col-sm-6 col-12" data-aos="fade-up" data-aos-delay="70"
             v-for="(service, index) in serviceList"
             :key=index>
            <div :class="`card-box ${cardStyle} ${checkTextAlign}`"
                 >
                <div class="inner">
                    <div class="image">
                        <router-link to="/">
                            <img :src="service.image" alt="card Images"/>
                        </router-link>
                    </div>
                    <div class="content">
                        <h4 class="title mb--20" style="font-weight: 900;">
                            <router-link to="/" v-html="service.title"/>
                        </h4>
                        <p class="description b1 color-gray mb--0" v-html="service.description" style="min-height: 92px;color: #ACADB0 !important"/>
                        <router-link class="btn-default btn-small btn-border" to="/">
                            Read More
                        </router-link>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'ServiceTwo',
        props: {
            cardStyle: {
                type: String
            },
            textAlign: {
                type: String,
                default: 'left'
            }
        },
        data() {
            return {
                serviceList: [
                    {
                        image: require('@/assets/images/service/supply.png'),
                        title: 'SUPPLY',
                        description: 'Supply your ETH to earn AUGU and APR'
                    },
                    {
                        image: require('@/assets/images/service/borrow.png'),
                        title: 'BORROW',
                        description: 'Deposit veVELO to borrow ETH and earn veVELO APR'
                    },
                    {
                        image: require('@/assets/images/service/stake.png'),
                        title: 'STAKE',
                        description: 'Deposit your AUGU into the protocol to get vlAUGU and earn rewards'
                    },
                    {
                        image: require('@/assets/images/service/vote.png'),
                        title: 'VOTE',
                        description: 'Participate in Augusta governance voting with vlAUGU to share veNFT APR'
                    }
                ]
            }
        },
        computed: {
            checkTextAlign() {
                if (this.textAlign === 'left') return 'text-start';
                else if (this.textAlign === 'center') return 'text-center';
                else if (this.textAlign === 'end') return 'text-end';
                else return '';
            }
        }
    }
</script>

<style scoped lan="scss">
.btn-default{
    &:hover {
        background: #A1FE04;
        border-color: #A1FE04;
    }
}
.card-box{
    border: 1px solid #0f0f11;
    transition: all .3s;
    &:hover {
        border-color: #050810;
        box-shadow: 1px 1px 15px 1px #9eff00;
    }
}
</style>