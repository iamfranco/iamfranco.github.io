import './Contact.scss'
import githubIcon from './../../assets/icons/github.svg'
import linkedinIcon from './../../assets/icons/linkedin.svg'
import pdfIcon from './../../assets/icons/pdf.svg'

interface IconLink {
  href: string;
  img: string;
  text: string;
}

const Contact = () => {
  const iconLinks: IconLink[] = [
    {
      href: "https://github.com/iamfranco",
      img: githubIcon,
      text: "GitHub"
    },
    {
      href: "https://www.linkedin.com/in/kffchan/",
      img: linkedinIcon,
      text: "LinkedIn"
    },
    {
      href: "https://github.com/iamfranco",
      img: pdfIcon,
      text: "My CV"
    }
  ]

  const iconLinksSection = iconLinks.map(iconLink => (
    <a className='icon-link' href={iconLink.href} target='_blank'>
      <img src={iconLink.img} alt={iconLink.text} />
      <div>
        {iconLink.text}
      </div>
    </a>
  ));

  return (
    <div id="demo-gif-container">
      <div className="contact-center-box">
        <div id="demo-gif-heading">
          Contact me for <strong>any reason</strong>
        </div>
        <div>
          {iconLinksSection}
        </div>
      </div>
    </div>
  )
}

export default Contact