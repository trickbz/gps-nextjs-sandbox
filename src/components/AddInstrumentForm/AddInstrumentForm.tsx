'use client';

import React from 'react';
import {useForm, SubmitHandler} from 'react-hook-form';

import FormField from '../FormField/FormField';

import s from './AddInstrumentForm.module.css';

type NewInstrument = {
  name: string;
};

interface Props {
  onInstrumentAdd: (instrument: string) => Promise<void>;
}

export function AddInstrumentForm(props: Props) {
  const {onInstrumentAdd} = props;
  const {register, handleSubmit, formState, reset} = useForm<NewInstrument>({
    mode: 'all',
  });

  const onSubmit: SubmitHandler<NewInstrument> = ({name}) => {
    onInstrumentAdd(name).then(() => reset());
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={s.form}>
      <FormField
        formState={formState}
        id="name"
        label="Instrument"
        name="name"
        register={register}
        registerOptions={{required: 'Required field'}}
        showLabel={false}
        placeholder="Instrument name"
        className={s.input}
      />
      <button type="submit" disabled={!formState.isValid}>
        Add instrument
      </button>
    </form>
  );
}
