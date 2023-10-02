import AutoScrollLogo from "../components/AutoSrollLogo";
import TypingAnimation from "../components/TypingAnimation";




function HomePage() {
    return (
        <>
            <div className='container d-flex justify-content-center align-items-center me-4' style={{ maxHeight: '78vh', }}>
                <div className='col-5 text-center container-fluid justify-content-end ms-5'>
                    <h3>Full-Stack Web Developer</h3>
                    <div className='d-flex row align-items-center d-flex justify-content-center'>
                        <h4 className='p-2' style={{ fontSize: '18px' }}>Hi, I'm Nikki. <i className="fa-regular fa-hand-point-up fa-bounce" style={{ color: "#0a0a0a" }}></i></h4>
                        <h6 className='p-2'>A Web Developer based in the Philippines.</h6>
                    </div>
                    <div>
                        <strong><TypingAnimation /></strong>
                    </div>
                    <AutoScrollLogo />
                </div>
                <div className='col-7'>
                    <img style={{ borderRadius: "20px", maxHeight: "91vh", maxWidth: "50vw", marginBottom: "17vh" }} src="/Untitled design (18).png" alt="nikki-zapuiz" />
                </div>
            </div>
        </>
    );
};

export default HomePage;
