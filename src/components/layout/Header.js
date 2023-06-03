import { useContext, useEffect, useMemo, useState } from 'react';
import userProfile from '../../assets/imgs/people/avatar-2.png'
import { useSignOut } from 'react-firebase-hooks/auth';
import logo from '../../assets/imgs/theme/logo.png'
import { ThemeContext } from '../../utils/Context';
import { Link, useLocation } from 'react-router-dom';
import { auth } from '../../firebase/Firebase.config';
import { useAddToCartMutation, useGetToCartQuery } from '../../app/services/addToCart';
import { useGetproductQuery } from '../../app/services/product';
import HeaderCartProductModal from '../elements/modal/HeaderCartProductModal';
import { toast } from 'react-toastify';

const Header = ({ search, productCartAdd, sideOpen, setSideOpen }) => {
    const location = useLocation();
    const currentPath = location.pathname;
    const { data } = useGetToCartQuery()
    const [signOut, loading, error] = useSignOut(auth);
    const { dark, setDark, handelClick, setSandelClick } = useContext(ThemeContext)
    const { zoom, profile } = handelClick;


    const [productSarch, setProductSarch] = useState()
    const [{ pageIndex, pageSize }, setPagination] = useState({ pageIndex: 1, pageSize: 10, });
    const pathname = `page=${pageIndex}&limit=${pageSize}&search=${productSarch}`;
    const { data: productData, isLoading } = useGetproductQuery(pathname)

    /* 300450449108 */

    const [Loading, setLoading] = useState(false)
    useEffect(() => {
        if (isLoading) {
            setLoading(true)
        } else {
            setLoading(false)
        }
        if (productData?.product?.length == '1' && productSarch) {
            const { upcBox, upc, _id: id, quantity, saleing_Price, product_name } = productData?.product[0]
            console.log(upcBox)
            console.log(upc)
            if (productSarch == upcBox || upc) {
                if (quantity && saleing_Price) {
                    const item = { product_id: id, quantity: 1, saleing_Price: saleing_Price, product_name: product_name }
                    productCartAdd(item) /* 819913012594 */
                } else {
                    toast.error('Product quantity ')
                }
            }
        }
    }, [isLoading, productData])
    const ProductDatas = useMemo(() => (productData ? productData?.product : []), [
        productData,
        productSarch
    ]);

    /* total product quntiti  */


    return (
        <header className="main-header navbar">
            {search ? <div className="col-brand">
                <Link to="/" className="brand-wrap">
                    <img src={logo} className="logo" alt="Nest Dashboard" />
                </Link>
            </div> : <div className="col-search">
                {
                    currentPath == '/cart' && <form className="searchform">
                        <div className="input-group">
                            <input onChange={(e) => setProductSarch(e.target.value)} list="search_terms" type="text" className="form-control" placeholder="Search term" />
                            <button className="btn btn-light bg" type="button"><i className="material-icons md-search"></i></button>
                        </div>
                        <datalist id="search_terms">
                            <option defaultValue="Products"></option>
                            <option defaultValue="New orders"></option>
                            <option defaultValue="Apple iphone"></option>
                            <option defaultValue="Ahmed Hassan"></option>
                        </datalist>
                    </form>
                }

            </div>
            }
            {/* width: 100%; height: 100%; overflow: hidden  onClick={() => setSideOpen(!sideOpen)}*/}
            <div className="col-nav">
                <button onClick={() => setSideOpen(!sideOpen)} className="btn btn-icon btn-mobile me-auto" ><i className="material-icons md-apps"></i></button>
                <ul className="nav">
                    <li className="nav-item">
                        <Link to='/cart' className="nav-link btn-icon" href="#">
                            Cart
                            <span className="badge rounded-pill">{data?.totalQuantity}</span>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <a onClick={() => setDark(!dark)} className="nav-link btn-icon darkmode"> <i className="material-icons md-nights_stay"></i> </a>
                    </li>
                    <li className="nav-item">
                        <a href="#" className="requestfullscreen nav-link btn-icon"><i className="material-icons md-cast"></i></a>
                    </li>
                    <li className="dropdown nav-item">
                        <a className="dropdown-toggle" data-bs-toggle="dropdown" href="#" id="dropdownLanguage" aria-expanded="false"><i className="material-icons md-public"></i></a>
                        <div className="dropdown-menu dropdown-menu-end" aria-labelledby="dropdownLanguage">
                            <a className="dropdown-item text-brand" href="#"><img src="assets/imgs/theme/flag-us.png" alt="English" />English</a>
                        </div>
                    </li>
                    <li className="dropdown nav-item">
                        <a onClick={() => setSandelClick({ ...handelClick, profile: { open: !handelClick?.profile?.open } })} className="dropdown-toggle" data-bs-toggle="dropdown" id="dropdownAccount" aria-expanded="false"> <img className="img-xs rounded-circle" src={userProfile} alt="User" /></a>
                        <div className={`dropdown-menu dropdown-menu-end ${profile?.open ? 'show' : ''} `} aria-labelledby="dropdownAccount">
                            <a className="dropdown-item" href="#"><i className="material-icons md-perm_identity"></i>Edit Profile</a>
                            <a className="dropdown-item" href="#"><i className="material-icons md-settings"></i>Account Settings</a>
                            <a className="dropdown-item" href="#"><i className="material-icons md-account_balance_wallet"></i>Wallet</a>
                            <a className="dropdown-item" href="#"><i className="material-icons md-receipt"></i>Billing</a>
                            <a className="dropdown-item" href="#"><i className="material-icons md-help_outline"></i>Help center</a>
                            <div className="dropdown-divider"></div>
                            <a className="dropdown-item text-danger"
                                onClick={async () => { await signOut() }}
                            ><i className="material-icons md-exit_to_app"></i>Logout</a>
                        </div>
                    </li>
                </ul>
            </div>
            {/* product modal  start  */}
            {productSarch && <section className='header_modal_continer'>
                <HeaderCartProductModal productData={ProductDatas} productSarch={productSarch} />
            </section>}


        </header>
    );
}

export default Header;