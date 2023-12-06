import { useState, useEffect } from "react";
import main from "./../../assets/icons/1.svg";
import skills from "./../../assets/icons/skills.svg";
import vault from "./../../assets/icons/vault.png";
import "./index.scss";

export default function Home() {
  document.title = 'طورنى - الرئيسية'
  const texts = ["اكتشف مهارات جديدة", "تواصل مع المدربين", "تعلم عن بعد"];
  const [newText, setNewText] = useState('اكتشف مهارات جديدة')
  const [style, setStyle] = useState(false)

  
  useEffect(() => {
    setInterval(() => {
      setTimeout(() => {
        const randomKey = Math.floor(Math.random() * texts.length );
        setNewText(texts[randomKey])
        setStyle(!style)
        }, 1000);
      }, 3000);
      setStyle(!style)
  }, []);

  return (
    <div className="home">
      <div className="container">
        <div className="row">
          <div className="main-text">
            <h2>
              طــورنــى: <span className={style ? "motion" : ""}>{newText}</span>
            </h2>
            <p>يمكنك الأن التواصل مع المدربين في مختلف المهارات من جميع انحاء الوطن العربي. </p>
            <div className="analytics">
              <div className="row">
                <span>
                  <i className="fa-light fa-chalkboard-user"></i>
                  <p> +500 مدرب</p>
                </span>
                <span>
                  <i className="fa-light fa-graduation-cap"></i>
                  <p> +100 تخصص</p>
                </span>
                <span>
                  <i className="fa-light fa-user"></i>
                  <p> +20,000 مستخدم</p>
                </span>
              </div>
            </div>
              <button>ابدأ الأن</button>
          </div>
          <div className="main-img">
            <img src={main} alt="Main Hero Image" />
          </div>
        </div>
      </div>
      <div className="section">
        <div className="row">
          <div className="section-text">
            <h2>المنصة الأولى في الوطن العربى للتعلم عن بعد.</h2>
            <p>
              مع طورنى يمكنك التواصل مع العديد من المدربين والمتخصصين في جميع
              انحاء الوطن العربي للتعلم عن البد واستكشاف المهارات التقنية والغير
              التقنية .. تصفح اقسام المنصة الأن او ابدأ معنا كا متخصص وساعد في
              نشر العلم مع الكثير من المستخدمين واحصل على العديد من الجوائز
              القيمة.
            </p>
            <button> ابدأ الأن مع طورنى</button>
          </div>
          <div className="section-img">
            <img src={skills} alt="section-img" />
          </div>
        </div>
      </div>
      <div className="section-fw">
        <h2>جرب التعلم مع طورنى</h2>
        <p>
          مع طورنى انت على بعد خطوة واحدة من تعلم مهارة جديدة يمكنك الاختيار بين
          اكثر التخصصات طلبًا في سوق العمل العربي واستكشف مهارات جديدة.
        </p>
        <div className="row">
          <span>
            <i className="fa-light fa-tv"></i>
            <p> علوم الحاسب</p>
          </span>
          <span>
            <i className="fa-light fa-code"></i>
            <p> تصميم وتطوير</p>
          </span>
          <span>
            <i className="fa-light fa-camera"></i>
            <p> تصوير وكتابة</p>
          </span>
        </div>
        <button>تصفح الاقسام</button>
      </div>
      <div className="section">
        <div className="row">
          <div className="section-img">
            <img src={vault} alt="section-img" />
          </div>
          <div className="section-text">
            <h2>سجل مع طورنى الأن واحصل على جوائز ضخمة.</h2>
            <p>
              سجل مع منصة طورنى وساهم في نشر العلم والمهارات على مستوى الوطن
              العربي وساعد الكثير على تطوير مهاراتهم وقدراتهم في المجال المفضل
              اليك واحصل على مكافأت وجوائز قيمة.
            </p>
            <button> سجل الأن</button>
          </div>
        </div>
      </div>
    </div>
  );
}
