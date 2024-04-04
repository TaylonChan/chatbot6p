<template>
  <NavigationBar />
  <section id="writing-with-ai" class="writing-with-ai">
    <div id="writing-with-ai-container" class="flex flex-col items-center flex-1 w-full p-7 pt-[calc(1rem+var(--header))] 
      sm:px-20">
      <div class="flex flex-col lg:flex-row w-full max-w-[1000px]">
        <div class="mb-6 lg:w-[250px] lg:mr-16">
          <h4 class="mb-2 scroll-m-20 text-xl font-semibold tracking-tight">
            Academic Writing Assistant
          </h4>
          <h1 class="text-[2rem] sm:text-[3rem] scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
            Writing With AI
          </h1>
          <p class="text-sm mt-6">This chatbot guides students through the 6P pedagogy for academic writing. <a href="https://www.lttc.eduhk.hk/papers/6p.pdf" class="underline" target="_blank">Papers</a></p>
        </div>
        
        <div class="flex-1">
          <div class="flex">
            <form @submit.prevent="onSubmit()" class="w-full">
              <Card class="mb-6">
                <CardHeader>
                  <CardTitle class="font-semibold text-base">
                    <ClipboardPenLine class="mb-2" />
                    <span>Planing</span>
                  </CardTitle>
                  <CardDescription>Please tell me the intended topic of your writing. I will guide you through the steps of the 6P pedagogy.</CardDescription>
                </CardHeader>
                <CardContent>
                  <FormField v-slot="{ componentField }" name="title">
                    <FormItem class="mb-8">
                      <FormLabel>Your Topic</FormLabel>
                      <FormControl>
                        <Input type="text" class="h-[50px] pl-6 bg-theme-light text-md" placeholder="" v-bind="componentField" maxlength="100" autofocus  />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  </FormField>
                  <FormField name="planing">
                    <FormItem>
                      <div class="flex justify-between items-center">
                        <FormLabel>Result Penal</FormLabel>
                        <button 
                          class="hover:-rotate-180 duration-200"
                          @click.prevent=""
                        >
                          <RotateCcw width="16" height="16" />
                        </button>
                      </div>
                      
                      <div class="!my-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</div>
                      <FormDescription>
                        <span class="text-xs">The result will be automatically generated, but you can still make edits to it.</span>
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  </FormField>
                </CardContent>
              </Card>
              <Card class="mb-6">
                <CardHeader>
                  <CardTitle class="font-semibold text-base">
                    <Sparkles class="mb-2" />
                    <span>Prompting</span>
                  </CardTitle>
                  <CardDescription>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et.</CardDescription>
                </CardHeader>
                <CardContent>
                  <FormField v-slot="{ componentField }" name="charname">
                    <FormItem class="mb-8">
                      <FormLabel>Prompt</FormLabel>
                      <FormControl>
                        <Input type="text" class="h-[50px] pl-6 bg-theme-light text-md" placeholder="" v-bind="componentField" maxlength="100"  />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  </FormField>
                  <FormField name="planing">
                    <FormItem>
                      <div class="flex justify-between items-center">
                        <FormLabel>Result Penal</FormLabel>
                        <button 
                          class="hover:-rotate-180 duration-200"
                          @click.prevent=""
                        >
                          <RotateCcw width="16" height="16" />
                        </button>
                      </div>
                      
                      <div class="!my-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</div>
                      <FormDescription>
                        <span class="text-xs">The result will be automatically generated, but you can still make edits to it.</span>
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  </FormField>
                </CardContent>
                <CardFooter class="text-xs text-theme-black opacity-65">
                </CardFooter>
              </Card>
            </form>
          </div>
        </div>
        
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, toRaw, nextTick } from 'vue'
import { useRouter } from 'vue-router'

import NavigationBar from '@/components/NavigationBar.vue'

import { Button } from '@/components_shadcn/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components_shadcn/ui/card'
import { FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '@/components_shadcn/ui/form'
import { Input } from '@/components_shadcn/ui/input'
import { Textarea } from '@/components_shadcn/ui/textarea'
import { useToast } from '@/components_shadcn/ui/toast/use-toast'

import { 
  ClipboardPenLine, 
  Sparkles,
  Plus,
  View,
  RotateCcw    
} from 'lucide-vue-next'

import { toTypedSchema } from '@vee-validate/zod'
import { useForm } from 'vee-validate'
import * as z from 'zod'

import axios from 'axios'

const router = useRouter()
const { toast } = useToast()

const formSchema = toTypedSchema(z.object({
  title: z.string().max(100, 'At most 100 charactors'),
  charname: z.string().max(100, 'At most 100 charactors'),
}))

const { handleSubmit } = useForm({
  validationSchema: formSchema,
})

const onSubmit = handleSubmit((values) => {
  console.log(values)
})

</script>

<style>

</style>