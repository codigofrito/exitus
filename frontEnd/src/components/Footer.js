import React from 'react';
import '../styles/main.css';

const fundationYear = 2019;
const currentYear = new Date().getFullYear();

let copyRightPeriod = currentYear <= fundationYear ? fundationYear : fundationYear + " - " + currentYear;

function Footer() {
    return (

        <footer id="app-footer">
            <div className="container">

                <div id="copyright">
                    © Exitus - {copyRightPeriod}
                </div>

            </div>
        </footer>

    );
}

export default Footer;
