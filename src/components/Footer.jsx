import { Link } from "react-router-dom"

function Footer() {
    return (
        <>
            <div className="container-fluid" style={{ borderRadius: "4px" }}>
                <footer className="text-center container-fluid">
                    <div className="container">
                        <section className="text-center">
                            <Link to="https://www.facebook.com/nikki.dev.2023" className="text-black me-4">
                                <i className="fab fa-facebook-f"></i>
                            </Link>
                            <Link to="https://twitter.com/TheBaneknekDev" className="text-black me-4">
                                <i className="fab fa-twitter"></i>
                            </Link>
                            <Link to="mailto:ma.nikki.zapuiz@gmail.com" className="text-black me-4">
                                <i className="fab fa-google"></i>
                            </Link>
                            <Link to="https://www.instagram.com/thebaneknekdev/" className="text-black me-4">
                                <i className="fab fa-instagram"></i>
                            </Link>
                            <Link to="https://www.linkedin.com/in/ma-nikki-zapuiz-ab956799/" className="text-black me-4">
                                <i className="fab fa-linkedin"></i>
                            </Link>
                            <Link to="https://github.com/NikkiZapuiz" className="text-black me-4">
                                <i className="fab fa-github"></i>
                            </Link>
                        </section>
                    </div>
                    <div className="text-center p-3" style={{ color: 'black' }}>
                        © {new Date().getFullYear()} Nikki.dev All rights reserved.
                    </div>
                </footer>
            </div>
        </>
    )
}

export default Footer