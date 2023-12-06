import './index.scss'

export default function Skills(props){
    return(
        <div className='dashboard-skills' style={{display: props.hidden === true ? "block" : "none"}}>
            <div className='container'>
                <div className='header'>
                <h2>المهارات</h2>
                </div>
                <div className='row'>
                <div className='add-skill'>
                    <h3>اضف مهاراة جديدة</h3>
                <form>
                    <input type='text' name='add' placeholder='اضف مهاراة جديدة'/>
                    <label>التخصص</label>
                    <select>
                        <option value='0'>--</option>
                        <option value='1'>مهارات هندسية</option>
                        <option value='2'>مهارات برمجية</option>
                        <option value='3'>مهارات طبية</option>
                    </select>
                    <button type='submit'>اضافة</button>
                </form>
                </div>
                <div className='skills'>
                <div className='skill-box'>
                <i className="fa-light fa-compass-drafting"></i>
                <p>مهندس ميكانيكى</p>
                </div>
                <div className='skill-box'>
                <i className="fa-light fa-code"></i>
                <p>مهندس برمجيات</p>
                </div>
                <div className='skill-box'>
                <i className="fa-light fa-stethoscope"></i>
                <p>دكتور جراحة</p>
                </div>
                <div className='skill-box'>
                <i className="fa-light fa-hammer"></i>
                <p>اعمال يديوية</p>
                </div>
                <div className='skill-box'>
                <i className="fa-light fa-code"></i>
                <p>مهندس برمجيات</p>
                </div>
                <div className='skill-box'>
                <i className="fa-light fa-stethoscope"></i>
                <p>دكتور جراحة</p>
                </div>
                <div className='skill-box'>
                <i className="fa-light fa-hammer"></i>
                <p>اعمال يديوية</p>
                </div>
                <div className='skill-box'>
                <i className="fa-light fa-code"></i>
                <p>مهندس برمجيات</p>
                </div>
                <div className='skill-box'>
                <i className="fa-light fa-stethoscope"></i>
                <p>دكتور جراحة</p>
                </div>
                <div className='skill-box'>
                <i className="fa-light fa-hammer"></i>
                <p>اعمال يديوية</p>
                </div>
                </div>
                </div>
            </div>
        </div>
    )
}