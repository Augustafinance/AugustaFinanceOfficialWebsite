<template>
    <Layout header-class="header-left-align" nav-alignment="left" :footer-style="3" buy-button-class="btn-default btn-small" :show-top-header="false" :show-copyright="false">
        <!-- Start Slider Area -->
        <div class="slider-area slider-style-3 height-850">
            <div class="container">
                <div class="row row--30 align-items-center">
                    <div class="order-2 order-lg-1 col-lg-12">
                        <div class="inner text-left">
                            <h1 class="title theme-gradient" data-aos="fade-up" data-aos-delay="100">The Liquidity Hub of the <br/>Optimism Ecosystem
                            </h1>
                            <p class="description" data-aos="fade-up" data-aos-delay="130">
                                By guiding the yield potential and governance power of VELO and veVELO  holders, Augusta creates unprecedented value within the Optimism ecosystem.
                            </p>
                            <div class="button-group mt--30 mt_sm--20" data-aos="fade-up" data-aos-delay="160">
                                <a class="btn-default btn-medium btn-icon"
                                   href="#">
                                    Purchase Now
                                    <Icon name="arrow-right" size="20" icon-class="icon"/>
                                </a>
                            </div>
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
                <ServiceOne
                    service-style="service__style--1 icon-circle-style"
                    text-align="center"
                    icon-size="39"
                />
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
                    <ServiceOne
                        service-style="service__style--1 bg-color-blackest radius mt--25 rbt-border"
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
                    <ServiceOne
                        service-style="service__style--1 bg-color-blackest radius mt--25 rbt-border"
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
                            title="Join the Augusta Community it works"
                            description=""
                            data-aos="fade-up"
                        />
                    </div>
                </div>
                <div class="row">
                    <ServiceOne
                        service-style="service__style--1 bg-color-blackest radius mt--25 rbt-border"
                        icon-size="62"
                        text-align="left"
                    />
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
    import ServiceOne from '../../components/elements/service/ServiceOne'

    export default {
        name: 'Business',
        components: {BlogPost, Pricing, Accordion, Timeline, Tab, SectionTitle, Separator, Icon, Layout, ServiceOne},
        mixins: [BlogPostMixin],
        data() {
            return {
                tabData: {
                    tabImage: 'tabs-01.jpg',
                    tabContent: [
                        {
                            id: 1,
                            menu: 'strategy',
                            content: `<p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quibusdam ipsa, deleniti soluta minima minus asperiores doloribus enim vitae obcaecati fuga assumenda laudantium nemo odio provident nulla exercitationem tempore corrupti! Nemo.</p><p>Quibusdam ipsa, deleniti soluta minima minus asperiores doloribus enim vitae obcaecati fuga assumenda laudantium nemo odio provident nulla exercitationem tempore corrupti! Nemo.</p>`,
                        },
                        {
                            id: 2,
                            menu: 'reporting',
                            content: `<p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quibusdam ipsa, deleniti soluta minima minus asperiores doloribus enim vitae obcaecati fuga assumenda laudantium nemo odio provident nulla exercitationem tempore corrupti! Nemo.</p><p>Quibusdam ipsa, deleniti soluta minima minus asperiores doloribus enim vitae obcaecati fuga assumenda laudantium nemo odio provident nulla exercitationem tempore corrupti! Nemo.</p>`,
                        },
                        {
                            id: 3,
                            menu: 'development',
                            content: `<p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quibusdam ipsa, deleniti soluta minima minus asperiores doloribus enim vitae obcaecati fuga assumenda laudantium nemo odio provident nulla exercitationem tempore corrupti! Nemo.</p><p>Quibusdam ipsa, deleniti soluta minima minus asperiores doloribus enim vitae obcaecati fuga assumenda laudantium nemo odio provident nulla exercitationem tempore corrupti! Nemo.</p>`,
                        }
                    ]
                },
                timelineData: [
                    {
                        id: '1',
                        title: 'Knowledge',
                        description: 'Present all available features in Essentials.',
                    },
                    {
                        id: '2',
                        title: 'Working',
                        description: 'All Feature available features in Essentials.',
                    },
                    {
                        id: '3',
                        title: 'Solution',
                        description: 'Popular Feature available features in Essentials.',
                    },
                    {
                        id: '4',
                        title: 'Process',
                        description: 'Latest Feature available features in Essentials.',
                    },
                ],
                pricingData: [
                    {
                        title: 'Free',
                        currency: '$',
                        price: '29',
                        subtitle: 'USD Per Month',
                        features: [
                            {title: '5 PPC Campaigns'},
                            {title: 'Digital Marketing'},
                            {title: 'Marketing Agency'},
                            {title: 'Seo Friendly'},
                            {title: 'UI/UX designs'},
                        ],
                        btn: {
                            text: 'Purchase Now',
                            link: '#'
                        }
                    },
                    {
                        title: 'Business',
                        currency: '$',
                        price: '50',
                        subtitle: 'USD Per Month',
                        features: [
                            {title: '5 PPC Campaigns'},
                            {title: 'Keep 100% Royalties'},
                            {title: 'App Development'},
                            {title: 'Seo Friendly'},
                            {title: 'UI/UX designs'},
                        ],
                        btn: {
                            text: 'Purchase Now',
                            link: '#'
                        },
                        isActive: true
                    }
                ],
            }
        }
    }
</script>