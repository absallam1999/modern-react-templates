import "./index.scss";

export default function Contact() {
  document.title = 'طورنى - تواصل معنا'
  return (
    <div className="contact">
      <div className="container">
        <h2>لا تتردد في التواصل.</h2>
        <div className="row">
          <div className="form">
            <form>
              <input type="name" name="Name" placeholder="الاسم" />
              <input
                type="email"
                name="email"
                placeholder="البريد الالكترونى"
              />
              <textarea placeholder="ادخل رسالتك" />
              <button>ارسال</button>
            </form>
          </div>
          <div className="text">
            <h3> معلومات التواصل</h3>
            <p> العنوان: 717 شارع المعز لدين الله الفاطمى - القاهرة</p>
            <p> رقم الهاتف : 0123456789</p>
            <p> البريد الالكترونى: Twrny@platform.com</p>
          </div>
        </div>
      </div>
    </div>
  );
}
