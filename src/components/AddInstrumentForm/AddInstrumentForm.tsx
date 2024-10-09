'use client';

import React from 'react';
import {useForm, SubmitHandler} from 'react-hook-form';

import s from './AddInstrumentForm.module.css';

type NewInstrument = {
  name: string;
};

interface Props {
  onInstrumentAdd: (instrument: string) => void;
}

export function AddInstrumentForm(props: Props) {
  const {onInstrumentAdd} = props;
  const {
    register,
    handleSubmit,
    formState: {errors, isValid},
  } = useForm<NewInstrument>();

  const onSubmit: SubmitHandler<NewInstrument> = ({name}) => {
    onInstrumentAdd(name);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={s.form}>
      <div className={s.inputContainer}>
        <input
          {...register('name', {required: 'Required field'})}
          className={s.input}
          placeholder="Instrument name"
        />
        {errors.name && <p>{errors.name.message}</p>}
      </div>
      <button type="submit" disabled={!isValid}>
        Add instrument
      </button>
    </form>
  );
}
