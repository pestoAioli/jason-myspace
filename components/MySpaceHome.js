import styles from '../styles/Home.module.css'
import Image from 'next/image';
import ThreeStyle from '../components/ThreeStyle.js'

export default function MySpaceHome() {

  return (
    <div className={styles.main}>
      <div className={styles.left}>
        <h1>Jason Holtz</h1>
        <div style={{ display: 'flex' }}>
          <Image
            src="/Wallace_and_gromit.jpeg"
            alt="portrait of the young artist"
            width={180}
            height={98}
          />
          <div style={{ display: 'flex', flexDirection: 'column', marginLeft: '20px' }}>
            <p> "<strong>It is 100 seconds to midnight</strong>"</p>
            <p>
              He/Him <br />
              28 years old <br />
              Petaluma, <br />
              California <br />
              Earth
            </p>
            <p>Last login: 4/20/2008</p>
          </div>
        </div>
        <div>
          <table style={{ border: '1px solid #6698cc', width: '300px', marginTop: '12px' }}>
            <tbody style={{}} >
              <tr>
                <td style={{ height: '15px', backgroundColor: '#6699cc', padding: '2px', }}>
                  <span style={{ color: 'white', fontWeight: 'bolder', fontSize: '12px', marginLeft: '8px' }}>Contacting Jason</span>
                </td>
              </tr>
              <tr>
                <td style={{}}>
                  <table >
                    <tbody>
                      <tr style={{ width: '1px', height: '5px', border: 0 }}>
                      </tr>
                      <tr>
                        <td style={{ width: '120px', height: '5px', textAlign: 'center' }}>
                          <a href="mailto:jasonrholtz@gmail.com" >
                            <Image
                              src="https://web.archive.org/web/20060408160943im_/http://x.myspace.com/images/sendMailIcon.gif"
                              alt='pop'
                              width={114}
                              height={29}
                            /> </a>
                        </td>
                        <td style={{ width: '15px', height: '5px' }}></td>
                        <td style={{ width: '120px', height: '5px', textAlign: 'center' }}>
                          <a href="mailto:jasonrholtz@gmail.com" >
                            <Image
                              src="https://web.archive.org/web/20060408160943im_/http://x.myspace.com/images/sendMailIcon.gif"
                              alt='pop'
                              width={114}
                              height={29}
                            /> </a>
                        </td>

                      </tr>
                      <tr>
                        <td style={{ width: '120px', height: '5px', textAlign: 'center' }}>
                          <a href="mailto:jasonrholtz@gmail.com" >
                            <Image
                              src="https://web.archive.org/web/20060408160943im_/http://x.myspace.com/images/sendMailIcon.gif"
                              alt='pop'
                              width={114}
                              height={29}
                            /> </a>
                        </td>

                        <td style={{ width: '15px', height: '5px' }}></td>
                        <td style={{ width: '120px', height: '5px', textAlign: 'center' }}>
                          <a href="mailto:jasonrholtz@gmail.com" >
                            <Image
                              src="https://web.archive.org/web/20060408160943im_/http://x.myspace.com/images/sendMailIcon.gif"
                              alt='pop'
                              width={114}
                              height={29}
                            /> </a>
                        </td>

                      </tr>
                      <tr>
                        <td style={{ width: '120px', height: '5px', textAlign: 'center' }}>
                          <a href="mailto:jasonrholtz@gmail.com" >
                            <Image
                              src="https://web.archive.org/web/20060408160943im_/http://x.myspace.com/images/sendMailIcon.gif"
                              alt='pop'
                              width={114}
                              height={29}
                            /> </a>
                        </td>
                        <td style={{ width: '15px', height: '5px' }}></td>
                        <td style={{ width: '120px', height: '5px', textAlign: 'center' }}>
                          <a href="mailto:jasonrholtz@gmail.com" >
                            <Image
                              src="https://web.archive.org/web/20060408160943im_/http://x.myspace.com/images/sendMailIcon.gif"
                              alt='pop'
                              width={114}
                              height={29}
                            /> </a>
                        </td>

                      </tr>
                      <tr>
                        <td style={{ width: '120px', height: '5px', textAlign: 'center' }}>
                          <a href="mailto:jasonrholtz@gmail.com" >
                            <Image
                              src="https://web.archive.org/web/20060408160943im_/http://x.myspace.com/images/sendMailIcon.gif"
                              alt='pop'
                              width={114}
                              height={29}
                            /> </a>
                        </td>
                        <td style={{ width: '15px', height: '5px' }}></td>
                        <td style={{ width: '120px', height: '5px', textAlign: 'center' }}>
                          <a href="mailto:jasonrholtz@gmail.com" >
                            <Image
                              src="https://web.archive.org/web/20060408160943im_/http://x.myspace.com/images/sendMailIcon.gif"
                              alt='pop'
                              width={114}
                              height={29}
                            /> </a>
                        </td>
                      </tr>

                      <tr></tr>
                    </tbody>
                  </table>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div style={{ border: '1px solid black', marginTop: 24, marginBottom: 24, width: '300px', textAlign: 'center' }}><p><strong>Instagram:</strong> <a href='https://instagram.com/jason_holtz' style={{ color: 'blue' }}>@jason_holtz</a>  </p> </div>
        <div>
          <div>
            <h3 style={{ backgroundColor: '#6699cc', width: '300px', color: 'white', textAlign: 'center', margin: 0 }}>Jason's Interests</h3>
            <div style={{ display: 'flex' }}>
              <div>
                <p style={{ margin: 2, padding: '0px 50px 10px 0px', backgroundColor: '#B1D0F0', color: '#336699' }}><strong>General:</strong></p>
                <p style={{ margin: 2, padding: '0px 50px 12px 0px', backgroundColor: '#B1D0F0', color: '#336699' }}><strong>Music:</strong></p>
                <p style={{ margin: 2, padding: '0px 50px 12px 0px', backgroundColor: '#B1D0F0', color: '#336699' }}><strong>Books:</strong></p>
              </div>
              <div>
                <p style={{ margin: 2, padding: '1px 1px 10px 0px', backgroundColor: '#B1D0F0', width: '190px' }}>Observing life</p>
                <p style={{ margin: 2, padding: '1px 1px 10px 0px', backgroundColor: '#B1D0F0', width: '190px' }}>Everything & Country</p>
                <p style={{ margin: 2, padding: '1px 1px 10px 0px', backgroundColor: '#B1D0F0', width: '190px' }}>Le Guin</p>
              </div>
            </div>
          </div>
        </div>
        <div style={{ marginTop: '8px', border: '2px solid black' }}>
          <ThreeStyle />
          <p style={{ textAlign: 'center' }}>Tired of being Confused? Purchase your very own Multi-Dimensional Particle Alignment Device today for only 4 payments of 34.99!</p>
        </div>
      </div>
      <div className={styles.right}>
        <div style={{ border: "2px solid black", padding: '15px', textAlign: 'center' }}>
          <h2>Join the network</h2>
        </div>
        <div>
          <p><strong> Jason's latest blog entry </strong><a href='' style={{ color: 'blue' }}>[Subscribe to this blog]</a></p>
          <p>101 tips for perfectly straight lines <a href='' style={{ color: 'blue' }}>(view more)</a></p>
          <p>Drawing your emotions in the digital age<a href='' style={{ color: 'blue' }}>(view more)</a></p>
          <p>Travel Photos - "The Grocery Store"<a href='' style={{ color: 'blue' }}>(view more)</a></p>
          <a href='' style={{ color: 'blue' }}>[view all blog posts]</a>
        </div>
        <div>
          <h3 style={{ backgroundColor: '#FFCC99', width: '410px', color: '#FF6600', textAlign: 'center', margin: '0px', marginTop: '6px', }}>Jason's blurbs</h3>
        </div>
        <div>
          <h3 style={{ color: '#FF6600' }}> About: </h3>
          <p>Visual artist working to explore the complexities and simplicities of life, through a variety of mediums and styles.</p>
        </div>
        <h3 style={{ backgroundColor: '#FFCC99', width: '410px', color: '#FF6600', textAlign: 'center', margin: '0px', marginTop: '6px', }}>Jason's Friend Space</h3>
        <h3>Jason has <span style={{ color: 'red' }}>1</span> friend</h3>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '10px' }}>
          <div>
            Tom
            <a href='/works/1' >
              <Image
                src="/myspaceTom.jpeg"
                alt="portrait of the young artist"
                width={180}
                height={198}
              /></a>
          </div>
        </div>
        <h3 style={{ backgroundColor: '#FFCC99', width: '410px', color: '#FF6600', textAlign: 'center', margin: '0px', marginTop: '12px', }}>Jason's Friend's Top Comments</h3>
        <h3 style={{ fontSize: 'small' }}>Displaying <span style={{ color: 'red' }}>1</span> of <span style={{ color: 'red' }}> 69 </span>comments</h3>
        <div style={{ display: 'flex' }}>
          <div style={{ margin: 2, padding: ' 10px 20px', backgroundColor: '#FF9933', color: '#336699', textIndent: 80 }}>
            <p ><strong>Tom</strong></p>
            <Image
              src="/myspaceTom.jpeg"
              alt="portrait of the young artist"
              width={160}
              height={168}
            />
          </div>
          <div style={{ backgroundColor: '#F9D6B4', width: '186px', marginLeft: '4px' }}>
            <h2 style={{ marginLeft: '2px' }}>4/20/2016 2:33AM</h2>
            <p style={{ marginLeft: '2px' }}>I love the painting Jason, it really ties the room together!</p>
          </div>
        </div>
      </div>
    </div>
  )
}
