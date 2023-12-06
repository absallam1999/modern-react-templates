import form from "./../../assets/icons/form.svg";
import teach from "./../../assets/icons/teach.svg";
import vault from "./../../assets/icons/vault.svg";
import arrow1 from "./../../assets/icons/arrow1.png";
import arrow2 from "./../../assets/icons/arrow2.png";
import arrow3 from "./../../assets/icons/arrow3.png";
import "./index.scss";

export default function Terms() {
  document.title = 'طورنى - الشروط والاستخدام'
  return (
    <div className="terms">
      <div className="container">
        <h1>كيف تستخدم طورنى</h1>
        <section className="first-sec">
          <div className="row">
            <div className="text">
              <h4>
                <span>1</span> الخطوة الاولى
              </h4>
              <h2>سجل في طورنى</h2>
              <p>
                سجل الأن في موقع طورنى وقم بنشر مهاراتك مع العديد من المستخدمين
                حول الوطن العربي.
              </p>
              <button> ابدأ معنا</button>
            </div>
            <div className="img">
              <img src={form} alt="how to use twrny" />
            </div>
          </div>
        </section>
        <div className="first-arr">
          <img src={arrow1} alt="arrow" />
        </div>
        <section className="second-sec">
          <div className="row">
            <div className="img">
              <img src={teach} alt="how to use twrny" />
            </div>
            <div className="text">
              <h4>
                <span>2</span> الخطوة الثانية
              </h4>
              <h2>انشر مهاراتك</h2>
              <p>توفر منصة طورنى لوحة تحكم لكل مستخدم لتسهيل نشر مهاراتة.</p>
              <button>اعرف اكثر</button>
            </div>
          </div>
        </section>
        <div className="second-arr">
          <img src={arrow2} alt="arrow" />
        </div>
        <section className="third-sec">
          <div className="row">
            <div className="text">
              <h4>
                <span>3</span> الخطوة الثالثة
              </h4>
              <h2>اربح جوائز قيمة</h2>
              <p>ساعد في زيادة نشر المهارات واربح جوائز قيمة.</p>
              <button>سجل الأن</button>
            </div>
            <div className="img">
              <img src={vault} alt="how to use twrny" />
            </div>
          </div>
        </section>
        <div className="third-arr">
          <img src={arrow3} alt="arrow" />
        </div>
      </div>
    </div>
  );
}
