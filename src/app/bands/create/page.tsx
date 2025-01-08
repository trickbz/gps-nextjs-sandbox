'use client';

import {Band} from '@prisma/client';
import React from 'react';
import {useForm, SubmitHandler} from 'react-hook-form';

import FormField from '@/components/FormField/FormField';

import s from './CreateBandPage.module.css';

export default function CreateBandPage() {
  const {register, handleSubmit, formState} = useForm<Band>({
    mode: 'all',
  });
  const onSubmit: SubmitHandler<Band> = (data) => {
    console.log('create band submit', data);
  };

  // TODO: Move to form component
  return (
    <div>
      <h1 className={s.heading}>Create band</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormField<Band>
          formState={formState}
          id="name"
          label="Band name:"
          name="name"
          register={register}
          registerOptions={{required: 'Field is required.'}}
        />
        <FormField<Band>
          formState={formState}
          id="description"
          label="Description:"
          name="description"
          register={register}
          elementType="textarea"
        />
        <button
          type="submit"
          disabled={!formState.isValid}
          className={s.submitButton}
        >
          Submit
        </button>
      </form>
    </div>
  );
}
