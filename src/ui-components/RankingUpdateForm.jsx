/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { Button, Flex, Grid, TextField } from "@aws-amplify/ui-react";
import { fetchByPath, getOverrideProps, validateField } from "./utils";
import { generateClient } from "aws-amplify/api";
import { getRanking } from "../graphql/queries";
import { updateRanking } from "../graphql/mutations";
const client = generateClient();
export default function RankingUpdateForm(props) {
  const {
    id: idProp,
    ranking: rankingModelProp,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    Punto: "",
    username: "",
    password: "",
    type: "",
    grupo: "",
    puntos: "",
    status: "",
    avatar: "",
    nombre: "",
    createdAt: "",
    updatedAt: "",
  };
  const [Punto, setPunto] = React.useState(initialValues.Punto);
  const [username, setUsername] = React.useState(initialValues.username);
  const [password, setPassword] = React.useState(initialValues.password);
  const [type, setType] = React.useState(initialValues.type);
  const [grupo, setGrupo] = React.useState(initialValues.grupo);
  const [puntos, setPuntos] = React.useState(initialValues.puntos);
  const [status, setStatus] = React.useState(initialValues.status);
  const [avatar, setAvatar] = React.useState(initialValues.avatar);
  const [nombre, setNombre] = React.useState(initialValues.nombre);
  const [createdAt, setCreatedAt] = React.useState(initialValues.createdAt);
  const [updatedAt, setUpdatedAt] = React.useState(initialValues.updatedAt);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = rankingRecord
      ? { ...initialValues, ...rankingRecord }
      : initialValues;
    setPunto(cleanValues.Punto);
    setUsername(cleanValues.username);
    setPassword(cleanValues.password);
    setType(cleanValues.type);
    setGrupo(cleanValues.grupo);
    setPuntos(cleanValues.puntos);
    setStatus(cleanValues.status);
    setAvatar(cleanValues.avatar);
    setNombre(cleanValues.nombre);
    setCreatedAt(cleanValues.createdAt);
    setUpdatedAt(cleanValues.updatedAt);
    setErrors({});
  };
  const [rankingRecord, setRankingRecord] = React.useState(rankingModelProp);
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? (
            await client.graphql({
              query: getRanking.replaceAll("__typename", ""),
              variables: { id: idProp },
            })
          )?.data?.getRanking
        : rankingModelProp;
      setRankingRecord(record);
    };
    queryData();
  }, [idProp, rankingModelProp]);
  React.useEffect(resetStateValues, [rankingRecord]);
  const validations = {
    Punto: [],
    username: [],
    password: [],
    type: [],
    grupo: [],
    puntos: [],
    status: [],
    avatar: [],
    nombre: [],
    createdAt: [],
    updatedAt: [],
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
          Punto: Punto ?? null,
          username: username ?? null,
          password: password ?? null,
          type: type ?? null,
          grupo: grupo ?? null,
          puntos: puntos ?? null,
          status: status ?? null,
          avatar: avatar ?? null,
          nombre: nombre ?? null,
          createdAt: createdAt ?? null,
          updatedAt: updatedAt ?? null,
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
          await client.graphql({
            query: updateRanking.replaceAll("__typename", ""),
            variables: {
              input: {
                id: rankingRecord.id,
                ...modelFields,
              },
            },
          });
          if (onSuccess) {
            onSuccess(modelFields);
          }
        } catch (err) {
          if (onError) {
            const messages = err.errors.map((e) => e.message).join("\n");
            onError(modelFields, messages);
          }
        }
      }}
      {...getOverrideProps(overrides, "RankingUpdateForm")}
      {...rest}
    >
      <TextField
        label="Punto"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={Punto}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              Punto: value,
              username,
              password,
              type,
              grupo,
              puntos,
              status,
              avatar,
              nombre,
              createdAt,
              updatedAt,
            };
            const result = onChange(modelFields);
            value = result?.Punto ?? value;
          }
          if (errors.Punto?.hasError) {
            runValidationTasks("Punto", value);
          }
          setPunto(value);
        }}
        onBlur={() => runValidationTasks("Punto", Punto)}
        errorMessage={errors.Punto?.errorMessage}
        hasError={errors.Punto?.hasError}
        {...getOverrideProps(overrides, "Punto")}
      ></TextField>
      <TextField
        label="Username"
        isRequired={false}
        isReadOnly={false}
        value={username}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              Punto,
              username: value,
              password,
              type,
              grupo,
              puntos,
              status,
              avatar,
              nombre,
              createdAt,
              updatedAt,
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
              Punto,
              username,
              password: value,
              type,
              grupo,
              puntos,
              status,
              avatar,
              nombre,
              createdAt,
              updatedAt,
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
              Punto,
              username,
              password,
              type: value,
              grupo,
              puntos,
              status,
              avatar,
              nombre,
              createdAt,
              updatedAt,
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
              Punto,
              username,
              password,
              type,
              grupo: value,
              puntos,
              status,
              avatar,
              nombre,
              createdAt,
              updatedAt,
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
      <TextField
        label="Puntos"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={puntos}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              Punto,
              username,
              password,
              type,
              grupo,
              puntos: value,
              status,
              avatar,
              nombre,
              createdAt,
              updatedAt,
            };
            const result = onChange(modelFields);
            value = result?.puntos ?? value;
          }
          if (errors.puntos?.hasError) {
            runValidationTasks("puntos", value);
          }
          setPuntos(value);
        }}
        onBlur={() => runValidationTasks("puntos", puntos)}
        errorMessage={errors.puntos?.errorMessage}
        hasError={errors.puntos?.hasError}
        {...getOverrideProps(overrides, "puntos")}
      ></TextField>
      <TextField
        label="Status"
        isRequired={false}
        isReadOnly={false}
        value={status}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              Punto,
              username,
              password,
              type,
              grupo,
              puntos,
              status: value,
              avatar,
              nombre,
              createdAt,
              updatedAt,
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
      ></TextField>
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
              Punto,
              username,
              password,
              type,
              grupo,
              puntos,
              status,
              avatar: value,
              nombre,
              createdAt,
              updatedAt,
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
              Punto,
              username,
              password,
              type,
              grupo,
              puntos,
              status,
              avatar,
              nombre: value,
              createdAt,
              updatedAt,
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
        label="Created at"
        isRequired={false}
        isReadOnly={false}
        value={createdAt}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              Punto,
              username,
              password,
              type,
              grupo,
              puntos,
              status,
              avatar,
              nombre,
              createdAt: value,
              updatedAt,
            };
            const result = onChange(modelFields);
            value = result?.createdAt ?? value;
          }
          if (errors.createdAt?.hasError) {
            runValidationTasks("createdAt", value);
          }
          setCreatedAt(value);
        }}
        onBlur={() => runValidationTasks("createdAt", createdAt)}
        errorMessage={errors.createdAt?.errorMessage}
        hasError={errors.createdAt?.hasError}
        {...getOverrideProps(overrides, "createdAt")}
      ></TextField>
      <TextField
        label="Updated at"
        isRequired={false}
        isReadOnly={false}
        value={updatedAt}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              Punto,
              username,
              password,
              type,
              grupo,
              puntos,
              status,
              avatar,
              nombre,
              createdAt,
              updatedAt: value,
            };
            const result = onChange(modelFields);
            value = result?.updatedAt ?? value;
          }
          if (errors.updatedAt?.hasError) {
            runValidationTasks("updatedAt", value);
          }
          setUpdatedAt(value);
        }}
        onBlur={() => runValidationTasks("updatedAt", updatedAt)}
        errorMessage={errors.updatedAt?.errorMessage}
        hasError={errors.updatedAt?.hasError}
        {...getOverrideProps(overrides, "updatedAt")}
      ></TextField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Reset"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          isDisabled={!(idProp || rankingModelProp)}
          {...getOverrideProps(overrides, "ResetButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={
              !(idProp || rankingModelProp) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
