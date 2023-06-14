<template>
    <div class="row row--15 service-wrapper">
        <div class="col-lg-4 col-md-6 col-sm-6 col-12"
             v-for="(service, index) in serviceList"
             :key=index>
            <div :class="`service ${serviceStyle} ${checkTextAlign}`"
                 data-aos="fade-up"
                 data-aos-delay="70">
                <div class="icon">
                    <img :src="service.icon" :style="`width: ${iconSize}px;height: ${iconSize}px`" />
                    <!-- <Icon :name="service.icon" :class="`size-${iconSize}`"/> -->
                </div>
                <div class="content">
                    <h4 class="title w-600">
                        {{ service.title }}
                    </h4>
                    <p class="description b1 color-gray mb--0" v-html="service.description" style="font-size: 20px;line-height: 1.49;font-weight: 400;min-height: 150px;"/>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import Icon from '../../icon/Icon'

    export default {
        name: 'ServiceSix',
        components: {Icon},
        props: {
            serviceStyle: {
                type: String
            },
            iconSize: {
                type: String|Number,
                default: 62
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
                        icon: require(`@/assets/images/service/service-six-one.svg`),
                        title: 'Empowering Governance with AUGU',
                        description: 'Augusta\'s governance token, AUGU, is the centerpiece of its decentralized decision-making process, giving holders a direct voice in the protocol\'s future.'
                    },
                    {
                        icon: require(`@/assets/images/service/service-six-two.svg`),
                        title: 'Vote-locking Mechanism with vlAUGU',
                        description: 'Lock your AUG tokens to receive vlAUGU, the vote-locked token, which provides you with voting power to influence the direction of the Augusta protocol'
                    },
                    {
                        icon: require(`@/assets/images/service/service-six-three.svg`),
                        title: 'Governance Power with vlAUGU',
                        description: '\"By holding vlAUGU, you have a hand in shaping Augusta\'s future, steering its development, and affecting changes to the system\'s parameters.\"'
                    },
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