/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { GridProps, SwitchFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
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
export declare type FormProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type RankingCreateFormOverridesProps = {
    RankingCreateFormGrid?: FormProps<GridProps>;
    username?: FormProps<TextFieldProps>;
    password?: FormProps<TextFieldProps>;
    type?: FormProps<TextFieldProps>;
    grupo?: FormProps<TextFieldProps>;
    puntos?: FormProps<TextFieldProps>;
    tiempo?: FormProps<TextFieldProps>;
    gema1?: FormProps<SwitchFieldProps>;
    gema2?: FormProps<SwitchFieldProps>;
    gema3?: FormProps<SwitchFieldProps>;
    bonus1?: FormProps<SwitchFieldProps>;
    bonus2?: FormProps<SwitchFieldProps>;
    bonus3?: FormProps<SwitchFieldProps>;
    intentos?: FormProps<TextFieldProps>;
    status?: FormProps<SwitchFieldProps>;
    avatar?: FormProps<TextFieldProps>;
    nombre?: FormProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type RankingCreateFormProps = React.PropsWithChildren<{
    overrides?: RankingCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: RankingCreateFormInputValues) => RankingCreateFormInputValues;
    onSuccess?: (fields: RankingCreateFormInputValues) => void;
    onError?: (fields: RankingCreateFormInputValues, errorMessage: string) => void;
    onCancel?: () => void;
    onChange?: (fields: RankingCreateFormInputValues) => RankingCreateFormInputValues;
    onValidate?: RankingCreateFormValidationValues;
}>;
export default function RankingCreateForm(props: RankingCreateFormProps): React.ReactElement;
