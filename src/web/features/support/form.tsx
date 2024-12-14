import React, { ChangeEvent, useState } from 'react';
import Box from '../../components/Box';
import { SubmitHandler, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import z from 'zod';
import { Form, FormButton, FormInput, FormTextArea } from '../../components/Form';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperclip } from '@fortawesome/free-solid-svg-icons';
import GlobalStyleSheet from '../../lib/global-css'
import { TextComponent } from '../../components/Text';
import { AppStyleSheet } from '../../utils/inteface';

export type FormValues = {
    email: string;
    name: string;
    feedback: string;
    fileUpload: FileList | null;
};

const FormSchema = z.object({
    name: z.string()
        .min(3, "Please enter your fullname"),
    email: z.string().email("Invalid email address"),
    feedback: z.string()
        .min(3, "Please provide your feedback"),
    fileUpload: z.custom<FileList | null>((fileList) => {
        if (!fileList || fileList.length === 0) {
            return true;
        }
        const file = fileList[0];
        return file.size <= 5 * 1024 * 1024;
    }, { message: "File must be less than 5MB" }).optional()

});

const styleSheet: AppStyleSheet = {
    attachment: 'flex justify-center cursor-pointer bg-rectangle bg-no-repeat bg-contain bg-center h-[13.125rem] relative',
    iconStyling: 'text-[#C4C4C4] space-x-2',
    textArea: 'pt-5 text-[#9ca3af] !h-[9.375rem]',

}

const SupportForm = (): React.JSX.Element => {
    const [preview, setPreview] = useState<any>(null);

    const {
        register,
        handleSubmit,
        control,
        formState: { errors },
    } = useForm<FormValues>({
        resolver: zodResolver(FormSchema),
        defaultValues: {
            fileUpload: null
        }
    });

    const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
        const file: File | null = e.target.files?.[0] ?? null;
        if (file) {
            setPreview(URL.createObjectURL(file));

        }
    };


    const onSubmit: SubmitHandler<FormValues> = (data: FormValues) => {
        console.log("Form Data:", data);
    };

    return (
        <Box className='mt-10'>
            <Form onSubmit={handleSubmit(onSubmit)}
                className='space-y-5'
            >
                <FormInput
                    name='name'
                    placeholder='Name'
                    className={GlobalStyleSheet.inputStyle}
                    type='text'
                    register={register}
                    error={errors.name?.message} />

                <FormInput
                    name='email'
                    placeholder='Email'
                    className={GlobalStyleSheet.inputStyle}
                    type='text'
                    register={register}
                    error={errors.email?.message} />
                <FormTextArea
                    className={`${GlobalStyleSheet.inputStyle} ${styleSheet.textArea}`}
                    register={register}
                    error={errors.feedback?.message}
                    name='feedback'
                    placeholder='It would be awesome if...'></FormTextArea>

                <Box className='inline-block w-full'>
                    <TextComponent className={styleSheet.iconStyling}>
                        <span><FontAwesomeIcon icon={faPaperclip} /></span>
                        <span>Attachment</span>
                    </TextComponent>
                    <Box className={styleSheet.attachment}>
                        <FormInput
                            name='fileUpload'
                            className='absolute h-full w-full opacity-[0.01]'
                            type="file"
                            accept="image/*"
                            title=""
                            onChange={handleFileChange}
                            register={register}
                        />
                        {preview && <img src={preview} alt="Preview" className='self-center max-h-[50%]' />}
                        {!preview &&
                            (
                                <>
                                    <div className='h-full w-full flex justify-center items-center space-y-4 flex-col'>
                                        <TextComponent className='text-[1rem]'>
                                            Drop your files here or <span className='font-extrabold'>click to browse</span>
                                        </TextComponent>
                                        <TextComponent>
                                            Max. number of attachments- 5. Max file size- 8mb
                                        </TextComponent>
                                    </div>
                                    <p className="text-sm text-red-600 px-1">{errors.fileUpload?.message}</p>
                                </>
                            )}
                    </Box>
                </Box>

                <FormButton title='Submit'
                    className={GlobalStyleSheet.button}
                    type='submit'
                ></FormButton>


            </Form>
        </Box>
    )

};

export default SupportForm;