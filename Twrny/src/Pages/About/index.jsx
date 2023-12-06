import { useState } from "react";
import Logo from "./../../assets/icons/about.png";
import "./index.scss";

export default function About() {
  document.title = 'طورنى - من نحن'

  const [q1Style, setQ1Style] = useState(false);
  const [q2Style, setQ2Style] = useState(false);
  const [q3Style, setQ3Style] = useState(false);
  const [q4Style, setQ4Style] = useState(false);

  return (
    <div className="about">
      <div className="container">
        <div className="about-header">
          <h2> مرحبا بكم في منصة طورنى</h2>
          <p>
            منصة طورنى هى المنصة الأولى في الوطن العربي في فكرتها حيث تقوم
            بتوصيل المعلم بـالمتدرب بشكل مجانى 100%.
          </p>
          <button>سجل الأن</button>
          <div className="about-img">
            <img src={Logo} alt="Logo" />
          </div>
        </div>
      </div>
      <div className="culture">
        <div className='culture-head'>
        <h2> ثقافة طورنى</h2>
        <p>تسعى طورنى دائما في مجال العلم حيث ان هدفنا نشر المهارات في الوطن العربي.</p>
        </div>
        <div className="row">
          <section>
            <h3>حب التعلم</h3>
            <p>حيث اننا في طورنى نحب التعلم.</p>
          </section>
          <section>
            <h3>التعلم عن بعد</h3>
            <p>يعد التعلم عن بعد من اهم طرق التعلم حديثا ً.</p>
          </section>
          <section>
            <h3>مجانى وسيبقي مجانى</h3>
            <p>هدفنا هو نشر المهارات في الوطن العربي.</p>
          </section>
        </div>
      </div>
      <div className="asked">
        <h2> الاسئلة الشائعة</h2>
        <section>
          <span>
            <h3>مثال على سؤال يمكن تغيرة</h3>
            <i
              className={q1Style ? "fa-light fa-arrow-down" : "fa-light fa-arrow-up"}
              onClick={() => setQ1Style(!q1Style)}
            ></i>
          </span>
          <p className={q1Style ? "hidden" : ""}>مثال على جواب يمكن تغيرة</p>
          <hr />
        </section>
        <section>
          <span>
            <h3>مثال على سؤال يمكن تغيرة</h3>
            <i
              className={q2Style ? "fa-light fa-arrow-up" : "fa-light fa-arrow-down"}
              onClick={() => setQ2Style(!q2Style)}
            ></i>
          </span>
          <p className={q2Style ? "" : "hidden"}>مثال على جواب يمكن تغيرة</p>
          <hr />
        </section>
        <section>
          <span>
            <h3>مثال على سؤال يمكن تغيرة</h3>
            <i
              className={q3Style ? "fa-light fa-arrow-up" : "fa-light fa-arrow-down"}
              onClick={() => setQ3Style(!q3Style)}
            ></i>
          </span>
          <p className={q3Style ? "" : "hidden"}>مثال على جواب يمكن تغيرة</p>
          <hr />
        </section>
        <section>
          <span>
            <h3>مثال على سؤال يمكن تغيرة</h3>
            <i
              className={q4Style ? "fa-light fa-arrow-up" : "fa-light fa-arrow-down"}
              onClick={() => setQ4Style(!q4Style)}
            ></i>
          </span>
          <p className={q4Style ? "" : "hidden"}>مثال على جواب يمكن تغيرة</p>
          <hr />
        </section>
      </div>
    </div>
  );
}
