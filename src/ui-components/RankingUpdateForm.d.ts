/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
export declare type EscapeHatchProps = {
    [elementHierarchy: string]: Record<string, unknown>;
} | null;
export declare type VariantValues = {
    [key: string]: string;
};
export declare type Variant = {
    variantValues: VariantValues;
    overrides: EscapeHatchProps;
};
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type RankingUpdateFormInputValues = {
    Punto?: number;
    username?: string;
    password?: string;
    type?: string;
    grupo?: string;
    puntos?: number;
    status?: string;
    avatar?: number;
    nombre?: string;
    createdAt?: string;
    updatedAt?: string;
};
export declare type RankingUpdateFormValidationValues = {
    Punto?: ValidationFunction<number>;
    username?: ValidationFunction<string>;
    password?: ValidationFunction<string>;
    type?: ValidationFunction<string>;
    grupo?: ValidationFunction<string>;
    puntos?: ValidationFunction<number>;
    status?: ValidationFunction<string>;
    avatar?: ValidationFunction<number>;
    nombre?: ValidationFunction<string>;
    createdAt?: ValidationFunction<string>;
    updatedAt?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type RankingUpdateFormOverridesProps = {
    RankingUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    Punto?: PrimitiveOverrideProps<TextFieldProps>;
    username?: PrimitiveOverrideProps<TextFieldProps>;
    password?: PrimitiveOverrideProps<TextFieldProps>;
    type?: PrimitiveOverrideProps<TextFieldProps>;
    grupo?: PrimitiveOverrideProps<TextFieldProps>;
    puntos?: PrimitiveOverrideProps<TextFieldProps>;
    status?: PrimitiveOverrideProps<TextFieldProps>;
    avatar?: PrimitiveOverrideProps<TextFieldProps>;
    nombre?: PrimitiveOverrideProps<TextFieldProps>;
    createdAt?: PrimitiveOverrideProps<TextFieldProps>;
    updatedAt?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type RankingUpdateFormProps = React.PropsWithChildren<{
    overrides?: RankingUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    ranking?: any;
    onSubmit?: (fields: RankingUpdateFormInputValues) => RankingUpdateFormInputValues;
    onSuccess?: (fields: RankingUpdateFormInputValues) => void;
    onError?: (fields: RankingUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: RankingUpdateFormInputValues) => RankingUpdateFormInputValues;
    onValidate?: RankingUpdateFormValidationValues;
} & React.CSSProperties>;
export default function RankingUpdateForm(props: RankingUpdateFormProps): React.ReactElement;
