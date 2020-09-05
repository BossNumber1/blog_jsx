import React from "react";
import InputSettings from "./InputSettings";
import InputElementsSettings from "./InputElementsSettings";

const InputsMap = ({
    firstNameState,
    secondNameState,
    ageState,
    countryState,
    changeInputHandler,
}) => {
    let inputDataName = [
        {
            id: 0,
            icon: "account_circle",
            name: "firstName",
            label: "Имя",
            value: firstNameState,
        },
        {
            id: 1,
            icon: "account_box",
            name: "secondName",
            label: "Фамилия",
            value: secondNameState,
        },
    ];

    let inputDataAgeAndCountry = [
        {
            id: 0,
            icon: "cake",
            name: "age",
            label: "Возраст",
            value: ageState,
        },
        {
            id: 1,
            icon: "public",
            name: "country",
            label: "Страна",
            value: countryState,
        },
    ];

    let inputElementsSettingsName = inputDataName.map((i) => (
        <InputSettings
            key={i.id}
            icon={i.icon}
            name={i.name}
            label={i.label}
            value={i.value}
            onChange={changeInputHandler}
        />
    ));

    let inputElementsSettingsAgeAndCountry = inputDataAgeAndCountry.map((i) => (
        <InputSettings
            key={i.id}
            icon={i.icon}
            name={i.name}
            label={i.label}
            value={i.value}
            onChange={changeInputHandler}
        />
    ));

    let inputsData = [
        {
            id: 0,
            inputs: inputElementsSettingsName,
        },
        {
            id: 1,
            inputs: inputElementsSettingsAgeAndCountry,
        },
    ];

    let inputsElements = inputsData.map((i) => (
        <InputElementsSettings key={i.id} inputElementsSettings={i.inputs} />
    ));

    return <>{inputsElements}</>;
};

export default InputsMap;
