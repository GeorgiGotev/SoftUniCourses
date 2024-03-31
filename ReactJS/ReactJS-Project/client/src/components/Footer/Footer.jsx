import styles from "../Footer/Footer.module.css"

export default function Footer() {
    return (
        <div className={styles.footerDiv}>
            <div className="container-fluid bg-dark text-light has-height-md middle-items border-top text-center wow fadeIn">
                  <div className="row"> 
                    <div className="col-sm-4">
                        <h3>EMAIL US</h3>
                        <p className="text-muted">info@website.com</p>
                    </div>
                    <div className="col-sm-4">
                        <h3>CALL US</h3>
                        <p className="text-muted">(123) 456-7890</p>
                    </div>
                    <div className="col-sm-4">
                        <h3>FIND US</h3>
                        <p className="text-muted">
                            12345 Fake ST NoWhere AB Country
                        </p>
                    </div>
                </div> 
            </div>
            <footer className={styles.footerSection}>
            {/* <div className="bg-dark text-light text-center border-top wow fadeIn"> */}
                <p>
                    © Copyright by Georgi Gotev
                </p>
            {/* </div> */}
            </footer>
            </div>
    );
}
