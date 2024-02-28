"use client";

import React from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import axios from 'axios';

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

type emailRequestType = {
  name: string,
  message: string,
  _template: string
};
type AlertSettings = {
  title: string;
  description: string;
  type: "destructive" | "success";
  visible: boolean;
};

export default function ContactForm() {
  const [submitingForm, setSubmitingForm] = React.useState<boolean>(false);
  const [contactAlertSettings, setContactAlertSettings] =
    React.useState<AlertSettings>({
      title: "Default title",
      description: "Default description",
      type: "destructive",
      visible: false,
    });    

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
 
  function clearContactAlertSettings() {
    setContactAlertSettings({
      title: '',
      description: '',
      type: 'success',
      visible: false
    })
  }

  function onSubmit(values: z.infer<typeof formSchema>) {
    setSubmitingForm(true)
    const requestSchema: emailRequestType = {
      name: values.userName,
      message: values.userMessage,
      _template: 'table'
    }

    axios.post('https://formsubmit.co/9fe8a91af759ac5f4540c3561865f9d2', requestSchema)
    .then((response: any) => {
      if(response.status == 200){
        console.log(response)
        setSubmitingForm(false)
        setContactAlertSettings({
          title: "Tudo certo!",
          description: "Sua mensagem foi enviada com sucesso",
          type: "success",
          visible: true
        })
        form.reset({
          userName: '',
          userEmail: '',
          userMessage: ''
        })
        setTimeout(() => clearContactAlertSettings(), 4000)        
      }
    })
    .catch((error: any) => {
      console.log(error)
      setSubmitingForm(false)
      setContactAlertSettings({
        title: "Falha",
        description: "Falha no envio da sua mensagem, por favor tente novamente.",
        type: "destructive",
        visible: true
      })
      form.reset({
        userName: '',
        userEmail: '',
        userMessage: ''
      })
      setTimeout(() => clearContactAlertSettings(), 4000)      
    });    
  }

  return (
    <>
      <AlertContainer
        title={contactAlertSettings.title}
        description={contactAlertSettings.description}
        type={contactAlertSettings.type}
        visible={contactAlertSettings.visible}
      />

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 md:max-w-[45%]">
          <FormField
            control={form.control}
            name="userName"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    disabled={submitingForm ? true : false}
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
                    disabled={submitingForm ? true : false}
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
                    disabled={submitingForm ? true : false}
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
          <Button disabled={submitingForm ? true : false} type="submit">
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
