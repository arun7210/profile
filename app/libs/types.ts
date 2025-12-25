export interface Params{
    params : { 
        slug  : string
    }
}


export interface ProductType{
    id:               number;
    catagory_id:      number;
    title:            string;
    sub_title:        string;
    price:            number;
    sale_price:       number;
    size:             string;
    bottle_quantity:  string;
    size2:            string;
    bottle_quantity2: string;
    price2:           string;
    sale_price2:      string;
    description:      string;
    benefits:         string;
    who_should:       string;
    dosage:           string;
    product_image:    string;
    slider_image:     string;
    slug:             string;
    status:           number;
    combo:            number;
    popular:          number;
    seo_title:        string;
    seo_description:  string;
    created_at:       Date;
    updated_at:       Date;
}


export interface IndexProducts {
    popular_products: ProductType
    combos: ProductType
}

export interface Slug{
    params: {
        slug : string
    }
}

export interface Faq {
    id:         number;
    product_id: number;
    question:   string;
    answer:     string;
    created_at: Date;
    updated_at: Date;
}

export interface SingleProduct{
    product: ProductType
    faqs: Faq
}

export interface OffcanvasType{
    show: boolean
    handleClose: any
}

export interface Active{
    active: boolean,
    handleSuccessModel: Function
}

export interface ModalType{
    formik: any,
    showModel: boolean
    hideModal: any
    quantity: string
    states: String[]
}