        // Scroll To Top Button
        const scrollToTopBtn = document.getElementById('scrollToTop');

        // Butonun görünümünü kontrol eden fonksiyon
        window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            scrollToTopBtn.classList.add('show');
        } else {
            scrollToTopBtn.classList.remove('show');
        }
        });
        
        // Tıklama olayını dinleyerek sayfanın üstüne kaydırma
        scrollToTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
        });
        
        // Loader'ı kaldırmak için bir fonksiyon
        function hideLoader() {
        const loader = document.getElementById('loader');
        loader.style.opacity = '0';
        setTimeout(() => {
            loader.style.display = 'none';
        }, 500); // Opacity geçişi için küçük bir bekleme
        }
        
        // Sayfa yüklendikten sonra loader'ı gizle
        window.addEventListener('load', hideLoader);
        
        document.addEventListener("DOMContentLoaded", () => {
        const cards = document.querySelectorAll(".announcement-card");
        
        // Intersection Observer ile animasyonları tetikle
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.style.opacity = "1";
                        entry.target.style.animationPlayState = "running";
                    }
                });
            },
            { threshold: 0.5 }
        );
        
        cards.forEach((card) => observer.observe(card));
        });
        
        

        