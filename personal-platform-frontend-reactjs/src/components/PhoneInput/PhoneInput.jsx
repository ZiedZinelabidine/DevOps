import { StayledLabel } from 'components/ComponnentProfilItems/Profils/Candidat/styled';
import React from 'react';
import { Form } from 'react-bootstrap';

const PhoneInput = ({ countryCode, phoneNumber, onCountryCodeChange, onPhoneNumberChange }) => {
    const countryCodes = [
        { code: "+1" },
        { code: "+44" },
        { code: "+33" },
        { code: "+49" },
    ];

    return (
            <Form.Group>
            <StayledLabel>Téléphone</StayledLabel>
                
                <div style={{ display: "flex" }}>
                    <Form.Select
                        value={countryCode}
                        onChange={onCountryCodeChange}
                        style={{ width: "20%", marginRight: "10px" }}
                    >
                        {countryCodes.map((country) => (
                            <option key={country.code} value={country.code}>
                                {country.name} ({country.code})
                            </option>
                        ))}
                    </Form.Select>
                    <Form.Control
                        type="text"
                        value={phoneNumber}
                        onChange={onPhoneNumberChange}
                        placeholder="Enter your number"
                    />
                </div>
            </Form.Group>
    );
};

export default PhoneInput;