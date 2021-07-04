import React from 'react';

const CartItem=(props)=>{
    
        const {price,title,qty}=props.product;
        const {product,onIncreaseQuantity,onDecreaseQuantity,onDeleteProduct}=props;
        
        return(
            <div className="cart-item">
                <div className="left-block">
                    <img  style={styles.image} src={product.img} alt=""/>
                </div>
                <div className="right-block">
                    <div style={{ fontSize:25}}>{title}</div>
                    <div style={{color:"#777"}}>Rs {price}</div>
                    <div style={{color:"#777"}}>Qty: {qty}</div>
                    <div className="cart-item-actions">
                        <img alt="Increase" 
                        className="action-icons" 
                        src="https://image.flaticon.com/icons/png/128/3303/3303893.png"
                        onClick={()=>onIncreaseQuantity(product)}
                        />
                        <img alt="Decrease"
                        className="action-icons" 
                        src="https://image.flaticon.com/icons/png/128/1828/1828906.png"
                        onClick={()=>onDecreaseQuantity(product)}
                        />
                        <img alt="Delete" 
                        className="action-icons" 
                        src="https://image.flaticon.com/icons/png/128/484/484662.png"
                        onClick={()=>onDeleteProduct(product.id)}
                        />

                    </div>
                </div>
            </div>
        );
    }

const styles={
    image:{
        height:110,
        width:110,
        borderRadius:4,
        background:"#ccc"
    }
}

export default CartItem;