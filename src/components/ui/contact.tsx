"use client";
import { sendEmail } from "@/lib/action";
import { zodResolver } from "@hookform/resolvers/zod";
import { MoveRightIcon } from "lucide-react";
import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";

export const formSchema = z.object({
  name: z.string().min(2, { message: "Name is required." }),
  email: z.string().email({ message: "Email is required." }),
  messages: z.string().min(1, { message: "Massage is required" }),
});

type Icontact = z.infer<typeof formSchema>;

const Contact = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<Icontact>({
    resolver: zodResolver(formSchema),
    mode: "onBlur",
    defaultValues: {
      name: "",
      email: "",
      messages: "",
    },
  });

  const onsubmit: SubmitHandler<Icontact> = async (data) => {
    const result = await sendEmail(data);
    console.log("data", result);

    if (result?.error) {
      toast.error("An error occurred! Please try again.");
      return;
    }

    toast.success("Message sent successfully!");
  };

  return (
    <section
      id='contact'
      className='w-auto h-auto bg-white scroll-mt-10 dark:bg-darkTheme'
    >
      <div className='w-full px-[12%] py-10 text-gray-700 mt-12'>
        <h4 className='text-center mb-2 text-lg font-Josefin'>
          Connect with me
        </h4>
        <h2 className='text-center text-5xl font-Josefin'>Get in touch</h2>
        <p className='text-center max-w-2xl mx-auto mt-5 mb-12 font-Josefin'>
          {`I'd love to hear from you! If you have any question, comments or
          feedback, please use the form below.`}
        </p>
        <form
          // method='POST'
          // action='https://api.web3forms.com/submit'
          onSubmit={handleSubmit(onsubmit)}
          className='max-w-2xl mx-auto'
        >
          {/* <input
            type='hidden'
            name='access_key'
            value='f97749d8-712b-40c2-86af-36c08a4c2f88'
          ></input> */}
          <div className='grid grid-cols-auto gap-6 mt-10 mb-8 relative'>
            <input
              {...register("name", { required: true })}
              required
              name='name'
              type='text'
              placeholder='Enter your name'
              className='flex-1 p-3 outline-none border-[0.5px] border-gray-400 rounded-md bg-white dark:bg-darkTheme/30 dark:border-whiteText/90 border-neutral-300'
            />
            {errors?.name?.message && (
              <p className='text-base text-red-500 font-semibold absolute top-14'>
                {errors?.name?.message}
              </p>
            )}
            <input
              {...register("email")}
              required
              name='email'
              type='email'
              placeholder='Enter your email'
              className='flex-1 p-3 outline-none border-[0.5px] border-gray-400 rounded-md bg-white dark:bg-darkTheme/30 dark:border-whiteText/90 border-neutral-300'
            />
            {errors?.email?.message && (
              <p className='text-base text-red-500 font-semibold absolute top-14 right-36'>
                {errors?.email?.message}
              </p>
            )}
          </div>
          <textarea
            {...register("messages")}
            required
            name='message'
            rows={6}
            placeholder='Enter your message'
            className='w-full p-4 outline-none border-[0.5px] border-gray-400 rounded-md bg-white mb-6 dark:bg-darkTheme/30 dark:border-whiteText/90 hover:border-hoverColor border-neutral-300'
          ></textarea>
          {errors?.messages?.message && (
            <p className='text-base text-red-500 font-semibold'>
              {errors?.messages?.message}
            </p>
          )}
          <button
            type='submit'
            disabled={isSubmitting}
            className='py-3 px-8 w-max flex items-center justify-between gap-2 bg-black/80 text-white rounded-full mx-auto hover:bg-black duration-500 border-[0.5px] dark:border-[0.5px] dark:bg-hoverDarkColor hover:border-hoverColor'
          >
            {isSubmitting ? "Submitting..." : "contact Us"}
            <MoveRightIcon className='w-4' />
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
