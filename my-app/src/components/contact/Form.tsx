"use client";

import { ContactFormSchema } from "@/schemas/ContactForm";
import { ContactFormTypeSchema } from "@/types/ContactFormType";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, SubmitHandler } from "react-hook-form";
import { toast, ToastContainer } from "react-toastify";
import ButtonSubmitForm from "./ButtonSubmitForm";

import "react-toastify/dist/ReactToastify.css";

export default function Form() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormTypeSchema>({
    resolver: zodResolver(ContactFormSchema),
  });

  const notify = () =>
    toast.success("E-mail enviado com sucesso!", {
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });

  const sendEmail: SubmitHandler<ContactFormTypeSchema> = ({
    name,
    email,
    message,
  }) => {
    reset({ name: "", email: "", message: "" });
    notify();
  };

  return (
    <>
      <form
        onSubmit={handleSubmit(sendEmail)}
        className="flex flex-col gap-y-6 max-xl:max-w-[560px] m-auto"
      >
        <div className="flex-1">
          <input
            {...register("name")}
            placeholder="Nome"
            className={`
              ${errors.name ? "border-red-500" : "focus:border-green-500"}
              input w-full capitalize
            `}
          />

          {errors.name && (
            <p className="text-red-500 text-xs mt-2">
              {errors.name.message as string}
            </p>
          )}
        </div>

        <div className="flex-1">
          <input
            {...register("email")}
            placeholder="E-mail"
            className={`
              ${errors.email ? "border-red-500" : "focus:border-green-500"}
              input w-full capitalize
            `}
          />
          {errors.email && (
            <p className="text-red-500 text-xs mt-2">
              {errors.email.message as string}
            </p>
          )}
        </div>
        {/* <div className="flex justify-between gap-x-4 sm:gap-x-8">
        </div> */}

        <div>
          <textarea
            {...register("message")}
            placeholder="Faça uma breve descrição..."
            className={`
              ${errors.message ? "border-red-500" : "focus:border-blue-500"}
              input w-full h-[180px] pr-2 pt-2 pb-2 capitalize resize-none text-gray-200
            `}
          />
          {errors.message && (
            <p className="text-red-500 text-xs mt-2">
              {errors.message.message as string}
            </p>
          )}
        </div>
        <ButtonSubmitForm />
      </form>

      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </>
  );
}
