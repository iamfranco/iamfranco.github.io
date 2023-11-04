import './Contact.scss'
import githubIcon from './../../assets/icons/github.svg'
import linkedinIcon from './../../assets/icons/linkedin.svg'
import pdfIcon from './../../assets/icons/pdf.svg'

interface ContactLink {
  href: string;
  img: string;
  text: string;
}

const Contact = () => {
  const contactLinks: ContactLink[] = [
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
      href: "cv.pdf",
      img: pdfIcon,
      text: "My CV"
    }
  ]

  const contactLinksSection = contactLinks.map(contactLink => (
    <a className='icon-link' href={contactLink.href} target='_blank'>
      <img src={contactLink.img} alt={contactLink.text} />
      <div>
        {contactLink.text}
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
          {contactLinksSection}
        </div>
      </div>
    </div>
  )
}

export default Contact