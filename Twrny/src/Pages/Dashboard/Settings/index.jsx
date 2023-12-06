import './index.scss'

export default function Settings(props){
    return(
        <div className='dashboard-settings' style={{display: props.hidden === true ? "block" : "none"}}>
            <div className='container'>
            <div className='header'>
                <h2> الاعدادات</h2>
            </div>
            <div className='row'>
                <div className='info-form'>
                    <h3>تعديل بياناتك الشخصية</h3>
                    <form className='first-form'>
                    <input type='text' name='first-name' placeholder='الاسم الاول'/>
                    <input type='text' name='last-name' placeholder='الاسم الاخير'/>
                    <input type='text' name='user-name' placeholder='اسم المستخدم'/>
                    <input type='email' name='email' placeholder='البريد الالكترونى'/>
                    <input type='password' name='password' placeholder='كلمة السر'/>
                    <button type='submit'>تعديل</button>
                    </form>
                </div>
                <div className='social-form'>
                    <h3>اضافة روابط التواصل</h3>
                    <form className='second-form'>
                        <label>
                            <i className="fa-brands fa-facebook-f"></i>
                        </label>
                        <input type='text' name='facebook' placeholder='فيس بوك'/>
                        <label>
                            <i className="fa-brands fa-whatsapp"></i>
                        </label>
                        <input type='text' name='whatsapp' placeholder='واتساب'/>
                        <label>
                            <i className="fa-brands fa-twitter"></i>
                        </label>
                        <input type='text' name='twitter' placeholder='تويتر'/>
                        <button type='submit'>اضافة</button>
                    </form>
                </div>
            </div>
            </div>
        </div>
    )
}