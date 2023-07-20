<template>
    <div>
        <footer v-if="data.showFooter" class="rn-footer footer-style-default footer-style-1">
            <div class="footer-top">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-4 col-md-6 col-sm-12 col-12">
                            <div class="rn-footer-widget">
                                <Logo/>
                                <h3 class="text-big"></h3>
                            </div>
                        </div>
                        <div class="col-lg-2 col-md-6 col-sm-6 col-12">
                            <div class="rn-footer-widget">
                                <div class="widget-menu-top">
                                    <h4 class="title">Community</h4>
                                    <div class="inner">
                                        <ul class="footer-link link-hover">
                                            <li><a href="https://twitter.com/Augusta_finance">Twitter</a></li>
                                            <li><a href="https://discord.gg/augustafi">Discord</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-2 col-md-6 col-sm-6 col-12">
                            <div class="rn-footer-widget">
                                <div class="widget-menu-top">
                                    <h4 class="title">Resources</h4>
                                    <div class="inner">
                                        <ul class="footer-link link-hover">
                                            <li><a href="https://augusta-finance.gitbook.io">Doc</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-6 col-sm-12 col-12">
                            <!-- <div class="rn-footer-widget">
                                <h4 class="title">Newsletter</h4>
                                <div class="inner">
                                    <h6 class="subtitle">2000+ Our clients are subscribe Around the World</h6>
                                    <form class="newsletter-form" action="#">
                                        <div class="form-group">
                                            <input type="email" placeholder="Enter Your Email Here">
                                        </div>
                                        <div class="form-group">
                                            <button class="btn-default" type="submit">Submit Now</button>
                                        </div>
                                    </form>
                                </div>
                            </div> -->
                        </div>
                    </div>
                </div>
            </div>
        </footer>
        <Copyright v-if="data.showCopyright"/>
        <ScrollTop/>
    </div>
</template>

<script>
    import Copyright from './Copyright'
    import ScrollTop from './ScrollTop'
    import Logo from '../../elements/logo/Logo'

    export default {
        name: 'FooterThree',
        components: {Logo, ScrollTop, Copyright},
        props: {
            data: {
                default: null
            }
        }
    }
</script>