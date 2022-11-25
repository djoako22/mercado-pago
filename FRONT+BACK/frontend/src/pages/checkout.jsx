import cart from '../products';

function Checkout() {
    const payWithMercadoPago = async () => {
        const products = cart.map((product) => ({
            id: product.id,
            title: product.name,
            picture_url: product.image,
            quantity: product.quantity,
            unit_price: product.price,
        }));

        const res = await fetch('http://localhost:3001/api/payment', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                payer_email: "test_user@test_user.com",
                items: products,
                back_urls: {
                    failure: "http://localhost:3000",
                    pending: "http://localhost:3000/pending",
                    success: "http://localhost:3000/success"
                }
            }),
        });
        const data = await res.json();
        console.log(data);
        window.open(data.init_point, '_self');
    }

    return (
        <div className="App">
            {/* CHECKOUT */}
            <div className="cart">
                <h3>Cart</h3>
                {cart.length === 0 && <p>Cart is empty</p>}
                {cart.length > 0 && (
                    <div>
                        {cart.map((item) => (
                            <div className="cart-item" key={item.name}>
                                <img src={item.image} alt={item.name} width="100" height="100" />
                                <h4>{item.name}</h4>
                                <p>Price: ${item.price}</p>
                                <p>Quantity: {item.quantity}</p>
                            </div>
                        ))}

                        <h3>Total: ${cart.reduce((acc, item) => acc + item.price * item.quantity, 0)}</h3>
                    </div>
                )}
            </div>
            <div className="data">
                <div className='form-shipping'>
                    <h3>Form Shipping</h3>
                    <form>
                        <input type="text" id="direction" name="direction" placeholder='Direction' />
                        <input type="text" id="city" name="city" placeholder='City' />
                        <input type="text" id="state" name="state" placeholder='State' />
                        <input type="text" id="zip" name="zip" placeholder='Zip' />
                    </form>
                </div>
                <div className='form-payment'>
                    <h3>Form Payment</h3>
                    <form>
                        <input type="text" id="name" name="name" placeholder='Name' />
                        <input type="text" id="surname" name="surname" placeholder='Surname' />
                        <input type="text" id="document" name="document" placeholder='Document' />
                        <input type="text" id="email" name="email" placeholder='Email' />
                        <input type="text" id="phone" name="phone" placeholder='Phone' />
                    </form>
                </div>
                <div className='methods-payment'>
                    <h3>Methods Payment</h3>
                    <div className='methods'>
                        <a href='#' onClick={payWithMercadoPago}>
                            <img src="https://www.mercadopago.com/org-img/MP3/API/logos/mercadopago.gif" alt="mercadopago" />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Checkout
