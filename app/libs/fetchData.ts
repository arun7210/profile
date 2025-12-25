export const fetchStates = async() => {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URI}/api/states`);
    const data = await response.json();
    return data;
}

export const fetchIndex = async() => {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URI}/api/`);
    const data = await response.json();
    return data;
}

export const fetchAllProducts = async() => {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URI}/api/products`);
    const data = await response.json();
    return data;
}

export const fetchProductBySlug = async(slug: string) => {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URI}/api/product/${slug}`);
    const data = await response.json();
    return data;
}