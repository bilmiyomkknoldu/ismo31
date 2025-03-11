        
        // GSAP Animations
        gsap.registerPlugin(ScrollTrigger);

        // Hero Animations
        gsap.from('.hero-title', {
            opacity: 0,
            y: 30,
            duration: 1,
            delay: 0.5
        });

        gsap.from('.hero-subtitle', {
            opacity: 0,
            y: 30,
            duration: 1,
            delay: 0.7
        });

        gsap.from('.hero-btns', {
            opacity: 0,
            y: 30,
            duration: 1,
            delay: 0.9
        });

        gsap.from('.hero-stats', {
            opacity: 0,
            y: 30,
            duration: 1,
            delay: 1.1
        });

        // Scroll Animations
        gsap.utils.toArray('.section-header').forEach(header => {
            gsap.from(header.children, {
                scrollTrigger: {
                    trigger: header,
                    start: 'top 80%'
                },
                opacity: 0,
                y: 30,
                duration: 1,
                stagger: 0.2
            });
        });

        gsap.utils.toArray('.product-card, .feature-card, .review-card').forEach(card => {
            gsap.from(card, {
                scrollTrigger: {
                    trigger: card,
                    start: 'top 80%'
                },
                opacity: 0,
                y: 30,
                duration: 1
            });
        });

        // FAQ Functionality
        document.querySelectorAll('.faq-question').forEach(question => {
            question.addEventListener('click', () => {
                const faqItem = question.parentElement;
                const answer = faqItem.querySelector('.faq-answer');

                faqItem.classList.toggle('active');

                if (faqItem.classList.contains('active')) {
                    answer.style.height = answer.scrollHeight + 'px';
                } else {
                    answer.style.height = 0;
                }
            });
        });

        // Navbar Scroll
        let lastScroll = 0;
        window.addEventListener('scroll', () => {
            const navbar = document.querySelector('.navbar');
            const currentScroll = window.pageYOffset;

            if (currentScroll > lastScroll && currentScroll > 100) {
                navbar.style.transform = 'translateY(-100%)';
            } else {
                navbar.style.transform = 'translateY(0)';
            }

            lastScroll = currentScroll;
        });

        // Smooth Scroll
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                
                if (target) {
                    window.scrollTo({
                        top: target.offsetTop - 80,
                        behavior: 'smooth'
                    });
                }
            });
        });
        document.addEventListener('DOMContentLoaded', function () {
            const footerText = document.querySelector('.footer-bottom p');
            
            setInterval(function () {
                const newMessage = `&copy; ${new Date().getFullYear()} Xbthnn Software. Tüm hakları saklıdır.`;
                footerText.innerHTML = newMessage;
            }, 5000); 
        });
        
        function _0x1527(){const _0x39a4bc=['bold','#9333EA','5918vYJZgX','4014848sqqPpr','textContent','6lfXFvM','9786Nbsapt','338088AajcGM','DOMContentLoaded','style','31911QdPANf','getElementById','14SqCwwr','398VFhxjm','16010kFcjed','Geliştirici:\x20Xbthnn','developer-name','2492127DdLpQO','color','fontWeight','1775965FwelhU'];_0x1527=function(){return _0x39a4bc;};return _0x1527();}const _0x3a2a0f=_0x4117;function _0x4117(_0x3c1337,_0x18fc66){const _0x1527cc=_0x1527();return _0x4117=function(_0x41173e,_0x243acd){_0x41173e=_0x41173e-0xad;let _0x203ca7=_0x1527cc[_0x41173e];return _0x203ca7;},_0x4117(_0x3c1337,_0x18fc66);}(function(_0x5727c5,_0x463133){const _0x4d80b0=_0x4117,_0x1c8d6e=_0x5727c5();while(!![]){try{const _0x1a01fa=parseInt(_0x4d80b0(0xb9))/0x1+-parseInt(_0x4d80b0(0xbc))/0x2*(parseInt(_0x4d80b0(0xb5))/0x3)+-parseInt(_0x4d80b0(0xb6))/0x4+-parseInt(_0x4d80b0(0xae))/0x5*(parseInt(_0x4d80b0(0xb4))/0x6)+parseInt(_0x4d80b0(0xbb))/0x7*(parseInt(_0x4d80b0(0xb2))/0x8)+-parseInt(_0x4d80b0(0xc0))/0x9+parseInt(_0x4d80b0(0xbd))/0xa*(parseInt(_0x4d80b0(0xb1))/0xb);if(_0x1a01fa===_0x463133)break;else _0x1c8d6e['push'](_0x1c8d6e['shift']());}catch(_0x584c25){_0x1c8d6e['push'](_0x1c8d6e['shift']());}}}(_0x1527,0x81b05),document['addEventListener'](_0x3a2a0f(0xb7),function(){const _0x3b7d99=_0x3a2a0f,_0x5119d7=document[_0x3b7d99(0xba)](_0x3b7d99(0xbf));_0x5119d7[_0x3b7d99(0xb3)]=_0x3b7d99(0xbe),_0x5119d7[_0x3b7d99(0xb8)][_0x3b7d99(0xad)]=_0x3b7d99(0xaf),_0x5119d7['style'][_0x3b7d99(0xc1)]=_0x3b7d99(0xb0);}));

        const _0x2f8ed4=_0x53d2;function _0x53d2(_0x57ccac,_0xee2f5c){const _0x4fa598=_0x4fa5();return _0x53d2=function(_0x53d2fd,_0x37ca70){_0x53d2fd=_0x53d2fd-0xba;let _0x41230e=_0x4fa598[_0x53d2fd];return _0x41230e;},_0x53d2(_0x57ccac,_0xee2f5c);}function _0x4fa5(){const _0x51a486=['color','889xtHcHL','developer-sirket','1279416oDEEUy','bold','2gamhxu','20977TEVvub','addEventListener','647755yhTsDB','1679134uamPCi','8671482aWuyuJ','fontWeight','10EGrWRV','DOMContentLoaded','3HZxNHN','5568jSxiuy','getElementById','style','Xbthnn\x20Software','7198240FWWXnQ','72024TeaPmr'];_0x4fa5=function(){return _0x51a486;};return _0x4fa5();}(function(_0x28f195,_0x2669b7){const _0x14b83f=_0x53d2,_0x5b408d=_0x28f195();while(!![]){try{const _0x2772b6=parseInt(_0x14b83f(0xc5))/0x1*(-parseInt(_0x14b83f(0xc9))/0x2)+parseInt(_0x14b83f(0xce))/0x3*(parseInt(_0x14b83f(0xc3))/0x4)+-parseInt(_0x14b83f(0xc8))/0x5+parseInt(_0x14b83f(0xbf))/0x6*(parseInt(_0x14b83f(0xc1))/0x7)+-parseInt(_0x14b83f(0xbe))/0x8+-parseInt(_0x14b83f(0xca))/0x9*(-parseInt(_0x14b83f(0xcc))/0xa)+-parseInt(_0x14b83f(0xc6))/0xb*(-parseInt(_0x14b83f(0xba))/0xc);if(_0x2772b6===_0x2669b7)break;else _0x5b408d['push'](_0x5b408d['shift']());}catch(_0x257a87){_0x5b408d['push'](_0x5b408d['shift']());}}}(_0x4fa5,0xf04b3),document[_0x2f8ed4(0xc7)](_0x2f8ed4(0xcd),function(){const _0x4f5c47=_0x2f8ed4,_0x4152ff=document[_0x4f5c47(0xbb)](_0x4f5c47(0xc2));_0x4152ff['textContent']=_0x4f5c47(0xbd),_0x4152ff['style'][_0x4f5c47(0xcb)]=_0x4f5c47(0xc4),_0x4152ff[_0x4f5c47(0xbc)][_0x4f5c47(0xc0)]='#9333EA';}));
   