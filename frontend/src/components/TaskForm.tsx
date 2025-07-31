import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

const schema = z.object({
    title: z.string().min(1),
    description: z.string().min(1),
});

type FormValues = z.infer<typeof schema>;

type Props = {
    onAdd: (data: FormValues) => void;
};

export default function TaskForm({ onAdd }: Props) {
    const { register, handleSubmit, reset } = useForm<FormValues>({ resolver: zodResolver(schema) });

    const onSubmit = (data: FormValues) => {
        onAdd(data);
        reset();
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <input {...register('title')} placeholder="Title" />
            <input {...register('description')} placeholder="Description" />
            <button type="submit">Add Task</button>
        </form>
    );
}
