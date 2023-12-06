import {useState} from 'react'
import { Link } from "react-router-dom";
import logo from './../../assets/logo.png'
import Profile from './Profile'
import Friends from './Friends'
import Skills from './Skills'
import Settings from './Settings'
import "./index.scss";

export default function Dashboard() {
  document.title = 'طورنى - لوحة التحكم'
  const [profileHidden, setProfileHidden] = useState(true)
  const [skillsHidden, setSkillsHidden] = useState(false)
  const [friendsHidden, setFriendsHidden] = useState(false)
  const [settingsHidden, setSettingsHidden] = useState(false)

  const showProfile = () => {
    setProfileHidden(true)
    setSkillsHidden(false)
    setFriendsHidden(false)
    setSettingsHidden(false)
  }
  const showSkills = () => {
    setProfileHidden(false)
    setSkillsHidden(true)
    setFriendsHidden(false)
    setSettingsHidden(false)
  }
  const showFriends = () => {
    setProfileHidden(false)
    setSkillsHidden(false)
    setFriendsHidden(true)
    setSettingsHidden(false)
  }
    const showSettings = () => {
    setProfileHidden(false)
    setSkillsHidden(false)
    setFriendsHidden(false)
    setSettingsHidden(true)
  }

  return (
    <div className="dashboard">
      <div className="container">
        <div className="row">
          <div className="sidebar">
            <aside>
              <div className="logo">
                <Link to="/">
                  <img src={logo} alt='Logo'/>
                </Link>
              </div>
              <div className="navigation">
                <Link to="/dashboard/#profile" onClick={() => showProfile()}>
                <i className="fa-light fa-user"></i><p>الصفحة الشخصية</p>
                </Link>
                <Link to="/dashboard/#skills" onClick={() => showSkills()}>
                <i className="fa-light fa-folder"></i><p>المهارات</p>
                </Link>
                <Link to="/dashboard/#friends" onClick={() => showFriends()}>
                <i className="fa-light fa-user-group"></i><p>الاصدقاء</p>
                </Link>
                <Link to="/dashboard/#settings" onClick={() => showSettings()}>
                <i className="fa-light fa-gear"></i><p>الاعدادات</p>
                </Link>
              </div>
              <button>تسجيل خروج</button>
            </aside>
          </div>
          <div className="content">
            <Profile hidden={profileHidden}/>
            <Skills hidden={skillsHidden}/>
            <Friends hidden={friendsHidden}/>
            <Settings hidden={settingsHidden}/>
          </div>
        </div>
      </div>
    </div>
  );
}
