/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import {
  Button,
  Flex,
  Grid,
  SwitchField,
  TextField,
} from "@aws-amplify/ui-react";
import { Ranking } from "../models";
import { fetchByPath, getOverrideProps, validateField } from "./utils";
import { DataStore } from "aws-amplify/datastore";
export default function RankingCreateForm(props) {
  const {
    clearOnSuccess = true,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    username: "",
    password: "",
    type: "",
    grupo: "",
    status: false,
    avatar: "",
    nombre: "",
    bookmark: "",
  };
  const [username, setUsername] = React.useState(initialValues.username);
  const [password, setPassword] = React.useState(initialValues.password);
  const [type, setType] = React.useState(initialValues.type);
  const [grupo, setGrupo] = React.useState(initialValues.grupo);
  const [status, setStatus] = React.useState(initialValues.status);
  const [avatar, setAvatar] = React.useState(initialValues.avatar);
  const [nombre, setNombre] = React.useState(initialValues.nombre);
  const [bookmark, setBookmark] = React.useState(initialValues.bookmark);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    setUsername(initialValues.username);
    setPassword(initialValues.password);
    setType(initialValues.type);
    setGrupo(initialValues.grupo);
    setStatus(initialValues.status);
    setAvatar(initialValues.avatar);
    setNombre(initialValues.nombre);
    setBookmark(initialValues.bookmark);
    setErrors({});
  };
  const validations = {
    username: [],
    password: [],
    type: [],
    grupo: [],
    status: [],
    avatar: [],
    nombre: [],
    bookmark: [],
  };
  const runValidationTasks = async (
    fieldName,
    currentValue,
    getDisplayValue
  ) => {
    const value =
      currentValue && getDisplayValue
        ? getDisplayValue(currentValue)
        : currentValue;
    let validationResponse = validateField(value, validations[fieldName]);
    const customValidator = fetchByPath(onValidate, fieldName);
    if (customValidator) {
      validationResponse = await customValidator(value, validationResponse);
    }
    setErrors((errors) => ({ ...errors, [fieldName]: validationResponse }));
    return validationResponse;
  };
  return (
    <Grid
      as="form"
      rowGap="15px"
      columnGap="15px"
      padding="20px"
      onSubmit={async (event) => {
        event.preventDefault();
        let modelFields = {
          username,
          password,
          type,
          grupo,
          status,
          avatar,
          nombre,
          bookmark,
        };
        const validationResponses = await Promise.all(
          Object.keys(validations).reduce((promises, fieldName) => {
            if (Array.isArray(modelFields[fieldName])) {
              promises.push(
                ...modelFields[fieldName].map((item) =>
                  runValidationTasks(fieldName, item)
                )
              );
              return promises;
            }
            promises.push(
              runValidationTasks(fieldName, modelFields[fieldName])
            );
            return promises;
          }, [])
        );
        if (validationResponses.some((r) => r.hasError)) {
          return;
        }
        if (onSubmit) {
          modelFields = onSubmit(modelFields);
        }
        try {
          Object.entries(modelFields).forEach(([key, value]) => {
            if (typeof value === "string" && value === "") {
              modelFields[key] = null;
            }
          });
          await DataStore.save(new Ranking(modelFields));
          if (onSuccess) {
            onSuccess(modelFields);
          }
          if (clearOnSuccess) {
            resetStateValues();
          }
        } catch (err) {
          if (onError) {
            onError(modelFields, err.message);
          }
        }
      }}
      {...getOverrideProps(overrides, "RankingCreateForm")}
      {...rest}
    >
      <TextField
        label="Username"
        isRequired={false}
        isReadOnly={false}
        value={username}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              username: value,
              password,
              type,
              grupo,
              status,
              avatar,
              nombre,
              bookmark,
            };
            const result = onChange(modelFields);
            value = result?.username ?? value;
          }
          if (errors.username?.hasError) {
            runValidationTasks("username", value);
          }
          setUsername(value);
        }}
        onBlur={() => runValidationTasks("username", username)}
        errorMessage={errors.username?.errorMessage}
        hasError={errors.username?.hasError}
        {...getOverrideProps(overrides, "username")}
      ></TextField>
      <TextField
        label="Password"
        isRequired={false}
        isReadOnly={false}
        value={password}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              username,
              password: value,
              type,
              grupo,
              status,
              avatar,
              nombre,
              bookmark,
            };
            const result = onChange(modelFields);
            value = result?.password ?? value;
          }
          if (errors.password?.hasError) {
            runValidationTasks("password", value);
          }
          setPassword(value);
        }}
        onBlur={() => runValidationTasks("password", password)}
        errorMessage={errors.password?.errorMessage}
        hasError={errors.password?.hasError}
        {...getOverrideProps(overrides, "password")}
      ></TextField>
      <TextField
        label="Type"
        isRequired={false}
        isReadOnly={false}
        value={type}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              username,
              password,
              type: value,
              grupo,
              status,
              avatar,
              nombre,
              bookmark,
            };
            const result = onChange(modelFields);
            value = result?.type ?? value;
          }
          if (errors.type?.hasError) {
            runValidationTasks("type", value);
          }
          setType(value);
        }}
        onBlur={() => runValidationTasks("type", type)}
        errorMessage={errors.type?.errorMessage}
        hasError={errors.type?.hasError}
        {...getOverrideProps(overrides, "type")}
      ></TextField>
      <TextField
        label="Grupo"
        isRequired={false}
        isReadOnly={false}
        value={grupo}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              username,
              password,
              type,
              grupo: value,
              status,
              avatar,
              nombre,
              bookmark,
            };
            const result = onChange(modelFields);
            value = result?.grupo ?? value;
          }
          if (errors.grupo?.hasError) {
            runValidationTasks("grupo", value);
          }
          setGrupo(value);
        }}
        onBlur={() => runValidationTasks("grupo", grupo)}
        errorMessage={errors.grupo?.errorMessage}
        hasError={errors.grupo?.hasError}
        {...getOverrideProps(overrides, "grupo")}
      ></TextField>
      <SwitchField
        label="Status"
        defaultChecked={false}
        isDisabled={false}
        isChecked={status}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              username,
              password,
              type,
              grupo,
              status: value,
              avatar,
              nombre,
              bookmark,
            };
            const result = onChange(modelFields);
            value = result?.status ?? value;
          }
          if (errors.status?.hasError) {
            runValidationTasks("status", value);
          }
          setStatus(value);
        }}
        onBlur={() => runValidationTasks("status", status)}
        errorMessage={errors.status?.errorMessage}
        hasError={errors.status?.hasError}
        {...getOverrideProps(overrides, "status")}
      ></SwitchField>
      <TextField
        label="Avatar"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={avatar}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              username,
              password,
              type,
              grupo,
              status,
              avatar: value,
              nombre,
              bookmark,
            };
            const result = onChange(modelFields);
            value = result?.avatar ?? value;
          }
          if (errors.avatar?.hasError) {
            runValidationTasks("avatar", value);
          }
          setAvatar(value);
        }}
        onBlur={() => runValidationTasks("avatar", avatar)}
        errorMessage={errors.avatar?.errorMessage}
        hasError={errors.avatar?.hasError}
        {...getOverrideProps(overrides, "avatar")}
      ></TextField>
      <TextField
        label="Nombre"
        isRequired={false}
        isReadOnly={false}
        value={nombre}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              username,
              password,
              type,
              grupo,
              status,
              avatar,
              nombre: value,
              bookmark,
            };
            const result = onChange(modelFields);
            value = result?.nombre ?? value;
          }
          if (errors.nombre?.hasError) {
            runValidationTasks("nombre", value);
          }
          setNombre(value);
        }}
        onBlur={() => runValidationTasks("nombre", nombre)}
        errorMessage={errors.nombre?.errorMessage}
        hasError={errors.nombre?.hasError}
        {...getOverrideProps(overrides, "nombre")}
      ></TextField>
      <TextField
        label="Bookmark"
        isRequired={false}
        isReadOnly={false}
        value={bookmark}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              username,
              password,
              type,
              grupo,
              status,
              avatar,
              nombre,
              bookmark: value,
            };
            const result = onChange(modelFields);
            value = result?.bookmark ?? value;
          }
          if (errors.bookmark?.hasError) {
            runValidationTasks("bookmark", value);
          }
          setBookmark(value);
        }}
        onBlur={() => runValidationTasks("bookmark", bookmark)}
        errorMessage={errors.bookmark?.errorMessage}
        hasError={errors.bookmark?.hasError}
        {...getOverrideProps(overrides, "bookmark")}
      ></TextField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Clear"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          {...getOverrideProps(overrides, "ClearButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={Object.values(errors).some((e) => e?.hasError)}
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
