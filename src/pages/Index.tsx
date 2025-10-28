import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ChevronDown, Globe, Sparkles, Heart, Users, BookOpen, Award, TrendingUp } from "lucide-react";
import heroVideo from "@/assets/hero-video.mp4";

type Language = "zh" | "en";

const Index = () => {
  const [language, setLanguage] = useState<Language>("zh");
  const [activeSection, setActiveSection] = useState("hero");

  const toggleLanguage = () => {
    setLanguage(language === "zh" ? "en" : "zh");
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["hero", "story", "credentials", "courses", "giveback", "resources", "testimonials", "contact"];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const translations = {
    zh: {
      nav: {
        story: "我的故事",
        credentials: "專業資歷",
        courses: "課程服務",
        giveback: "回饋社會",
        resources: "免費資源",
        testimonials: "成功案例",
        contact: "聯絡我們"
      },
      hero: {
        title: "我由月薪20,000變成六年來顯化3千萬港幣收入",
        subtitle: "並且幫助了我600個學生成功顯化6億港幣生意",
        cta: "開始你的顯化之旅",
        scroll: "探索更多"
      },
      story: {
        title: "我的故事",
        content: `吸引力法則小姐YAN（Yan Ng）的故事，並非遙不可及的神話，而是一部深刻、勵志的現代女性逆襲實錄。許多人驚嘆於她「6年顯化3千萬港幣」的驚人成就，但鮮為人知的是，她也曾深陷人生的低谷，走過一段漫長而迷茫的探索之路。

YAN的起點，和許多在香港奮鬥的年輕人一樣。她手握英國生物科技榮譽學位、耶魯大學心理學文憑，擁有令人稱羨的頂尖學術背景。然而，這些「標籤」並未讓她的生活一帆風順。她同樣面對過現實的殘酷——月入僅兩萬港幣，生活拮据，每天疲於奔命，卻始終感受不到對生活的掌控感。她深刻體會過那種「無論多麼努力，似乎都無法突破財富天花板」的深切無力感，甚至一度陷入負債的困境。

這種強烈的挫敗感，成為了她人生的關鍵轉捩點。YAN意識到，單靠傳統的「努力奮鬥」並不足以改變命運；問題的根源，必定深藏在更深層的思維模式與能量頻率之中。憑藉著她的科學背景，她不滿足於市面上那些零散、缺乏系統的心靈雞湯，她渴望尋找一套真正科學化、可被驗證的改變方法。

於是，她做了一個改變一生的重大決定——遠赴海外，去吸引力法則（LOA）的發源地美國，尋求最正宗、最系統化的專業知識。

這趟「海外求學」之路，是她對自己最重要的一次投資。她投入了大量的時間與金錢，沉浸在最前沿的心理學與吸引力法則課程中，接受了極其嚴謹的專業訓練。這不僅是知識的學習，更是一場徹底的自我重塑。她克服了語言和文化的隔閡，最終以優異的成績，成功考獲美國的專業認證，成為了「全亞洲首位獲得認證的中文吸引力法則導師」。

這套系統化的知識，首先在YAN自己身上得到了驚人的驗證。她不再是那個被困境束縛的女孩。她開始有意識地運用這套結合了心理學、科學與心靈法則的強大工具，一步步重塑自己的潛意識、信念系統和能量頻率。

奇蹟，就在這個過程中悄然發生。她的人生軌跡開始了戲劇性的躍升。在短短六年間，她從那個月入兩萬、為生計發愁的女孩，一步步顯化出高達三千萬港幣的驚人收入與多元化資產。

YAN的成功，不只是一個人的財富故事，更是一個點燃了無數亞洲女性希望的火炬。她深知，有無數女性正經歷著她當年的迷茫、焦慮與掙扎。因此，她毅然創辦了「吸引力法則小姐YAN」這個品牌，肩負起一個清晰的使命：將這套被她親身證實行之有效的系統，帶回亞洲，並用最貼近生活、最易懂的廣東話，去幫助更多渴望改變命運的女性。

她從「負債」到「成功」的真實旅程，就是她所有教學內容中最有力的教材。YAN的故事向我們每一個人證明：出身和起點從來不是終點，真正的力量，來自於你是否敢於像她一樣，為自我成長踏出那一步，去尋求最專業的知識，並徹底重設自己的潛意識。她的傳奇，正激勵著無數人開始書寫自己的豐盛篇章。`
      },
      credentials: {
        title: "專業資歷",
        cert1: "全亞洲首位獲美國認證的中文吸引力法則導師",
        cert2: "耶魯大學心理學文憑",
        cert3: "英國生物科技榮譽學位",
        cert4: "6年顯化3千萬港幣收入",
        cert5: "幫助600+學生顯化6億港幣生意"
      },
      courses: {
        title: "課程與服務",
        course1: "潛意識改寫課程",
        course1desc: "30日系統化改寫潛意識，開啟顯化之門",
        course2: "一對一諮詢",
        course2desc: "個人化指導，突破財富和人生瓶頸",
        course3: "企業培訓",
        course3desc: "為團隊注入正向能量與顯化力量",
        cta: "了解更多"
      },
      giveback: {
        title: "回饋社會",
        desc: "YAN深信，真正的豐盛不僅是個人的成就，更是能夠幫助他人。她定期舉辦免費工作坊，並將部分收入用於支持女性創業和心靈成長項目，致力於為社會帶來更多正能量。"
      },
      resources: {
        title: "免費資源",
        youtube: "YouTube教學影片",
        podcast: "吸引力法則播客",
        ebook: "免費電子書下載"
      },
      testimonials: {
        title: "成功案例",
        test1: "Yan老師，我真係太開心了！好興奮的要向你報喜，4月份參加你的課程，30日內改寫潛意識，許下願望，結果實現得好快，短短5個月內我賺到好多錢，改變了好多中意的人生！",
        test2: "透過Yan老師的指導，我從欠債幾十萬，到現在擁有自己的生意，每月收入翻了數倍，我真係好感激你教我如何改變潛意識，讓我能夠吸引財富。",
        test3: "謝謝Yan老師，她的吸引力法則教學很實用，幫我找回自信，也改善了我的感情生活，現在我生活更加幸福！",
        test4: "原本覺得吸引力法則只是迷信，但參加了YAN老師的工作坊後，我真心感受到潛意識改變帶來的力量，實際顯化了很多正向的改變。"
      },
      contact: {
        title: "聯絡我們",
        email: "電郵",
        instagram: "Instagram",
        youtube: "YouTube",
        cta: "立即預約諮詢"
      }
    },
    en: {
      nav: {
        story: "My Story",
        credentials: "Credentials",
        courses: "Courses & Services",
        giveback: "Give Back",
        resources: "Resources",
        testimonials: "Success Stories",
        contact: "Contact"
      },
      hero: {
        title: "From HK$20K Monthly Salary to HK$30M in 6 Years",
        subtitle: "Helping 600+ Students Manifest HK$600M in Business",
        cta: "Start Your Manifestation Journey",
        scroll: "Explore More"
      },
      story: {
        title: "My Story",
        content: `Ms. Yan's story is not an unreachable myth, but a profound and inspiring chronicle of a modern woman's transformation. Many marvel at her achievement of "manifesting HK$30 million in 6 years," but few know that she once found herself at rock bottom, navigating a long and uncertain path.

Yan's starting point was like many young people striving in Hong Kong. Armed with an Honours degree in Biotechnology from the UK and a Psychology diploma from Yale University, she possessed an enviable academic background. Yet these "credentials" did not guarantee smooth sailing. She faced the harsh realities of life—earning just HK$20,000 a month, struggling financially, exhausted daily, yet never feeling in control. She intimately understood the profound helplessness of "no matter how hard you work, you can't break through the wealth ceiling," even falling into debt at one point.

This intense frustration became a critical turning point. Yan realized that traditional "hard work" alone was insufficient to change her destiny. The root of the problem must lie deeper—in thought patterns and energy frequencies. With her scientific background, she wasn't satisfied with scattered, unsystematic motivational content. She yearned for a truly scientific, verifiable method of transformation.

So she made a life-changing decision—to travel overseas to the United States, the birthplace of the Law of Attraction (LOA), seeking the most authentic, systematic professional knowledge.

This "overseas education" journey was her most important investment in herself. She devoted significant time and money, immersing herself in cutting-edge psychology and LOA courses, undergoing rigorous professional training. This wasn't just knowledge acquisition—it was complete self-reconstruction. She overcame language and cultural barriers, ultimately achieving excellent results and earning American professional certification, becoming "Asia's first certified Chinese-speaking Law of Attraction coach."

This systematized knowledge was first dramatically proven on Yan herself. She was no longer the girl bound by circumstances. She began consciously applying this powerful toolset combining psychology, science, and spiritual laws, step by step reshaping her subconscious, belief systems, and energy frequency.

Miracles quietly unfolded during this process. Her life trajectory began a dramatic ascent. In just six years, she transformed from that HK$20,000-earning girl worried about making ends meet into someone who manifested an astounding HK$30 million in income and diversified assets.

Yan's success is not just one person's wealth story—it's a torch that has ignited hope for countless Asian women. She knew countless women were experiencing the confusion, anxiety, and struggles she once faced. Therefore, she resolutely founded the "Ms. Yan - Law of Attraction" brand, shouldering a clear mission: to bring this proven effective system back to Asia, using the most relatable, accessible Cantonese to help more women yearning to change their destiny.

Her authentic journey from "debt" to "success" is the most powerful teaching material in all her content. Yan's story proves to everyone: origins and starting points are never endpoints. True power comes from daring to take that step toward self-growth, seeking the most professional knowledge, and completely resetting your subconscious. Her legend is inspiring countless people to begin writing their own chapters of abundance.`
      },
      credentials: {
        title: "Credentials",
        cert1: "Asia's First US-Certified Chinese LOA Coach",
        cert2: "Yale University Psychology Diploma",
        cert3: "Honours Degree in Biotechnology (UK)",
        cert4: "Manifested HK$30M in 6 Years",
        cert5: "Helped 600+ Students Manifest HK$600M"
      },
      courses: {
        title: "Courses & Services",
        course1: "Subconscious Reprogramming Course",
        course1desc: "30-day systematic subconscious transformation to unlock manifestation",
        course2: "One-on-One Consultation",
        course2desc: "Personalized guidance to breakthrough wealth and life limitations",
        course3: "Corporate Training",
        course3desc: "Infuse teams with positive energy and manifestation power",
        cta: "Learn More"
      },
      giveback: {
        title: "Give Back to Society",
        desc: "Yan believes true abundance is not just personal achievement, but the ability to help others. She regularly hosts free workshops and donates a portion of her income to support women's entrepreneurship and spiritual growth projects, committed to bringing more positive energy to society."
      },
      resources: {
        title: "Free Resources",
        youtube: "YouTube Teaching Videos",
        podcast: "LOA Podcast",
        ebook: "Free E-book Download"
      },
      testimonials: {
        title: "Success Stories",
        test1: "Ms. Yan, I'm so happy! So excited to share this good news with you. I joined your course in April, rewrote my subconscious in 30 days, made my wishes, and results came so fast. In just 5 months I earned so much money and changed so many aspects of my life that I love!",
        test2: "Through Ms. Yan's guidance, I went from being in debt of hundreds of thousands to now owning my own business. My monthly income multiplied several times. I'm truly grateful you taught me how to change my subconscious and attract wealth.",
        test3: "Thank you Ms. Yan, your LOA teaching is very practical. It helped me regain confidence and improved my love life. Now my life is much happier!",
        test4: "I originally thought LOA was just superstition, but after attending Ms. Yan's workshop, I truly felt the power of subconscious change and actually manifested many positive transformations."
      },
      contact: {
        title: "Contact Us",
        email: "Email",
        instagram: "Instagram",
        youtube: "YouTube",
        cta: "Book Consultation Now"
      }
    }
  };

  const t = translations[language];

  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-lg border-b border-border">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-8">
              <h1 className="text-2xl font-serif font-bold text-gradient">Ms. Yan</h1>
              <div className="hidden md:flex space-x-6">
                {Object.entries(t.nav).map(([key, value]) => (
                  <button
                    key={key}
                    onClick={() => scrollToSection(key)}
                    className={`text-sm font-medium transition-colors hover:text-primary ${
                      activeSection === key ? "text-primary" : "text-muted-foreground"
                    }`}
                  >
                    {value}
                  </button>
                ))}
              </div>
            </div>
            <Button
              variant="outline"
              size="sm"
              onClick={toggleLanguage}
              className="flex items-center gap-2"
            >
              <Globe className="w-4 h-4" />
              <span>{language === "zh" ? "EN" : "中文"}</span>
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover object-[center_30%] md:object-center"
        >
          <source src={heroVideo} type="video/mp4" />
        </video>
        <div className="absolute inset-0 gradient-hero" />
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <Sparkles className="w-16 h-16 mx-auto mb-6 text-white animate-float" />
          <h2 className="text-4xl md:text-6xl font-serif font-bold text-white mb-6 animate-fade-in-up">
            {t.hero.title}
          </h2>
          <p className="text-xl md:text-2xl text-white/90 mb-8 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            {t.hero.subtitle}
          </p>
          <Button
            size="lg"
            className="bg-white text-primary hover:bg-white/90 text-lg px-8 py-6 animate-scale-in"
            style={{ animationDelay: "0.4s" }}
            onClick={() => scrollToSection("contact")}
          >
            {t.hero.cta}
          </Button>
          <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
            <ChevronDown className="w-8 h-8 text-white" />
          </div>
        </div>
      </section>

      {/* My Story Section */}
      <section id="story" className="py-20 gradient-section">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-center text-gradient mb-12">
            {t.story.title}
          </h2>
          <Card className="p-8 md:p-12 bg-white/80 backdrop-blur-sm shadow-xl">
            <p className="text-lg leading-relaxed whitespace-pre-line text-foreground">
              {t.story.content}
            </p>
          </Card>
        </div>
      </section>

      {/* Credentials Section */}
      <section id="credentials" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-center text-gradient mb-16">
            {t.credentials.title}
          </h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              { icon: Award, text: t.credentials.cert1 },
              { icon: BookOpen, text: t.credentials.cert2 },
              { icon: BookOpen, text: t.credentials.cert3 },
              { icon: TrendingUp, text: t.credentials.cert4 },
              { icon: Users, text: t.credentials.cert5 },
            ].map((item, index) => (
              <Card
                key={index}
                className="p-6 text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-gradient-to-br from-secondary/30 to-accent/20"
              >
                <item.icon className="w-12 h-12 mx-auto mb-4 text-primary" />
                <p className="text-lg font-medium">{item.text}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Courses Section */}
      <section id="courses" className="py-20 gradient-section">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-center text-gradient mb-16">
            {t.courses.title}
          </h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              { title: t.courses.course1, desc: t.courses.course1desc },
              { title: t.courses.course2, desc: t.courses.course2desc },
              { title: t.courses.course3, desc: t.courses.course3desc },
            ].map((course, index) => (
              <Card key={index} className="p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <h3 className="text-2xl font-serif font-bold mb-4 text-primary">{course.title}</h3>
                <p className="text-muted-foreground mb-6">{course.desc}</p>
                <Button variant="outline" className="w-full">
                  {t.courses.cta}
                </Button>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Give Back Section */}
      <section id="giveback" className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <Heart className="w-16 h-16 mx-auto mb-6 text-primary animate-float" />
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-gradient mb-8">
            {t.giveback.title}
          </h2>
          <p className="text-xl leading-relaxed text-muted-foreground">
            {t.giveback.desc}
          </p>
        </div>
      </section>

      {/* Resources Section */}
      <section id="resources" className="py-20 gradient-section">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-center text-gradient mb-16">
            {t.resources.title}
          </h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              { title: t.resources.youtube, icon: "📺" },
              { title: t.resources.podcast, icon: "🎙️" },
              { title: t.resources.ebook, icon: "📚" },
            ].map((resource, index) => (
              <Card
                key={index}
                className="p-8 text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-white cursor-pointer"
              >
                <div className="text-5xl mb-4">{resource.icon}</div>
                <h3 className="text-xl font-semibold">{resource.title}</h3>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 bg-white overflow-hidden">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-center text-gradient mb-16">
            {t.testimonials.title}
          </h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {[t.testimonials.test1, t.testimonials.test2, t.testimonials.test3, t.testimonials.test4].map((testimonial, index) => (
              <Card
                key={index}
                className="p-8 bg-gradient-to-br from-secondary/20 to-accent/10 hover:shadow-xl transition-all duration-300"
              >
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-yellow-400 text-xl">★</span>
                  ))}
                </div>
                <p className="text-lg leading-relaxed italic">&ldquo;{testimonial}&rdquo;</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 gradient-ethereal">
        <div className="container mx-auto px-4 max-w-3xl text-center">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-8">
            {t.contact.title}
          </h2>
          <p className="text-xl text-white/90 mb-12">
            準備開始你的顯化之旅？立即與我們聯絡
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button size="lg" className="bg-white text-primary hover:bg-white/90">
              {t.contact.cta}
            </Button>
          </div>
          <div className="flex justify-center gap-8 text-white">
            <div>
              <p className="font-semibold mb-2">{t.contact.email}</p>
              <p>info@msyan.com</p>
            </div>
            <div>
              <p className="font-semibold mb-2">{t.contact.instagram}</p>
              <p>@msyan.loa</p>
            </div>
            <div>
              <p className="font-semibold mb-2">{t.contact.youtube}</p>
              <p>Ms. Yan LOA</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="font-serif text-xl font-bold mb-4 text-gradient">吸引力法則小姐 YAN</h3>
              <p className="text-sm text-white/70">
                全亞洲首位獲美國認證的中文吸引力法則導師
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">快速連結</h4>
              <ul className="space-y-2 text-sm text-white/70">
                <li><button onClick={() => scrollToSection("story")} className="hover:text-white transition-colors">我的故事</button></li>
                <li><button onClick={() => scrollToSection("courses")} className="hover:text-white transition-colors">課程服務</button></li>
                <li><button onClick={() => scrollToSection("testimonials")} className="hover:text-white transition-colors">成功案例</button></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">聯絡方式</h4>
              <ul className="space-y-2 text-sm text-white/70">
                <li>Email: info@msyan.com</li>
                <li>Instagram: @msyan.loa</li>
                <li>YouTube: Ms. Yan LOA</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">關注我們</h4>
              <p className="text-sm text-white/70 mb-4">
                訂閱獲取最新顯化技巧和成功案例
              </p>
            </div>
          </div>
          <div className="border-t border-white/20 pt-8 text-center text-sm text-white/60">
            <p>&copy; {new Date().getFullYear()} Ms. Yan - Law of Attraction. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
