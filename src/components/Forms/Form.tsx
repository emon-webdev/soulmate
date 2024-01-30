"use client";
import { ReactElement, ReactNode } from "react";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";

type FromConfig = {
  defaultValues?: Record<string, any>;
};
type FormProps = {
  children?: ReactElement | ReactNode;
  submitHandler: SubmitHandler<any>;
} & FromConfig;

const Form = ({ children, submitHandler, defaultValues }: FormProps) => {
  const fromConfig: FromConfig = {};
  if (!!defaultValues) fromConfig["defaultValues"] = defaultValues;

  const { methods } = useForm<FormProps>(fromConfig);
  const { handleSubmit, reset } = methods;
  console.log(methods);

  const onSubmit = (data: any) => {
    submitHandler(data);
    reset();
  };

  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit(onSubmit)}>{children}</form>
    </FormProvider>
  );
};

export default Form;
