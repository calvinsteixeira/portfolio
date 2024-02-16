"use client";

import React from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "../ui/textarea";
import { Loader2, Send, Check } from "lucide-react";
import { AlertContainer } from "@/components/index";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";

type Props = {};
type AlertSettings = {
  title: string,
  description: string,
  type: 'destructive' | 'success',
  visible: boolean
}

export default function ContactForm({}: Props) {
  const [submitingForm, setSubmitingForm] = React.useState<boolean>(false);
  const [contactRequestSuccess, setContactRequestSuccess] =
    React.useState<boolean>(false);
  const [contactAlertFeedbackSettings, setContactAlertFeedbackSettings] = React.useState<AlertSettings>({
    title: "Default title",
    description: "Default description",
    type: 'destructive',
    visible: true
  })
  

  const formSchema = z.object({
    userName: z.string().min(2, {
      message: "Seu nome deve ter pelo menos 2 caracteres.",
    }),
    userEmail: z.string().email({ message: "Digite um email válido" }),
    userMessage: z
      .string()
      .min(1, { message: "A mensagem não pode ser vazia" })
      .max(200, {
        message: "A mensagem precisa conter no máximo 200 caracteres",
      }),
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      userName: "",
      userEmail: "",
      userMessage: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    setSubmitingForm(true);   

    setTimeout(() => {
      setSubmitingForm(false)
      setContactRequestSuccess(true)

      setTimeout(() => {
        setContactRequestSuccess(false)
        form.reset({
          userName: '',
          userEmail: '',
          userMessage: ''
        });
      }, 3000)

    }, 3000)
  }

  return (
    <>
      {contactAlertFeedbackSettings.visible && (
        <AlertContainer
          title={contactAlertFeedbackSettings.title}
          description={contactAlertFeedbackSettings.description}
          type={contactAlertFeedbackSettings.type}
        />
      )}
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <FormField
            control={form.control}
            name="userName"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    disabled={
                      submitingForm || contactRequestSuccess ? true : false
                    }
                    placeholder="digite seu nome"
                    className={
                      form.formState.errors.userName ? "border-red-500" : ""
                    }
                    {...field}
                  />
                </FormControl>
                <FormMessage
                  className={
                    form.formState.errors.userName ? "text-red-500" : ""
                  }
                />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="userEmail"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    disabled={
                      submitingForm || contactRequestSuccess ? true : false
                    }
                    placeholder="digite seu email"
                    className={
                      form.formState.errors.userEmail ? "border-red-500" : ""
                    }
                    {...field}
                  />
                </FormControl>
                <FormMessage
                  className={
                    form.formState.errors.userEmail ? "text-red-500" : ""
                  }
                />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="userMessage"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Textarea
                    disabled={
                      submitingForm || contactRequestSuccess ? true : false
                    }
                    placeholder="digite sua mensagem"
                    className={
                      form.formState.errors.userMessage ? "border-red-500" : ""
                    }
                    {...field}
                  />
                </FormControl>
                <FormMessage
                  className={
                    form.formState.errors.userMessage ? "text-red-500" : ""
                  }
                />
              </FormItem>
            )}
          />
          <Button
            disabled={submitingForm ? true : false}
            type="submit"
            className={contactRequestSuccess ? "bg-green-600" : ""}
          >
            {submitingForm ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Enviando sua
                mensagem
              </>
            ) : (
              <>
                <Send className="mr-2 h-4 w-4" /> Enviar mensagem
              </>
            )}
          </Button>
        </form>
      </Form>
    </>
  );
}
