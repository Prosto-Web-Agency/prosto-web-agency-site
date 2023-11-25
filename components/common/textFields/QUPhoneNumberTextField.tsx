import { MuiTelInput, matchIsValidTel } from 'mui-tel-input';
import { type ReactElement } from 'react';
import { type QUPhoneNumberTextFieldProps } from './QUPhoneNumberTextFieldProps';

export default function QUPhoneNumberTextField({
  phoneNumber,
  onChange,
  placeholder,
  disabled,
  style,
  className,
}: QUPhoneNumberTextFieldProps): ReactElement {
  return (
    <MuiTelInput
      forceCallingCode
      focusOnSelectCountry
      onlyCountries={['RU']}
      defaultCountry="RU"
      value={phoneNumber}
      onChange={(changedPhoneNumber): void =>
        onChange(changedPhoneNumber, matchIsValidTel(changedPhoneNumber))
      }
      placeholder={placeholder}
      disabled={disabled}
      InputProps={{
        sx: {
          '&.Mui-focused': {
            '.MuiOutlinedInput-notchedOutline': {
              border: '2px solid white',
              color: 'white',
            },
            color: 'white',
            fontSize: '28px',
          },
          '.MuiOutlinedInput-notchedOutline': {
            border: '2px solid black',
            borderColor: '#8E8E93',
            color: 'white',
          },
          '.MuiTelInput-Flag': {
          },
          '&:hover': {
            border: '1px solid white',
            borderColor: '#8E8E93',
          },
          borderRadius: '20px',
          background: 'black',
          color: 'gray',
          transition: '0.5s',
          height: '80px',
          fontSize: '24px',
        },
      }}
      style={style}
      className={'w-full' + (className ? ' ' + className : '')}
    />
  );
}
