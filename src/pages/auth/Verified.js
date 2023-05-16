import React from 'react'
import { auth } from '../../firebase/Firebase.config';
import { useSendEmailVerification } from 'react-firebase-hooks/auth';
export default function Verified() {
    const [sendEmailVerification, sending, error] = useSendEmailVerification(auth);
    const VerifiedAccount = async () => {
        await sendEmailVerification();
    }
    return (
        <section className="content-main">
            <div className="row mt-60">
                <div className="col-sm-12">
                    <div className="w-50 mx-auto text-center">
                        <h3 className="mt-40 mb-15">Plz Verified Your Account</h3>
                        <p>It's looking like you may have taken a wrong turn. Don't worry... it happens to the best of us. Here's a little tip that might help you get back on track.</p>
                        <a onClick={() => VerifiedAccount()} className="btn btn-primary mt-4">Verified</a>
                    </div>
                </div>
            </div>
        </section>
    )
}
