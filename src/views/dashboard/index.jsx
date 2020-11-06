import { defineComponent, ref } from 'vue'

import './index.scss'

const customDirective = {
    mounted(el) {
        el.style.transition = 'all .3s'
        el.style.transform = 'scale(0.5)'
        el.style.opacity = '0.4'
        var io = new IntersectionObserver(([ entry ])=>{
            if( entry.isIntersecting ) {
                el.style.transform = 'scale(1)'
                el.style.opacity = '1'
            } else {
                el.style.transform = 'scale(0.5)'
                el.style.opacity = '0.4'
            }
        }, {
            threshold: 0,
            root: null,
            rootMargin: '0px'
        })
        
        io.observe(el)
    }
}

export default defineComponent({

    directives: { autoshow: customDirective},

    setup() {

        const message = ref('home')

        const renderPage = () => {

            return <div class="bg">
                <div class="div-auto" vAutoshow={message.value}>{message.value}</div>
                <div class="div-auto" vAutoshow={message.value}>{message.value}</div>
                <div class="div-auto" vAutoshow={message.value}>{message.value}</div>
                <div class="div-auto" vAutoshow={message.value}>{message.value}</div>
                <div class="div-auto" vAutoshow={message.value}>{message.value}</div>
                <div class="div-auto" vAutoshow={message.value}>{message.value}</div>
                <div class="div-auto" vAutoshow={message.value}>{message.value}</div>
                <div class="div-auto" vAutoshow={message.value}>{message.value}</div>
                <div class="div-auto" vAutoshow={message.value}>{message.value}</div>
                <div class="div-auto" vAutoshow={message.value}>{message.value}</div>
                <div class="div-auto" vAutoshow={message.value}>{message.value}</div>
                <div class="div-auto" vAutoshow={message.value}>{message.value}</div>
            </div>

        }
        
        return () => <>{renderPage()}</>
    }
})