<template>
    <Layout header-class="header-left-align" nav-alignment="left" :footer-style="3" buy-button-class="btn-default btn-small" :show-top-header="false" :show-copyright="false" :show-theme-switcher-button="false">
        <!-- Start Slider Area -->
        <div class="slider-area slider-style-3 height-850">
            <div class="container">
                <div class="row row--30 align-items-center">
                    <div class="order-2 order-lg-1 col-lg-12">
                        <div class="inner text-left">
                            <h1 class="title theme-gradient" data-aos="fade-up" data-aos-delay="100">liquidity releasing and<br />governance hub
                            </h1>
                            <p class="description" data-aos="fade-up" data-aos-delay="130" style="color: white;font-size: 40px">
                                Earn interest, borrow assets, and earn<br />veVELO APR
                            </p>
                            <Counter
                                :counter-style="7"
                                text-align="text-start"
                                :counter-data="counterFiveData"
                                column="col-lg-3 col-md-6 col-sm-6 col-12"
                            />
                            <Counter
                                :counter-style="7"
                                text-align="text-start"
                                :counter-data="counterFiveDataTwo"
                                column="col-lg-3 col-md-6 col-sm-6 col-12"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- End Slider Area -->

        <Separator/>

        <!-- <div class="rwt-tab-area rn-section-gap">
            <div class="container">
                <div class="row mb--40">
                    <div class="col-lg-12">
                        <SectionTitle
                            text-align="left"
                            subtitle=""
                            title="Features"
                            description=""
                            data-aos="fade-up"
                        />
                    </div>
                </div>
                <div class="row">
                    <div class="col-lg-6 col-md-6 col-sm-12 col-12" style="margin-bottom: 52.8px">
                        <div class="counter-style-6" data-aos="fade-up" data-aos-delay="130">
                            <div class="counter-title">
                                Yield Boosting Capabilities
                            </div>
                            <img src="../../assets/images/counter/bottom-border.png" style="width: 100%;"/>
                            <div class="counter-content">
                                Boost your VELO and veVELO returns with Augusta's yield-optimization features, designed to maximize your earning potential.
                                <img src="../../assets/images/logo/logo-title.svg" style="width: 24px;height: 24px;"/>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-6 col-md-6 col-sm-12 col-12" style="margin-bottom: 52.8px">
                        <div class="counter-style-6" data-aos="fade-up" data-aos-delay="130">
                            <div class="counter-title">
                                Unleashing the Power of VELO and veVELO
                            </div>
                            <img src="../../assets/images/counter/bottom-border.png" style="width: 100%;"/>
                            <div class="counter-content">
                                Augusta unleashes the full potential of VELO and veVELO, empowering users with advanced liquidity solutions and boosted returns.
                                <img src="../../assets/images/logo/logo-title.svg" style="width: 24px;height: 24px;"/>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-lg-6 col-md-6 col-sm-12 col-12" style="margin-bottom: 52.8px">
                        <div class="counter-style-6" data-aos="fade-up" data-aos-delay="130" style="padding-top: 10px">
                            <div class="counter-title">
                                Dedicated Liquidity Provision for VELO and veVELO
                            </div>
                            <img src="../../assets/images/counter/bottom-border.png" style="width: 100%;"/>
                            <div class="counter-content">
                                Augusta is the go-to platform for VELO and veVELO liquidity solutions, connecting traders and investors in the Optimism ecosystem.
                                <img src="../../assets/images/logo/logo-title.svg" style="width: 24px;height: 24px;"/>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-6 col-md-6 col-sm-12 col-12">
                        <div class="counter-style-6" data-aos="fade-up" data-aos-delay="130">
                            <div class="counter-title">
                                Optimized VELO and veVELO Governance
                            </div>
                            <img src="../../assets/images/counter/bottom-border.png" style="width: 100%;"/>
                            <div class="counter-content">
                                Augusta amplifies the governance power of VELO and veVELO holders, ensuring their voices are heard in the decision-making process.
                                <img src="../../assets/images/logo/logo-title.svg" style="width: 24px;height: 24px;"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <Separator/> -->

        <div class="rwt-timeline-area rn-section-gap">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12">
                        <SectionTitle
                            text-align="left"
                            subtitle=""
                            title="Features"
                            description=""
                            data-aos="fade-up"
                        />
                    </div>
                </div>
                <div class="row" style="margin-top: 47px;">
                    <!-- <ServiceSix
                        service-style="service__style--1 radius mt--25 service-six-border"
                        icon-size="62"
                        text-align="left"
                    /> -->
                    <div class="card-x" ref="cardX" :style="{
                        height: `${2004 - this.cardXWidth}px`,
                    }">
                        <div class="card-x-content"
                            ref="cardXContent"
                            :style="{
                            width: `${cardXWidth}px`,
                            transform:
                                progress >= 0
                                ? progress > maxProgress
                                ? `translateX(-${maxProgress}%)`
                                :`translateX(-${progress}%)`
                                : 'translateX(0%)',
                            position:
                                progress <= maxProgress ? (progress >= 0 ? 'fixed' : 'static') : 'absolute',
                            bottom: 0,
                            left: `calc(50vw - ${containerHeight / 2}px)`,
                            transitionDuration: '0.5s',
                            transitionTimingFunction: 'linear'
                        }">
                            <div class="card-item" style="margin-right: 92px;">
                                <div class="image-content">
                                    <img src="../../assets/images/service/supply.svg" />
                                </div>
                                <div class="title">SUPPLY</div>
                                <div class="desc">Supply your ETH to earn AUGU and APR</div>
                            </div>
                            <div class="card-item" style="margin-right: 92px;">
                                <div class="image-content">
                                    <img src="../../assets/images/service/borrow.svg" />
                                </div>
                                <div class="title">BORROW</div>
                                <div class="desc">Deposit veVELO to borrow ETH and earn veVELO APR</div>
                            </div>
                            <div class="card-item" style="margin-right: 92px;">
                                <div class="image-content">
                                    <img src="../../assets/images/service/stake.svg" />
                                </div>
                                <div class="title">STAKE</div>
                                <div class="desc">Deposit your AUGU into the protocol to get vlAUGU and earn rewards</div>
                            </div>
                            <div class="card-item">
                                <div class="image-content">
                                    <img src="../../assets/images/service/vote.svg" />
                                </div>
                                <div class="title">VOTE</div>
                                <div class="desc">Participate in Augusta governance voting with vlAUGU to share veNFT APR</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <Separator/>

        <div class="rwt-timeline-area rn-section-gap">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12">
                        <SectionTitle
                            text-align="left"
                            subtitle=""
                            title="How it works"
                            description=""
                            data-aos="fade-up"
                        />
                    </div>
                </div>
                <div class="row" style="margin-bottom: 157px;height: 469px;overflow: auto;">
                    <div class="col-lg-6 col-md-6 col-sm-12 col-12" style="position: relative;">
                        <div class="work-button">
                            LENDER: ETH PROVIDERS
                        </div>
                    </div>
                    <div class="col-lg-6 col-md-6 col-sm-12 col-12" data-aos="fade-up" data-aos-delay="130">
                        <div class="counter-style-7">
                            <div>
                                <span class="counter-title">Step1</span>
                            </div>
                            <div class="counter-content">
                                Deposit any amount of VELO or veVELO into Augusta
                            </div>
                        </div>
                        <div class="counter-style-7">
                            <div>
                                <span class="counter-title">Step2</span>
                            </div>
                            <div class="counter-content">
                                Automatically begin earning AUGU and interest
                            </div>
                        </div>
                        <div class="counter-style-7">
                            <div>
                                <span class="counter-title">Step3</span>
                            </div>
                            <div class="counter-content">
                                Providers’ rewards is earned over time. Claim rewards whenever it fits your schedule
                            </div>
                        </div>
                        <div class="counter-style-7">
                            <div>
                                <span class="counter-title">Step4</span>
                            </div>
                            <div class="counter-content">
                                Withdraw your ETH tokens at any time
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row" style="height: 469px;overflow: auto;">
                    <div class="col-lg-6 col-md-6 col-sm-12 col-12" data-aos="fade-up" data-aos-delay="130">
                        <div class="counter-style-7">
                            <div>
                                <span class="counter-title">Step1</span>
                            </div>
                            <div class="counter-content">
                                Stake veVELO tokens into Augusta
                            </div>
                        </div>
                        <div class="counter-style-7">
                            <div>
                                <span class="counter-title">Step2</span>
                            </div>
                            <div class="counter-content">
                                Borrow ETH tokens to enhance capital utilization
                            </div>
                        </div>
                        <div class="counter-style-7">
                            <div>
                                <span class="counter-title">Step3</span>
                            </div>
                            <div class="counter-content">
                                Automatically begin earning AUGU and veVELO APR
                            </div>
                        </div>
                        <div class="counter-style-7">
                            <div>
                                <span class="counter-title">Step4</span>
                            </div>
                            <div class="counter-content">
                                Stakers’ rewards is earned over time. Claim rewards whenever it fits your schedule
                            </div>
                        </div>
                        <div class="counter-style-7">
                            <div>
                                <span class="counter-title">Step5</span>
                            </div>
                            <div class="counter-content">
                                Repay at any time and pay the interest, then withdraw your veVELO tokens
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-6 col-md-6 col-sm-12 col-12" style="position: relative;">
                        <div class="work-button">
                            BORROWER: veVELO STAKERS
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- <Separator/> -->

        <!-- <div class="rwt-timeline-area rn-section-gap">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12">
                        <SectionTitle
                            text-align="left"
                            subtitle=""
                            title="Join the Augusta Community it works"
                            description=""
                            data-aos="fade-up"
                        />
                    </div>
                </div>
                <div class="row">
                    <div class="col-lg-8 col-md-8 col-sm-12 col-12">
                        <div class="counter-style-8" data-aos="fade-up" data-aos-delay="130">
                            <div class="counter-title">
                                Our Discord and Twitter are the best places to stay up to date on all of Augusta’s latest developments.
                            </div>
                            <div class="counter-content" style="color: #00A3FF;">
                                <a href="https://twitter.com/Augusta_finance" style="color: #00A3FF;">
                                    <img class="counter-content-icon" src="../../assets/images/icons/twitter.svg" alt="Twitter">Follow on Twitter
                                </a>
                            </div>
                            <div class="counter-content" style="color: #767DF0;margin-top: 12px;">
                                <a href="https://discord.gg/Pk6n6RSy" style="color: #767DF0;">
                                    <img class="counter-content-icon" src="../../assets/images/icons/discord.svg" alt="Discord">Follow on Discord
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div> -->

    </Layout>
</template>

<script>
    import Layout from '../../components/common/Layout'
    import Icon from '../../components/icon/Icon'
    import Separator from '../../components/elements/separator/Separator'
    import SectionTitle from '../../components/elements/sectionTitle/SectionTitle'
    import Tab from '../../components/elements/tab/Tab'
    import Timeline from '../../components/elements/timeline/Timeline'
    import Accordion from '../../components/elements/accordion/Accordion'
    import Pricing from '../../components/elements/pricing/Pricing'
    import BlogPostMixin from '../../mixins/BlogPostMixin'
    import BlogPost from '../../components/blog/BlogPost'
    import ServiceSix from '../../components/elements/service/ServiceSix'
    import Counter from "../../components/elements/counterUp/Counter"

    export default {
        name: 'Business',
        components: {BlogPost, Pricing, Accordion, Timeline, Tab, SectionTitle, Separator, Icon, Layout, Counter, ServiceSix},
        mixins: [BlogPostMixin],
        data() {
            return {
                counterFiveData: [
                    {
                        number: 0,
                        title: 'Total Deposite',
                        icon: require('../../assets/images/counter/icon-one.svg')
                    },
                    {
                        number: 0,
                        title: 'Total Borrow osite',
                        suffix: '%',
                        decimals: 2,
                        icon: require('../../assets/images/counter/icon-one.svg')
                    },
                    {
                        number: 0,
                        title: 'veTokens Value',
                        suffix: 'm',
                        prefix: '$',
                        decimals: 2,
                        icon: require('../../assets/images/counter/icon-two.svg')
                    }
                ],
                counterFiveDataTwo: [
                    {
                        number: 0,
                        title: 'Deposite APR',
                        icon: require('../../assets/images/counter/icon-three.svg')
                    },
                    {
                        number: 0,
                        title: 'Borror APR',
                        suffix: '%',
                        decimals: 2,
                        icon: require('../../assets/images/counter/icon-three.svg')
                    },
                    {
                        number: 0,
                        title: 'Rewards',
                        suffix: 'm',
                        prefix: '$',
                        decimals: 2,
                        icon: require('../../assets/images/counter/icon-two.svg')
                    }
                ],
                cardXWidth: 0,
                containerHeight: '0px',
                progress: 0,
                innerWidth: 0,
                wrapperWidth: 0,
                maxProgress: 0
            }
        },
        mounted() {
            this.cardXWidth = this.$refs.cardX.getBoundingClientRect().width;
            this.containerHeight = `${428 + 2004 - this.cardXWidth}px`
            this.innerWidth = window.innerWidth
            this.wrapperWidth = this.$refs.cardXContent.offsetWidth
            this.maxProgress = (428 + 2004 - this.cardXWidth) / 2004 * 100
            this.onScroll()
            window.addEventListener('scroll', this.onScroll)
        },
        beforeUnmount() {
            window.removeEventListener('scroll')
        },
        methods: {
            onScroll() {
                const { scrollTop } = document.documentElement
                const containerTop = this.$refs.cardX.offsetTop + 428 - window.innerHeight
                const containerHeightNumber = 428 + 2004 - this.cardXWidth
                const newProgress = ((scrollTop - containerTop) * 100) / (containerHeightNumber - window.innerHeight + 428)
                this.progress = newProgress
            }
        }
    }
</script>

<style scoped lang="scss">
.card-x{
    width: 100%;
    position: relative;
    overflow: hidden;
    padding: 0;
    .card-x-content{
        display: flex;
        height: 428px;
        margin-top: 20px;
        margin-bottom: 10px;
        .card-item {
            min-width: 432px;
            height: 428px;
            border-radius: 19px;
            border: 1px solid #A1FE04;
            background: rgba(5, 8, 16, 0.35);
            &:hover {
                border: 1px solid #050810;
                box-shadow: 1px 1px 15px 1px #9eff00;
            }
            .image-content{
                height: 219px;
                background: #050810;
                border-top-left-radius: 17px;
                border-top-right-radius: 17px;
                display: flex;
                align-items: center;
                justify-content: center;
            }
            .title{
                padding: 31px 36px 32px 36px;
                font-size: 32px;
                font-family: 'Outfit';
                font-weight: 900;
                line-height: 22px;
                color: white;
            }
            .desc{
                padding: 0px 36px 0px 36px;
                font-size: 28px;
                font-family: 'Outfit';
                line-height: 124%;
                color: #ACADB0
            }
        }
    }
}

.work-button{
    width: 323px;
    height: 79px;
    border-radius: 15px;
    background: #A1FE04;
    font-size: 24px;
    font-family: Outfit;
    font-weight: 700;
    line-height: 108.5%;
    color: #000;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    position: sticky;
    top: 195px;
    margin-left: calc(50% - 162.5px)
}

::-webkit-scrollbar {
     width: 0 !important;
   }
   ::-webkit-scrollbar {
     width: 0 !important;height: 0;
   }
</style>