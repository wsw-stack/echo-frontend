import { Footer } from "../NavbarAndFooter/Footer"
import { LogoComponent } from "./Components/LogoComponent"
import { UploadForm } from "./Components/UploadForm"

export const Input = () => {
    return (
        <div className="d-flex flex-column min-vh-100 bg-dark">
            <div className="container d-flex justify-content-center align-items-center flex-grow-1">
                <div className="d-flex">
                    <LogoComponent />
                    <UploadForm />
                </div>
            </div>
            <Footer />
        </div>
    )
}