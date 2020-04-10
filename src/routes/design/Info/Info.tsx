import React from 'react';
import Menu from '../Navbar';
import { Row, Col } from 'react-bootstrap';

const Landing = () => (
  <>
    <Menu />
    <div className="container-fluid mt-4">
      <Row className="mb-2">
        <Col md={4}>
          <div className="rounded bg-bluelight overflow-hidden">
            <div className="p-4 text-white">
              <div className="hospital-title">Teku Hospital</div>
              <div className="my-3">
                <img src="" className="img-responsive" alt="hospital" />
              </div>

              <ul className="hospitalinfo-list">
                <li>
                  <span className="text-secondary">Address:</span>{' '}
                  <span className="ml-2 text-success">Teku, Kathmandu</span>
                </li>
                <li>
                  <span className="text-secondary">Open hours:</span>
                  <span className="mx-2">8 AM - 3 PM</span>
                  <span className="ml-3">SUN - FRI</span>
                </li>
                <li>
                  <span className="text-secondary">Beds for COVID-19 patients :</span>
                  <span className="ml-2 h6 mb-0 text-warning font-weight-bold">50 / 120</span>
                </li>
                <li>
                  <span className="text-secondary">Contact :</span>
                  <span className="mx-2 bg-success rounded py-1 px-2">
                    <svg
                      id="Group_16"
                      data-name="Group 16"
                      xmlns="http://www.w3.org/2000/svg"
                      width="98"
                      height="18"
                      viewBox="0 0 98 18"
                    >
                      <path
                        id="Icon_material-call"
                        data-name="Icon material-call"
                        d="M4.063,6.727a9.678,9.678,0,0,0,4.21,4.21L9.679,9.532a.635.635,0,0,1,.652-.153,7.288,7.288,0,0,0,2.281.364.641.641,0,0,1,.639.639v2.23a.641.641,0,0,1-.639.639A10.86,10.86,0,0,1,1.75,2.389a.641.641,0,0,1,.639-.639H4.625a.641.641,0,0,1,.639.639A7.258,7.258,0,0,0,5.628,4.67a.641.641,0,0,1-.16.652L4.063,6.727Z"
                        transform="translate(-1.75 2.25)"
                        fill="#fff"
                      />
                      <text
                        id="_01-4253396"
                        data-name="01-4253396"
                        transform="translate(18)"
                        fill="#fff"
                        font-size="13"
                        font-family="OpenSans-Regular, Open Sans"
                      >
                        <tspan x="0" y="14">
                          01-4253396
                        </tspan>
                      </text>
                    </svg>
                  </span>
                  <span className="mx-2 bg-success rounded py-1 px-2">
                    <svg
                      id="Group_16"
                      data-name="Group 16"
                      xmlns="http://www.w3.org/2000/svg"
                      width="98"
                      height="18"
                      viewBox="0 0 98 18"
                    >
                      <path
                        id="Icon_material-call"
                        data-name="Icon material-call"
                        d="M4.063,6.727a9.678,9.678,0,0,0,4.21,4.21L9.679,9.532a.635.635,0,0,1,.652-.153,7.288,7.288,0,0,0,2.281.364.641.641,0,0,1,.639.639v2.23a.641.641,0,0,1-.639.639A10.86,10.86,0,0,1,1.75,2.389a.641.641,0,0,1,.639-.639H4.625a.641.641,0,0,1,.639.639A7.258,7.258,0,0,0,5.628,4.67a.641.641,0,0,1-.16.652L4.063,6.727Z"
                        transform="translate(-1.75 2.25)"
                        fill="#fff"
                      />
                      <text
                        id="_01-4253396"
                        data-name="01-4253396"
                        transform="translate(18)"
                        fill="#fff"
                        font-size="13"
                        font-family="OpenSans-Regular, Open Sans"
                      >
                        <tspan x="0" y="14">
                          01-4253396
                        </tspan>
                      </text>
                    </svg>
                  </span>
                </li>
                <li>
                  <span className="text-secondary">Hosptial Type :</span>
                  <span className="ml-2">Government</span>
                </li>
              </ul>
            </div>

            <div className="maps">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14130.828627230478!2d85.3069413!3d27.6954445!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xbd8552665e65d95b!2sTeku%20Hospital%20(Shukraraaj%20Tropical%20%26%20Infectious%20Disease%20Hospital)!5e0!3m2!1sen!2snp!4v1584778123055!5m2!1sen!2snp"
                width="400"
                height="300"
                title="design"
              ></iframe>
            </div>
          </div>
        </Col>

        <Col md={8} lg={7}>
          <div className="py-4 px-5 rounded bg-bluelight">
            <div className="hospital-title">Process of Testing</div>

            <div className="mt-4 text-secondary">
              Integer at faucibus urna. Nullam condimentum leo id elit sagittis auctor. Curabitur elementum nunc a leo
              imperdiet, nec elemetum diam elementum.accumsan mauris. Phasellus egestas et risus sit amet hendrerit.
              Nulla facilisi. Cras urna sem, vulputate sed contum a, posuere vel enim.
            </div>

            <ul className="numc mt-5">
              <li>
                In at iaculis lorem praesent tempor dictum tellus ut molestie. Sed sed ullamcorper lorem, id faucibus
                odio.
              </li>
              <li>
                In at iaculis lorem praesent tempor dictum tellus ut molestie. Sed sed ullamcorper lorem, id faucibus
                odio.
              </li>
              <li>
                In at iaculis lorem praesent tempor dictum tellus ut molestie. Sed sed ullamcorper lorem, id faucibus
                odio.
              </li>
              <li>
                In at iaculis lorem praesent tempor dictum tellus ut molestie. Sed sed ullamcorper lorem, id faucibus
                odio.
              </li>
              <li>
                In at iaculis lorem praesent tempor dictum tellus ut molestie. Sed sed ullamcorper lorem, id faucibus
                odio.
              </li>
            </ul>
          </div>
        </Col>
      </Row>
    </div>
    
      
    <div className="small  pt-2 pb-3  text-center supported-by">
        Supported by 
        <a href="https://fusemachines.com/" className="text-white mx-2" target="_blank" rel="noopener noreferrer">
          <svg xmlns="http://www.w3.org/2000/svg" width="77.601" height="11.328" viewBox="0 0 77.601 11.328">
            <path id="Path_6355" data-name="Path 6355" d="M169.377,209.458a.244.244,0,0,0-.266-.269h-.461v-1.633h1.939c.62,0,.886.266.886.884v2.768a.994.994,0,0,0,1.986,0v-3.65h2.1v4.207a.244.244,0,0,0,.266.268h.461v1.908l-1.854,0a.84.84,0,0,1-.873-.856v-.229h-.023a2.15,2.15,0,0,1-1.942,1.078c-1.235,0-2.218-.582-2.218-2.34Zm8.483,2.056a3.075,3.075,0,0,0,1.83.878c.3,0,.473-.083.473-.3,0-.509-3.127-.675-3.127-2.655,0-1.314,1.248-1.884,2.568-1.884,1.019,0,2.426.284,2.426,1.386v.605H180.21v-.177c0-.166-.266-.284-.569-.284s-.557.094-.557.284c0,.629,3.163.544,3.163,2.594,0,1.233-1.1,1.979-2.559,1.979a3.816,3.816,0,0,1-2.764-1.113Zm8.179-3.955a2.705,2.705,0,0,1,2.819,2.945c0,.2-.048.613-.048.613h-3.846a1.362,1.362,0,0,0,1.421,1.113,2.836,2.836,0,0,0,1.619-.638l.816,1.371a3.92,3.92,0,0,1-2.6.971,3.161,3.161,0,0,1-3.349-3.2,3.032,3.032,0,0,1,3.17-3.181m.723,2.315a.767.767,0,0,0-.723-.779.976.976,0,0,0-1.015.779Zm5.263-4.778h.7V216.41h-.7Zm31.3.435a.413.413,0,1,1-.413.412.415.415,0,0,1,.413-.412m.287,8.41h-.57v-6.385h.57ZM241.6,212.2a1.487,1.487,0,0,1-.639,1.292,3.1,3.1,0,0,1-1.814.451,4.349,4.349,0,0,1-1.993-.384v-.615a4.418,4.418,0,0,0,1.993.471,2.648,2.648,0,0,0,1.408-.307.938.938,0,0,0,.48-.821c0-1.527-2.759-1.218-3.532-2.45a1.39,1.39,0,0,1-.192-.754,1.284,1.284,0,0,1,.59-1.11,2.877,2.877,0,0,1,1.65-.408,4.931,4.931,0,0,1,1.924.38l-.215.52a4.464,4.464,0,0,0-1.709-.383,2.494,2.494,0,0,0-1.216.253.781.781,0,0,0-.449.7c0,1.481,2.741,1.172,3.523,2.432a1.35,1.35,0,0,1,.193.73m-7.821,1.741a2.724,2.724,0,0,1-2.128-.84,3.071,3.071,0,0,1-.765-2.236,3.67,3.67,0,0,1,.738-2.4,2.434,2.434,0,0,1,1.987-.9,2.144,2.144,0,0,1,1.744.77,3.2,3.2,0,0,1,.639,2.1v.46h-4.508a2.65,2.65,0,0,0,.6,1.853,2.119,2.119,0,0,0,1.692.678,5.251,5.251,0,0,0,.941-.074,5.9,5.9,0,0,0,1.028-.323v.518a4.6,4.6,0,0,1-.98.314,5.336,5.336,0,0,1-.989.082m-.168-5.87a1.879,1.879,0,0,0-1.452.6,2.823,2.823,0,0,0-.639,1.718h3.87a2.731,2.731,0,0,0-.471-1.7,1.56,1.56,0,0,0-1.307-.614m-4.454,5.872v-4.058a1.994,1.994,0,0,0-.4-1.374,1.619,1.619,0,0,0-1.234-.428,2.136,2.136,0,0,0-1.643.568,2.671,2.671,0,0,0-.522,1.84v3.453h-.57l0-6.385h.485l.1.984h.036a2.348,2.348,0,0,1,2.17-.977q2.13,0,2.133,2.285v4.093Zm-7.852,0v-4.058a2,2,0,0,0-.4-1.374,1.618,1.618,0,0,0-1.233-.428,2.132,2.132,0,0,0-1.644.568,2.678,2.678,0,0,0-.522,1.84v3.453h-.569v-8.847h.569v2.739l-.03.8h.043a2.109,2.109,0,0,1,.884-.816,3.117,3.117,0,0,1,1.333-.254q2.128,0,2.13,2.285v4.093Zm-7.106,0a2.682,2.682,0,0,1-2.1-.845,3.409,3.409,0,0,1-.76-2.362,3.175,3.175,0,0,1,.788-2.308,2.79,2.79,0,0,1,2.162-.864,4.368,4.368,0,0,1,1.554.281l-.154.507a4.558,4.558,0,0,0-1.413-.271,2.142,2.142,0,0,0-1.745.712,2.788,2.788,0,0,0-.593,1.932,3.031,3.031,0,0,0,.593,1.985,2.032,2.032,0,0,0,1.658.716,4.051,4.051,0,0,0,1.585-.305v.53a3.612,3.612,0,0,1-1.573.292m-4.458,0-.153-1.1h-.046a2.933,2.933,0,0,1-.969.855,2.591,2.591,0,0,1-1.178.251,2.037,2.037,0,0,1-1.435-.474,1.687,1.687,0,0,1-.511-1.305,1.611,1.611,0,0,1,.763-1.423,4.149,4.149,0,0,1,2.209-.536l1.192-.034v-.316a2.114,2.114,0,0,0-.364-1.349,1.406,1.406,0,0,0-1.169-.453,3.907,3.907,0,0,0-1.8.483l-.212-.495a4.764,4.764,0,0,1,2.039-.485,2.027,2.027,0,0,1,1.539.537,2.347,2.347,0,0,1,.51,1.67l.009,4.173Zm-2.311-.513a1.99,1.99,0,0,0,2.158-2.163v-.616l-1.093.046a4.107,4.107,0,0,0-1.88.413,1.331,1.331,0,0,0-.2,2,1.459,1.459,0,0,0,1.017.325m-3.713.515v-4.1a2.045,2.045,0,0,0-.359-1.336,1.353,1.353,0,0,0-1.093-.422,1.8,1.8,0,0,0-1.424.531,2.513,2.513,0,0,0-.46,1.665v3.664h-.58v-4.276q0-1.584-1.452-1.585a1.705,1.705,0,0,0-1.434.575,2.982,2.982,0,0,0-.448,1.833v3.453h-.57v-6.36h.472l.121.96h.034a1.808,1.808,0,0,1,.736-.722,2.2,2.2,0,0,1,1.055-.256,1.8,1.8,0,0,1,1.9,1.111h.021a2.144,2.144,0,0,1,.822-.823,2.368,2.368,0,0,1,1.171-.288,2,2,0,0,1,1.537.548,2.476,2.476,0,0,1,.513,1.738v4.093Zm-38.954-4.748H164v-1.637h.764v-.144c0-2.05,1.853-2.33,2.86-2.33a4.9,4.9,0,0,1,.631.037v1.771a2.42,2.42,0,0,0-.341-.023c-.412,0-1.054.071-1.054.607v.083h1.152v1.637H166.86v4.748h-2.1Z" transform="translate(-164 -205.083)" fill="#fff"/>
          </svg>
        </a>
      </div>
  </>
);

export default Landing;