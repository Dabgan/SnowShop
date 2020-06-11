import React from "react";
import { useFormik } from "formik";
import ShoppingPath from "../ShoppingPath";
import { StyledForm, FormData, FormTitle, BtnContainer } from "./stepTwoStyles";
import OrderInput from "./OrderInput";

const initialValues = {
    name: "Gabriel",
    lastName: "Daniluk",
    number: 420692137,
    email: "shop@snowshop.pl",
    address: "Lalaland",
    addressComplement: "xd st. 19",
    zip: "21-370",
    city: "wadowice",
    state: "busy",
    comments: "lol no comment, so bad",
};

const onSubmit = (values) => {
    console.log(`Form submited hrray!`, values);
};

const validate = (values) => {
    let errors = {};

    const validateRequired = (name) => {
        if (!values[name]) {
            return (errors[name] = `This field is required`);
        }
        switch (name) {
            case `email`:
                if (
                    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(
                        values.email
                    )
                ) {
                    errors.email = "Invalid email format";
                }
                break;
            case `number`:
                if (
                    !/(?<!\w)(\(?(\+|00)?48\)?)?[ -]?\d{3}[ -]?\d{3}[ -]?\d{3}(?!\w)/.test(
                        values[name]
                    )
                ) {
                    errors[name] = "Invalid phone number";
                }
                break;
            default:
                break;
        }
    };
    // every input excluding 'comments' is required
    for (const name in values) {
        if (name !== "comments") {
            validateRequired(name);
        }
    }
    return errors;
};

const OrderStepTwo = () => {
    const formik = useFormik({
        initialValues: initialValues,
        onSubmit,
        validate,
    });

    return (
        <>
            <ShoppingPath active={2} />
            <StyledForm onSubmit={formik.handleSubmit}>
                <FormData>
                    <FormTitle>Your Data</FormTitle>
                    <OrderInput name="name" formik={formik} />
                    <OrderInput
                        name="lastName"
                        formik={formik}
                        title="last name"
                    />
                    <OrderInput
                        name="number"
                        type="tel"
                        formik={formik}
                        title={`Phone number`}
                    />
                    <OrderInput name="email" type="email" formik={formik} />
                </FormData>
                <FormData>
                    <FormTitle>Address</FormTitle>
                    <OrderInput name="address" formik={formik} />
                    <OrderInput
                        name="addressComplement"
                        formik={formik}
                        title={`Address complement`}
                    />
                    <OrderInput
                        name="zip"
                        formik={formik}
                        title={`ZIP / Postal Code`}
                    />
                    <OrderInput name="city" formik={formik} />
                    <OrderInput name="state" formik={formik} />
                </FormData>
                <FormData>
                    <FormTitle>Additional info</FormTitle>
                    <OrderInput name="comments" formik={formik} />
                </FormData>
                <BtnContainer>
                    <button type="submit" className="my-btn">
                        Submit
                    </button>
                </BtnContainer>
            </StyledForm>
        </>
    );
};

export default OrderStepTwo;
