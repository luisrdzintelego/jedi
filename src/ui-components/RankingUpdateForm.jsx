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
import { DataStore } from "aws-amplify";
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
    username: "",
    password: "",
    type: "",
    grupo: "",
    puntos: "",
    tiempo: "",
    gema1: false,
    gema2: false,
    gema3: false,
    bonus1: false,
    bonus2: false,
    bonus3: false,
    intentos: "",
    status: false,
    avatar: "",
    nombre: "",
  };
  const [username, setUsername] = React.useState(initialValues.username);
  const [password, setPassword] = React.useState(initialValues.password);
  const [type, setType] = React.useState(initialValues.type);
  const [grupo, setGrupo] = React.useState(initialValues.grupo);
  const [puntos, setPuntos] = React.useState(initialValues.puntos);
  const [tiempo, setTiempo] = React.useState(initialValues.tiempo);
  const [gema1, setGema1] = React.useState(initialValues.gema1);
  const [gema2, setGema2] = React.useState(initialValues.gema2);
  const [gema3, setGema3] = React.useState(initialValues.gema3);
  const [bonus1, setBonus1] = React.useState(initialValues.bonus1);
  const [bonus2, setBonus2] = React.useState(initialValues.bonus2);
  const [bonus3, setBonus3] = React.useState(initialValues.bonus3);
  const [intentos, setIntentos] = React.useState(initialValues.intentos);
  const [status, setStatus] = React.useState(initialValues.status);
  const [avatar, setAvatar] = React.useState(initialValues.avatar);
  const [nombre, setNombre] = React.useState(initialValues.nombre);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = rankingRecord
      ? { ...initialValues, ...rankingRecord }
      : initialValues;
    setUsername(cleanValues.username);
    setPassword(cleanValues.password);
    setType(cleanValues.type);
    setGrupo(cleanValues.grupo);
    setPuntos(cleanValues.puntos);
    setTiempo(cleanValues.tiempo);
    setGema1(cleanValues.gema1);
    setGema2(cleanValues.gema2);
    setGema3(cleanValues.gema3);
    setBonus1(cleanValues.bonus1);
    setBonus2(cleanValues.bonus2);
    setBonus3(cleanValues.bonus3);
    setIntentos(cleanValues.intentos);
    setStatus(cleanValues.status);
    setAvatar(cleanValues.avatar);
    setNombre(cleanValues.nombre);
    setErrors({});
  };
  const [rankingRecord, setRankingRecord] = React.useState(rankingModelProp);
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? await DataStore.query(Ranking, idProp)
        : rankingModelProp;
      setRankingRecord(record);
    };
    queryData();
  }, [idProp, rankingModelProp]);
  React.useEffect(resetStateValues, [rankingRecord]);
  const validations = {
    username: [{ type: "Required" }],
    password: [{ type: "Required" }],
    type: [{ type: "Required" }],
    grupo: [{ type: "Required" }],
    puntos: [],
    tiempo: [],
    gema1: [],
    gema2: [],
    gema3: [],
    bonus1: [],
    bonus2: [],
    bonus3: [],
    intentos: [],
    status: [],
    avatar: [],
    nombre: [],
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
          puntos,
          tiempo,
          gema1,
          gema2,
          gema3,
          bonus1,
          bonus2,
          bonus3,
          intentos,
          status,
          avatar,
          nombre,
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
          await DataStore.save(
            Ranking.copyOf(rankingRecord, (updated) => {
              Object.assign(updated, modelFields);
            })
          );
          if (onSuccess) {
            onSuccess(modelFields);
          }
        } catch (err) {
          if (onError) {
            onError(modelFields, err.message);
          }
        }
      }}
      {...getOverrideProps(overrides, "RankingUpdateForm")}
      {...rest}
    >
      <TextField
        label="Username"
        isRequired={true}
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
              puntos,
              tiempo,
              gema1,
              gema2,
              gema3,
              bonus1,
              bonus2,
              bonus3,
              intentos,
              status,
              avatar,
              nombre,
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
        isRequired={true}
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
              puntos,
              tiempo,
              gema1,
              gema2,
              gema3,
              bonus1,
              bonus2,
              bonus3,
              intentos,
              status,
              avatar,
              nombre,
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
        isRequired={true}
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
              puntos,
              tiempo,
              gema1,
              gema2,
              gema3,
              bonus1,
              bonus2,
              bonus3,
              intentos,
              status,
              avatar,
              nombre,
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
        isRequired={true}
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
              puntos,
              tiempo,
              gema1,
              gema2,
              gema3,
              bonus1,
              bonus2,
              bonus3,
              intentos,
              status,
              avatar,
              nombre,
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
              username,
              password,
              type,
              grupo,
              puntos: value,
              tiempo,
              gema1,
              gema2,
              gema3,
              bonus1,
              bonus2,
              bonus3,
              intentos,
              status,
              avatar,
              nombre,
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
        label="Tiempo"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={tiempo}
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
              puntos,
              tiempo: value,
              gema1,
              gema2,
              gema3,
              bonus1,
              bonus2,
              bonus3,
              intentos,
              status,
              avatar,
              nombre,
            };
            const result = onChange(modelFields);
            value = result?.tiempo ?? value;
          }
          if (errors.tiempo?.hasError) {
            runValidationTasks("tiempo", value);
          }
          setTiempo(value);
        }}
        onBlur={() => runValidationTasks("tiempo", tiempo)}
        errorMessage={errors.tiempo?.errorMessage}
        hasError={errors.tiempo?.hasError}
        {...getOverrideProps(overrides, "tiempo")}
      ></TextField>
      <SwitchField
        label="Gema1"
        defaultChecked={false}
        isDisabled={false}
        isChecked={gema1}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              username,
              password,
              type,
              grupo,
              puntos,
              tiempo,
              gema1: value,
              gema2,
              gema3,
              bonus1,
              bonus2,
              bonus3,
              intentos,
              status,
              avatar,
              nombre,
            };
            const result = onChange(modelFields);
            value = result?.gema1 ?? value;
          }
          if (errors.gema1?.hasError) {
            runValidationTasks("gema1", value);
          }
          setGema1(value);
        }}
        onBlur={() => runValidationTasks("gema1", gema1)}
        errorMessage={errors.gema1?.errorMessage}
        hasError={errors.gema1?.hasError}
        {...getOverrideProps(overrides, "gema1")}
      ></SwitchField>
      <SwitchField
        label="Gema2"
        defaultChecked={false}
        isDisabled={false}
        isChecked={gema2}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              username,
              password,
              type,
              grupo,
              puntos,
              tiempo,
              gema1,
              gema2: value,
              gema3,
              bonus1,
              bonus2,
              bonus3,
              intentos,
              status,
              avatar,
              nombre,
            };
            const result = onChange(modelFields);
            value = result?.gema2 ?? value;
          }
          if (errors.gema2?.hasError) {
            runValidationTasks("gema2", value);
          }
          setGema2(value);
        }}
        onBlur={() => runValidationTasks("gema2", gema2)}
        errorMessage={errors.gema2?.errorMessage}
        hasError={errors.gema2?.hasError}
        {...getOverrideProps(overrides, "gema2")}
      ></SwitchField>
      <SwitchField
        label="Gema3"
        defaultChecked={false}
        isDisabled={false}
        isChecked={gema3}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              username,
              password,
              type,
              grupo,
              puntos,
              tiempo,
              gema1,
              gema2,
              gema3: value,
              bonus1,
              bonus2,
              bonus3,
              intentos,
              status,
              avatar,
              nombre,
            };
            const result = onChange(modelFields);
            value = result?.gema3 ?? value;
          }
          if (errors.gema3?.hasError) {
            runValidationTasks("gema3", value);
          }
          setGema3(value);
        }}
        onBlur={() => runValidationTasks("gema3", gema3)}
        errorMessage={errors.gema3?.errorMessage}
        hasError={errors.gema3?.hasError}
        {...getOverrideProps(overrides, "gema3")}
      ></SwitchField>
      <SwitchField
        label="Bonus1"
        defaultChecked={false}
        isDisabled={false}
        isChecked={bonus1}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              username,
              password,
              type,
              grupo,
              puntos,
              tiempo,
              gema1,
              gema2,
              gema3,
              bonus1: value,
              bonus2,
              bonus3,
              intentos,
              status,
              avatar,
              nombre,
            };
            const result = onChange(modelFields);
            value = result?.bonus1 ?? value;
          }
          if (errors.bonus1?.hasError) {
            runValidationTasks("bonus1", value);
          }
          setBonus1(value);
        }}
        onBlur={() => runValidationTasks("bonus1", bonus1)}
        errorMessage={errors.bonus1?.errorMessage}
        hasError={errors.bonus1?.hasError}
        {...getOverrideProps(overrides, "bonus1")}
      ></SwitchField>
      <SwitchField
        label="Bonus2"
        defaultChecked={false}
        isDisabled={false}
        isChecked={bonus2}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              username,
              password,
              type,
              grupo,
              puntos,
              tiempo,
              gema1,
              gema2,
              gema3,
              bonus1,
              bonus2: value,
              bonus3,
              intentos,
              status,
              avatar,
              nombre,
            };
            const result = onChange(modelFields);
            value = result?.bonus2 ?? value;
          }
          if (errors.bonus2?.hasError) {
            runValidationTasks("bonus2", value);
          }
          setBonus2(value);
        }}
        onBlur={() => runValidationTasks("bonus2", bonus2)}
        errorMessage={errors.bonus2?.errorMessage}
        hasError={errors.bonus2?.hasError}
        {...getOverrideProps(overrides, "bonus2")}
      ></SwitchField>
      <SwitchField
        label="Bonus3"
        defaultChecked={false}
        isDisabled={false}
        isChecked={bonus3}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              username,
              password,
              type,
              grupo,
              puntos,
              tiempo,
              gema1,
              gema2,
              gema3,
              bonus1,
              bonus2,
              bonus3: value,
              intentos,
              status,
              avatar,
              nombre,
            };
            const result = onChange(modelFields);
            value = result?.bonus3 ?? value;
          }
          if (errors.bonus3?.hasError) {
            runValidationTasks("bonus3", value);
          }
          setBonus3(value);
        }}
        onBlur={() => runValidationTasks("bonus3", bonus3)}
        errorMessage={errors.bonus3?.errorMessage}
        hasError={errors.bonus3?.hasError}
        {...getOverrideProps(overrides, "bonus3")}
      ></SwitchField>
      <TextField
        label="Intentos"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={intentos}
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
              puntos,
              tiempo,
              gema1,
              gema2,
              gema3,
              bonus1,
              bonus2,
              bonus3,
              intentos: value,
              status,
              avatar,
              nombre,
            };
            const result = onChange(modelFields);
            value = result?.intentos ?? value;
          }
          if (errors.intentos?.hasError) {
            runValidationTasks("intentos", value);
          }
          setIntentos(value);
        }}
        onBlur={() => runValidationTasks("intentos", intentos)}
        errorMessage={errors.intentos?.errorMessage}
        hasError={errors.intentos?.hasError}
        {...getOverrideProps(overrides, "intentos")}
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
              puntos,
              tiempo,
              gema1,
              gema2,
              gema3,
              bonus1,
              bonus2,
              bonus3,
              intentos,
              status: value,
              avatar,
              nombre,
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
        value={avatar}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              username,
              password,
              type,
              grupo,
              puntos,
              tiempo,
              gema1,
              gema2,
              gema3,
              bonus1,
              bonus2,
              bonus3,
              intentos,
              status,
              avatar: value,
              nombre,
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
              puntos,
              tiempo,
              gema1,
              gema2,
              gema3,
              bonus1,
              bonus2,
              bonus3,
              intentos,
              status,
              avatar,
              nombre: value,
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
