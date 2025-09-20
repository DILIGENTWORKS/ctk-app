import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {
  // Auto-detected slider images (assets/slider/slide1.jpg ... slideN.jpg)
  images: string[] = [];
  current = 0;
  timer: any;
  // Simple stats shown on the home widgets; adjust as needed
  studentCount = 130;
  teacherCount = 12;
  paypalUrl = 'https://www.paypal.com/donate'; // TODO: replace with hosted_button_id link

  // Derived stats
  yearsRunning = new Date().getFullYear() - 2015; // CTK founded 2015

  // Animated display values
  animStudents = 0;
  animTeachers = 0;
  animYears = 0;

  ngOnInit(): void {
    this.detectSliderImages().then((detected) => {
      this.images = detected.length ? detected : [
        'assets/ctk/slider/slide1.png'
      ];

      // Log detected images for debugging
      console.log('[Slider] Detected images:', this.images);

      // Start slider only if we have at least two images
      if (this.images.length > 1) {
        this.startTimer();
      }

      // Kick off stat animations once page loads
      this.startCountUps();
    });
  }

  ngOnDestroy(): void {
    if (this.timer) { clearInterval(this.timer); }
  }

  private async detectSliderImages(max = 12): Promise<string[]> {
    const exts = ['png', 'jpg', 'jpeg', 'webp'];
    const candidates: string[] = [];
    for (let i = 1; i <= max; i++) {
      for (const ext of exts) {
        candidates.push(`assets/ctk/slider/slide${i}.${ext}`);
      }
    }
    const checks = candidates.map(src => this.imageExists(src));
    const results = await Promise.all(checks);
    // Keep order by slide number then extension
    return candidates.filter((_, idx) => results[idx]);
  }

  private imageExists(src: string): Promise<boolean> {
    return new Promise(resolve => {
      const img = new Image();
      const done = (val: boolean) => {
        resolve(val);
      };
      img.onload = () => done(true);
      img.onerror = () => done(false);
      // Bust cache to ensure fresh 404/200 during dev
      img.src = `${src}?v=${Date.now()}`;
    });
  }

  prev() {
    if (this.images.length === 0) return;
    this.current = (this.current - 1 + this.images.length) % this.images.length;
    this.resetTimer();
  }

  next() {
    if (this.images.length === 0) return;
    this.current = (this.current + 1) % this.images.length;
    this.resetTimer();
  }

  goTo(i: number) {
    if (i < 0 || i >= this.images.length) return;
    this.current = i;
    this.resetTimer();
  }

  private startTimer() {
    this.clearTimer();
    this.timer = setInterval(() => {
      this.current = (this.current + 1) % this.images.length;
    }, 4000);
  }

  private resetTimer() {
    if (this.images.length > 1) {
      this.startTimer();
    }
  }

  private clearTimer() {
    if (this.timer) {
      clearInterval(this.timer);
      this.timer = null;
    }
  }

  private startCountUps() {
    this.countUp(this.studentCount, v => this.animStudents = v, 900);
    this.countUp(this.teacherCount, v => this.animTeachers = v, 900);
    this.countUp(this.yearsRunning, v => this.animYears = v, 900);
  }

  private countUp(target: number, setter: (v: number) => void, durationMs = 800) {
    const start = performance.now();
    const startVal = 0;
    const animate = (now: number) => {
      const t = Math.min(1, (now - start) / durationMs);
      const eased = 1 - Math.pow(1 - t, 3); // easeOutCubic
      const val = Math.round(startVal + (target - startVal) * eased);
      setter(val);
      if (t < 1) requestAnimationFrame(animate);
    };
    requestAnimationFrame(animate);
  }
}
