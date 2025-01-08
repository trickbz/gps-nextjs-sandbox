'use client';

import React from 'react';
import {SubmitHandler, useForm} from 'react-hook-form';

import {Auth} from '@/types/band.types';

import s from './styles.module.css';

// TODO: Replace with FormField
export default function Login() {
  const {register, handleSubmit, formState} = useForm<Auth>({
    mode: 'all',
  });
  const {errors} = formState;

  const onSubmit: SubmitHandler<Auth> = (data) => alert(JSON.stringify(data));

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={handleSubmit(onSubmit)} className={s.form}>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          {...register('email', {required: 'Field is required.'})}
          id="email"
          className={s.input}
        />
        {errors.email && (
          <p className={s.errorMessage}>{errors.email.message}</p>
        )}
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          {...register('password')}
          id="password"
          className={s.input}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
