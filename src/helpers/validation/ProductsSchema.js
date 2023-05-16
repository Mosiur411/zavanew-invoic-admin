import * as yup from "yup";
export const ProductsSchema = yup.object().shape({
    name: yup.string()
        .required("Prouct name field can not be empty.")
        .min(2, " must contain at least 6 characters."),
    upc: yup.string().matches(/^\S*$/, 'No spaces allowed'),
    sku: yup.string().matches(/^\S*$/, 'No spaces allowed'),
    upcBox: yup.string().matches(/^\S*$/, 'No spaces allowed'),
    development_id: yup.string()
        .required("development_id field can not be empty."),
    categorie_id: yup.string(),
    sub_id: yup.string(),
    childSub_id: yup.string(),
    brand_id: yup.string(),
    status: yup.boolean(),
    inStock: yup.string(),
    quantity: yup.string(),
    imagesTitle: yup.string(),
    imageAlterText: yup.string(),
    /* product prices */
    Saleing_Price: yup.string().required("Saleing_Price empty."),
    xs: yup.string(),
    sm: yup.string(),
    md: yup.string(),
    lg: yup.string(),
    xl: yup.string(),
    xl_2: yup.string(),
    xl_3: yup.string(),
    xl_4: yup.string(),
    xl_5: yup.string(),
    xl_6: yup.string(),
    xl_7: yup.string(),
    /* meta tage seo  */
    tag: yup.string(),
    meta_title: yup.string(),
    meta_description: yup.string(),
    /* sale offer   */
    sale_offer_type: yup.string(),
    sale_offer: yup.string(),
    sale_offer_price: yup.string(),
    /* coupon offer   */
    coupon_offer_type: yup.string(),
    coupon_offer: yup.boolean(),
    coupon_Offer_amount: yup.string(),
    /* coupon offer   */
    promo_offer_type: yup.string(),
    promo_code: yup.string().matches(/^\S*$/, 'No spaces allowed'),
    promo_amount: yup.string(),
    /* coupon offer   */
    deal_offer_type: yup.string(),
    deal_time_type: yup.string(),
    deal_amount: yup.string(),





})
