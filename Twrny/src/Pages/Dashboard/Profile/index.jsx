import avatar from './../../../assets/icons/avatar.svg'
import './index.scss'

export default function Profile(props){
    return(
        <div className='dashboard-profile' style={{display: props.hidden === true ? "block" : "none"}}>
            <div className='container'>
                <h2 className='header'>المعلومات الشخصية</h2>
                <div className='row'>
                    <div className='profile-img'>
                        <img src={avatar} alt='Profile Image'/>
                    </div>
                    <div className='profile-info'>
                    <div className='info'>
                        <div className='info-header'>
                        <h2>الاسم: الأول_الأخير</h2>
                        <button>تعديل</button>
                        </div>
                    <i className='fa-light fa-at'></i><p>absallam</p>
                    </div>
                    <div className='location'>
                    <i className='fa-light fa-location-dot'></i><p>القاهرة, مصر</p>
                    </div>
                    <div className='bio'>
                    <p>مثال على نص يمكن تغيرة بـسهولة مثال على نص يمكن تغيرة بـسهولة مثال على نص يمكن تغيرة بـسهولة مثال على نص يمكن تغيرة بـسهولة مثال على نص يمكن تغيرة بـسهولة مثال على نص يمكن تغيرة بـسهولة</p>
                    </div>
                    {/* <div className='profile-statics'>
                    <p><i className='fa-light fa-user-group'></i>124 الاصدقاء</p>
                    <p><i className="fa-light fa-compass-drafting"></i>5 المهارات</p>
                    </div> */}
                    </div>
                </div>
                <div className='user-contact'>
                    <div className='social-box'>
                    <p>Facebook</p><i className='fa-brands fa-facebook-f'></i>
                    </div>
                    <div className='social-box'>
                    <p>Twitter</p><i className='fa-brands fa-twitter'></i>
                    </div>
                    <div className='social-box'>
                    <p>Whatsapp</p><i className='fa-brands fa-whatsapp'></i>
                    </div>
                </div>
            </div>
        </div>
    )
}