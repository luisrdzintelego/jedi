/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, SwitchFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
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
export declare type RankingCreateFormInputValues = {
    username?: string;
    password?: string;
    type?: string;
    grupo?: string;
    puntos?: number;
    tiempo?: number;
    gema1?: boolean;
    gema2?: boolean;
    gema3?: boolean;
    bonus1?: boolean;
    bonus2?: boolean;
    bonus3?: boolean;
    intentos?: number;
    status?: boolean;
    avatar?: string;
    nombre?: string;
};
export declare type RankingCreateFormValidationValues = {
    username?: ValidationFunction<string>;
    password?: ValidationFunction<string>;
    type?: ValidationFunction<string>;
    grupo?: ValidationFunction<string>;
    puntos?: ValidationFunction<number>;
    tiempo?: ValidationFunction<number>;
    gema1?: ValidationFunction<boolean>;
    gema2?: ValidationFunction<boolean>;
    gema3?: ValidationFunction<boolean>;
    bonus1?: ValidationFunction<boolean>;
    bonus2?: ValidationFunction<boolean>;
    bonus3?: ValidationFunction<boolean>;
    intentos?: ValidationFunction<number>;
    status?: ValidationFunction<boolean>;
    avatar?: ValidationFunction<string>;
    nombre?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type RankingCreateFormOverridesProps = {
    RankingCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    username?: PrimitiveOverrideProps<TextFieldProps>;
    password?: PrimitiveOverrideProps<TextFieldProps>;
    type?: PrimitiveOverrideProps<TextFieldProps>;
    grupo?: PrimitiveOverrideProps<TextFieldProps>;
    puntos?: PrimitiveOverrideProps<TextFieldProps>;
    tiempo?: PrimitiveOverrideProps<TextFieldProps>;
    gema1?: PrimitiveOverrideProps<SwitchFieldProps>;
    gema2?: PrimitiveOverrideProps<SwitchFieldProps>;
    gema3?: PrimitiveOverrideProps<SwitchFieldProps>;
    bonus1?: PrimitiveOverrideProps<SwitchFieldProps>;
    bonus2?: PrimitiveOverrideProps<SwitchFieldProps>;
    bonus3?: PrimitiveOverrideProps<SwitchFieldProps>;
    intentos?: PrimitiveOverrideProps<TextFieldProps>;
    status?: PrimitiveOverrideProps<SwitchFieldProps>;
    avatar?: PrimitiveOverrideProps<TextFieldProps>;
    nombre?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type RankingCreateFormProps = React.PropsWithChildren<{
    overrides?: RankingCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: RankingCreateFormInputValues) => RankingCreateFormInputValues;
    onSuccess?: (fields: RankingCreateFormInputValues) => void;
    onError?: (fields: RankingCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: RankingCreateFormInputValues) => RankingCreateFormInputValues;
    onValidate?: RankingCreateFormValidationValues;
} & React.CSSProperties>;
export default function RankingCreateForm(props: RankingCreateFormProps): React.ReactElement;
