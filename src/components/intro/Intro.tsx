import './Intro.scss';
import portrait from '../../assets/portrait.jpg';

const Intro = () => {
  return (
    <>
      <div id='intro-container'>
        <img id='portrait' src={portrait} alt="Profile Picture" />

        <div id='intro-words'>
          <h1 id='intro-heading'>Hi, I'm <strong>Franco</strong></h1>

          <p id='intro-description'>
            a <strong><span className='blue gradient'>backend</span> <span className='underline'>.NET</span> developer</strong><br/>
            who loves making fancy <strong className='red gradient'>frontend</strong> stuff
          </p>
        </div>
      </div>
    </>
  )
}

export default Intro