import React from 'react'
import item from '../assets/imgs/theme/404.png'
function Forbidden() {
    return (
        <section className="content-main">
            <div className="row mt-60">
                <div className="col-sm-12">
                    <div className="w-50 mx-auto text-center">
                        <img src={item} width="350" alt="Page Not Found" />
                        <h3 className="mt-40 mb-15">Oops! Page not found</h3>
                        <p>It's looking like you may have taken a wrong turn. Don't worry... it happens to the best of us. Here's a little tip that might help you get back on track.</p>
                        <a href="index.html" className="btn btn-primary mt-4"><i className="material-icons md-keyboard_return"></i> Back to main</a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Forbidden