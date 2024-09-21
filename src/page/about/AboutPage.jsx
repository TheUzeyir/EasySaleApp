import React,{useState} from 'react'
import Header from '../../layout/Header/Header'
import Footer from '../../layout/footer/Footer'
import style from "./aboutPage.module.css"
import Rules from './Rules'
import TermCondition from './TermCondition'
import Faq from './Faq'
import Contack from './Contack'
import Info from "./Info"

const AboutPage = () => {
  const [activeSection, setActiveSection] = useState('info'); 

  const renderSection = () => {
    switch (activeSection) {
      case 'info':
        return <Info />;
      case 'rules':
        return <Rules />;
      case 'termcondition':
        return <TermCondition />;
      case 'faq':
        return <Faq />;
      case 'contack':
        return <Contack />;
      default:
        return <Info />;
    }
  };

  return (
    <div>
      <Header/>
        <div className={style.aboutPage_head_container}>
          <div className="container">
          <div className={style.aboutPage_head}>
            <span
              className={`${style.aboutPage_head_title} ${activeSection === 'info' ? style.aboutPage_head_title_active : ''}`}
              onClick={() => setActiveSection('info')}
            >
              Haqqımızda
            </span>
            <span
              className={`${style.aboutPage_head_title} ${activeSection === 'rules' ? style.aboutPage_head_title_active : ''}`}
              onClick={() => setActiveSection('rules')}
            >
              Qaydalar
            </span>
            <span
              className={`${style.aboutPage_head_title} ${activeSection === 'termcondition' ? style.aboutPage_head_title_active : ''}`}
              onClick={() => setActiveSection('termcondition')}
            >
              İstifadəçi razılaşması
            </span>
            <span
              className={`${style.aboutPage_head_title} ${activeSection === 'faq' ? style.aboutPage_head_title_active : ''}`}
              onClick={() => setActiveSection('faq')}
            >
              FAQ
            </span>
            <span
              className={`${style.aboutPage_head_title} ${activeSection === 'contack' ? style.aboutPage_head_title_active : ''}`}
              onClick={() => setActiveSection('contack')}
            >
              Bizimlə əlaqə
            </span>
          </div>
          </div>
             {renderSection()}
        </div>
      <Footer/>
    </div>
  )
}

export default AboutPage