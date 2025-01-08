import clsx from 'clsx';
import React from 'react';
import {
  FieldError,
  FieldValues,
  FormState,
  Path,
  RegisterOptions,
  UseFormRegister,
} from 'react-hook-form';

import s from './FormField.module.scss';

interface Props<T extends FieldValues> {
  label: string;
  inputType?: 'text' | 'password' | 'email';
  name: keyof T;
  register: UseFormRegister<T>;
  id: string;
  formState: FormState<T>;
  elementType?: 'input' | 'textarea';
  rows?: number;
  registerOptions?: RegisterOptions<T>;
  placeholder?: string;
  showLabel?: boolean;
  className?: string;
}

export default function FormField<T extends FieldValues>(props: Props<T>) {
  const {
    label,
    register,
    name,
    inputType,
    formState: {errors},
    id,
    elementType = 'input',
    rows = elementType === 'input' ? undefined : 3,
    registerOptions = {},
    placeholder = '',
    showLabel = true,
    className = '',
  } = props;

  const Component = elementType === 'input' ? 'input' : 'textarea';

  return (
    <div className={s.container}>
      {showLabel && <label htmlFor={id}>{label}</label>}
      <Component
        type={inputType}
        {...register(name as Path<T>, registerOptions)}
        id={id}
        className={clsx(className)}
        rows={rows}
        placeholder={placeholder}
      />
      {errors[name as keyof T] && (
        <p className={s.errorMessage}>{(errors[name] as FieldError).message}</p>
      )}
    </div>
  );
}
