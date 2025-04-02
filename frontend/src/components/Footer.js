import { useState } from 'react';
import useFetch from '../useFetch';

function Footer() {
    const { isLoading, error, data } = useFetch(`${process.env.REACT_APP_BACKEND}/api/footer`)

    let link = [];

    const [open, setOpen] = useState(false)
    const [navHeight, setNavHeight] = useState('0vH')

    const menuToggle = () => {

        if (open == true) {
            setNavHeight('0vH')
            setOpen(false)
        }

        if (open == false) {
            console.log(window.innerWidth)
            setNavHeight('100%')
            setOpen(true)
        }
    }
    
    if (data) {
        link = data.data.attributes.Instagram_Link
        return (
            <div className="footer-wrapper">
                <div className="main-footer-wrapper">
                    <a href={link} target="_blank">
                        <svg className="social-icon" viewBox="0 0 676 676" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M338 194.25C309.569 194.25 281.776 202.681 258.137 218.476C234.497 234.272 216.072 256.722 205.192 282.989C194.312 309.256 191.466 338.159 197.012 366.044C202.559 393.929 216.25 419.543 236.353 439.647C256.457 459.75 282.071 473.441 309.956 478.988C337.841 484.534 366.744 481.688 393.011 470.808C419.278 459.928 441.728 441.503 457.524 417.863C473.319 394.224 481.75 366.431 481.75 338C481.707 299.888 466.548 263.35 439.599 236.401C412.65 209.452 376.112 194.293 338 194.25ZM338 406.75C324.403 406.75 311.11 402.718 299.805 395.164C288.499 387.609 279.687 376.872 274.483 364.309C269.28 351.747 267.918 337.924 270.571 324.588C273.224 311.251 279.772 299.001 289.386 289.386C299.001 279.772 311.251 273.224 324.588 270.571C337.924 267.918 351.747 269.28 364.309 274.483C376.872 279.687 387.609 288.499 395.164 299.805C402.718 311.11 406.75 324.403 406.75 338C406.729 356.227 399.48 373.702 386.591 386.591C373.702 399.48 356.227 406.729 338 406.75ZM488 0.5H188C138.289 0.556342 90.6306 20.3288 55.4797 55.4797C20.3288 90.6306 0.556342 138.289 0.5 188V488C0.556342 537.711 20.3288 585.369 55.4797 620.52C90.6306 655.671 138.289 675.444 188 675.5H488C537.711 675.444 585.369 655.671 620.52 620.52C655.671 585.369 675.444 537.711 675.5 488V188C675.444 138.289 655.671 90.6306 620.52 55.4797C585.369 20.3288 537.711 0.556342 488 0.5ZM600.5 488C600.466 517.827 588.603 546.422 567.512 567.512C546.422 588.603 517.827 600.466 488 600.5H188C158.173 600.466 129.578 588.603 108.488 567.512C87.397 546.422 75.5336 517.827 75.5 488V188C75.5336 158.173 87.397 129.578 108.488 108.488C129.578 87.397 158.173 75.5336 188 75.5H488C517.827 75.5336 546.422 87.397 567.512 108.488C588.603 129.578 600.466 158.173 600.5 188V488ZM550.5 175.5C550.5 185.389 547.568 195.056 542.073 203.279C536.579 211.501 528.77 217.91 519.634 221.694C510.498 225.478 500.445 226.469 490.745 224.539C481.046 222.61 472.137 217.848 465.145 210.855C458.152 203.863 453.39 194.954 451.461 185.255C449.531 175.555 450.522 165.502 454.306 156.366C458.09 147.23 464.499 139.421 472.721 133.927C480.944 128.432 490.611 125.5 500.5 125.5C513.756 125.515 526.465 130.788 535.839 140.161C545.212 149.535 550.485 162.244 550.5 175.5Z" />
                        </svg>
                    </a>
                    <div className="horizontal-line"></div>
                    <a href="/contact"><p>Contact</p></a>
                    <div className="horizontal-line"></div>
                    <p onClick={() => menuToggle()}>Newsletter</p>
                </div>
                <div className="footer-subnav-wrapper" >
                    <form className="footer-form" style={{ height: navHeight }}>
                        <div>
                            <input
                                type="text"
                                placeholder="First Name"
                                name="fname"
                                className="footer-input"
                                required
                            />
                            <input
                                type="text"
                                placeholder="Last Name"
                                name="lname"
                                className="footer-input"
                                required
                            />
                            <input
                                type="email"
                                placeholder="Email"
                                name="email"
                                className="footer-input"
                                required
                            />
                            <button>Join</button>
                        </div>
                    </form>
                </div>
            </div>
        );
    }

}

export default Footer;