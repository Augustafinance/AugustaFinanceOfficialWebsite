<template>
    <Layout header-class="header-left-align" nav-alignment="left" :footer-style="3" buy-button-class="btn-default btn-small" :show-top-header="false" :show-copyright="false" :show-theme-switcher-button="false">
        <!-- Start Slider Area -->
        <div class="slider-area slider-style-3 height-850">
            <div class="container">
                <div class="row row--30 align-items-center">
                    <div class="order-2 order-lg-1 col-lg-12">
                        <div class="inner text-left">
                            <h1 class="title theme-gradient" data-aos="fade-up" data-aos-delay="100">The Liquidity Hub of the <br/>Optimism Ecosystem
                            </h1>
                            <p class="description" data-aos="fade-up" data-aos-delay="130" style="color: white">
                                By guiding the yield potential and governance power of VELO and veVELO  holders, Augusta creates unprecedented value within the Optimism ecosystem.
                            </p>
                            <Counter
                                :counter-style="6"
                                text-align="center"
                                :counter-data="counterFiveData"
                                column="col-lg-3 col-md-6 col-sm-6 col-12"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- End Slider Area -->

        <Separator/>

        <div class="rwt-tab-area rn-section-gap">
            <div class="container">
                <div class="row mb--40">
                    <div class="col-lg-12">
                        <SectionTitle
                            text-align="left"
                            subtitle=""
                            title="At Augusta, VELO and veVELO are at the heart of our mission - to<br />provide superior liquidity solutions and boosted returns."
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

        <Separator/>

        <div class="rwt-timeline-area rn-section-gap">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12">
                        <SectionTitle
                            text-align="left"
                            subtitle="Augusta Governance"
                            title="Augusta leverages AUG and vlAUG tokens for user-driven governance,<br />fostering liquidity and boosting yields for VELO and veVELO"
                            description=""
                            data-aos="fade-up"
                        />
                    </div>
                </div>
                <div class="row">
                    <ServiceSix
                        service-style="service__style--1 radius mt--25 service-six-border"
                        icon-size="62"
                        text-align="left"
                    />
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
                <div class="row">
                    <div class="col-lg-6 col-md-6 col-sm-12 col-12" style="margin-bottom: 52.8px">
                        <div class="counter-style-7" data-aos="fade-up" data-aos-delay="130">
                            <div>
                                <span class="counter-title">Step1</span>
                            </div>
                            <div class="counter-content">
                                Deposit any amount of VELO or veVELO into Augusta
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-6 col-md-6 col-sm-12 col-12" style="margin-bottom: 52.8px">
                        <div class="counter-style-7" data-aos="fade-up" data-aos-delay="130">
                            <div>
                                <span class="counter-title">Step2</span>
                            </div>
                            <div class="counter-content">
                                Receive augVELO tokens in exchange for providing VELO
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-lg-6 col-md-6 col-sm-12 col-12" style="margin-bottom: 52.8px">
                        <div class="counter-style-7" data-aos="fade-up" data-aos-delay="130">
                            <div>
                                <span class="counter-title">Step3</span>
                            </div>
                            <div class="counter-content">
                                Receive a share of the total veVELO rewards for staking augVELO
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-6 col-md-6 col-sm-12 col-12">
                        <div class="counter-style-7" data-aos="fade-up" data-aos-delay="130">
                            <div>
                                <span class="counter-title">Step4</span>
                            </div>
                            <div class="counter-content">
                                Receive reward boost with AUG tokens.
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
                                <img class="counter-content-icon" src="../../assets/images/icons/twitter.svg" alt="Twitter">Follow on Twitter
                            </div>
                            <div class="counter-content" style="color: #767DF0;margin-top: 12px;">
                                <img class="counter-content-icon" src="../../assets/images/icons/discord.svg" alt="Discord">Follow on Discord
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

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
                        number: 16233743,
                        title: 'VELO locked',
                    },
                    {
                        number: 30.81,
                        title: 'APY',
                        suffix: '%',
                        decimals: 2
                    },
                    {
                        number: 311.21,
                        title: 'Total Value locked',
                        suffix: 'm',
                        prefix: '$',
                        decimals: 2
                    }
                ]
            }
        }
    }
</script>