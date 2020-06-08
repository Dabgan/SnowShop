import React from "react";
import ShoppingPath from "../ShoppingPath";
import {
    OrderOptionsContainer,
    OrderOption,
    OrderDisabled,
    OrderDisabledTitle,
    OrderTitle,
    OrderBtn,
    OrderForm,
} from "./stepOneStyles";

const OrderStepOne = () => {
    return (
        <div>
            <ShoppingPath />
            <OrderOptionsContainer>
                <OrderOption>
                    <OrderTitle>Order as a Guest</OrderTitle>
                    <p>
                        You don't have to create an account in our shop. Click
                        here to order!
                    </p>
                    <OrderBtn href="/order/step2" className="my-btn">
                        Order
                    </OrderBtn>
                </OrderOption>
                <OrderOption disabled>
                    <OrderTitle>Login</OrderTitle>
                    <p>You have an account already? Log in!</p>
                    <OrderForm action="">
                        <label htmlFor="order-email">Email</label>
                        <input
                            type="email"
                            id="order-email"
                            name="email"
                            // onChange={formik.handleChange}
                            // value={formik.values.email}
                        />

                        <label htmlFor="order-password">Password</label>
                        <input
                            type="password"
                            id="order-password"
                            name="password"
                            // onChange={formik.handleChange}
                            // value={formik.values.password}
                        />
                    </OrderForm>
                    <OrderBtn className="my-btn">Login</OrderBtn>
                    <OrderDisabled />
                    <OrderDisabledTitle>Work in progress</OrderDisabledTitle>
                </OrderOption>
                <OrderOption disabled>
                    <OrderTitle>Register</OrderTitle>

                    <ul>
                        Create an account to take advantage of privileges for
                        permanent of customers
                        <li> preview of order status and history shopping</li>
                        <li>
                            no need to enter your data when subsequent purchases
                        </li>
                    </ul>

                    <OrderBtn className="my-btn">Register</OrderBtn>
                    <OrderDisabled />
                    <OrderDisabledTitle>Work in progress</OrderDisabledTitle>
                </OrderOption>
            </OrderOptionsContainer>
        </div>
    );
};

export default OrderStepOne;
