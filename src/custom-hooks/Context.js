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
    const [imageObject, setImageObject] = useState(null);
    const [outlet, setOutletType] = useState([])
    const [outletChannel, setOutletChannel] = useState([]);
    const [outletName, setOutletName] = useState('');
    const [outletPhone, setOutletPhone] = useState('');
    const [outletAddress, setOutletAddress] = useState('');
    const [streetNo, setStreetNo] = useState('');
    const [streetName, setStreetName] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [isbso, setIsBso] = useState('');
    const [cpp, setCPP] = useState('');
    const [newoutlet, setNewOutletType] = useState('');
    const [newoutletchannel, setNewOutletChannel] = useState('');
    const [outletData, setOutletData] = useState([]);
    const [outlets, setOutlets] = useState([]);
    const [selectedOutletId, setSelectedOutletId] = useState(null);
    const [channelid, setChannelId] = useState('');
    const [] = useState('');
    const [] = useState('');
    const [] = useState('');
    const [] = useState('');
    const [] = useState('');
    const [] = useState('');
    const [] = useState('');
    const [] = useState('');
    const [] = useState('');
    const [] = useState('');
    const [] = useState('');

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
                imageObject, setImageObject,
                outlet, setOutletType,
                outletChannel, setOutletChannel,
                outletName, setOutletName,
                outletPhone, setOutletPhone,
                outletAddress, setOutletAddress,
                streetNo, setStreetNo,
                streetName, setStreetName,
                firstName, setFirstName,
                lastName, setLastName,
                isbso, setIsBso,
                cpp, setCPP,
                newoutlet, setNewOutletType,
                newoutletchannel, setNewOutletChannel,
                outletData, setOutletData,
                outlets, setOutlets,
                selectedOutletId, setSelectedOutletId,
            }}>
            {children}
        </GlobalContext.Provider>
    );
};

export const useGlobalContext = () => useContext(GlobalContext);
