import React from "react";
import {
    StyledInput,
    FormError,
    FormLabel,
    FormControl,
    StyledTextArea,
} from "./stepTwoStyles";

const OrderInput = ({ name, formik, type = "text", title = name }) => {
    return (
        <FormControl>
            <FormLabel htmlFor={`data-${name}`}>{title}</FormLabel>
            <StyledInput
                autoComplete={`off`}
                type={type}
                id={`data-${name}`}
                name={name}
                onChange={formik.handleChange}
                value={formik.values[name]}
                onBlur={formik.handleBlur}
                as={name === "comments" ? StyledTextArea : "input"}
            />
            <FormError
                error={formik.errors[name]}
                touched={formik.touched[name]}
            >
                {formik.errors[name]}
            </FormError>
        </FormControl>
    );
};

export default OrderInput;
