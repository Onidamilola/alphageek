import React, { createContext, useContext, useState } from 'react';

export const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
    const [formData, setFormData] = useState({
        email: '',
        userId: '',
        firstName: '',
        middleName: '',
        lastName: '',
        address: '',
        lga: '',
        state: '',
        gender: '',
        phoneNum: '',
        education: [],
        country: '',
        selectedState: {},
        selectedCountry: {},
        successModalOpen: false,
    });

    const updateFormData = (name, value) => {
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    return (
        <GlobalContext.Provider
            value={{
                formData,
                updateFormData,
            }}>
            {children}
        </GlobalContext.Provider>
    );
};

export const useGlobalContext = () => useContext(GlobalContext);
