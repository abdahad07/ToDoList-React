import React, {useState} from "react";

function MyComponent(){

    const [name, setName] = useState("");
    const [quantity, setQuantity] = useState(1); 
    const [comment, setComment] = useState("");
    const [payment, setPayment] = useState("");
    const [shipping, setShipping] = useState("");

    function handleNameChange(event){
        setName(event.target.value);
    }

    function handleQuantityChange(event){
        setQuantity(event.target.value);
    }

    function handleCommentChange(e){
        setComment(e.target.value);
    }

    function handlePayment(e){
        setPayment(e.target.value);
    }

    function handleShippingChange(e){
        setShipping(e.target.value);
    }

    return(<div>
        <input value={name} onChange={handleNameChange} placeholder="Enter name"/>
        <p>Name: {name}</p>

        <input value={quantity} onChange={handleQuantityChange} type="number"/>
        <p>Quantity: {quantity}</p>

        <textarea value={comment} onChange={handleCommentChange}
        placeholder="Enter delivery instructions" />
        <p>Comment: {comment}</p>

        <select value={payment} onChange={handlePayment}>
            <option value="">Select an option</option>
            <option value="Visa">Visa</option>
            <option value="Mastercard">Mastercard</option>
            <option value="Giftcard">Giftcard</option>
        </select>
        <p>Payment: {payment}</p>

        <label>
            <input type="radio" value="Pick up"
                    checked={shipping === "Pick up"}
                    onChange={handleShippingChange}/>
            Pick up
        </label><br />
        <label>
        <input type="radio" value="Delivery"
                    checked={shipping === "Delivery"}
                    onChange={handleShippingChange}/>
            Delivery
        </label>
        <p>Shipping: {shipping}</p>

    </div>);
}
export default MyComponent