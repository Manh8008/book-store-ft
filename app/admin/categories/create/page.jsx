'use client'
import React, { useEffect } from 'react'
import { useForm, Controller } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

// Function to fetch file from URL
const getFileFromUrl = async (url) => {
    const res = await fetch(url)
    const blob = await res.blob()
    return new File([blob], 'image', { type: blob.type })
}

// Schema validation
const productForm1Schema = z.object({
    name: z.string().min(1, { message: 'Name is required' }),
    image: z
        .custom((v) => v instanceof File, {
            message: 'Image must be a valid file'
        })
        .refine((v) => v, { message: 'Image is required' })
})

// Product Form Component
const CreateCatalog = ({ product }) => {
    const isAddMode = !product

    const {
        register,
        handleSubmit,
        control,
        watch,
        reset,
        formState: { errors, isSubmitting, isDirty }
    } = useForm({
        resolver: zodResolver(productForm1Schema),
        defaultValues: product
            ? async () => ({
                  name: product.name,
                  image: await getFileFromUrl(product.image)
              })
            : {
                  name: '',
                  image: undefined
              }
    })

    const image = watch('image')
    const imagePreview = image ? URL.createObjectURL(image) : null

    // Revoke object URL to prevent memory leaks
    useEffect(() => {
        return () => {
            if (imagePreview) URL.revokeObjectURL(imagePreview)
        }
    }, [imagePreview])

    const onSubmitHandler = async (data) => {
        try {
            // Build FormData for image upload

            console.log(data)

            const formData = new FormData()
            formData.append('name', data.name)
            formData.append('image', data.image)

            // Call API to upload data
            const response = await fetch('http://127.0.0.1:8000/api/admin/storeCatalog', {
                method: 'POST',
                headers: {
                    Authorization: 'Bearer 151|28Np0nbt832sm1y5qZOMTGJoZZjWQQvBDPQAXF8ed12bf3d1'
                },
                body: formData
            })

            if (!response.ok) {
                throw new Error('Failed to create catalog')
            }

            const result = await response.json()
            console.log('API Response:', result)

            // Reset form on success
            reset()
            alert('Catalog created successfully!')
        } catch (error) {
            console.error('Error:', error)
            alert('Failed to create catalog. Please try again.')
        }
    }

    return (
        <form onSubmit={handleSubmit(onSubmitHandler)}>
            <div>
                <label>Product Name:</label>
                <input {...register('name')} />
                {errors.name && <span style={{ color: 'red' }}>{errors.name.message}</span>}
            </div>

            <div>
                <label>Product Image:</label>
                <Controller
                    name="image"
                    control={control}
                    render={({ field: { ref, name, onBlur, onChange } }) => (
                        <input
                            type="file"
                            ref={ref}
                            name={name}
                            onBlur={onBlur}
                            onChange={(e) => onChange(e.target.files?.[0])}
                        />
                    )}
                />
                {imagePreview && (
                    <img src={imagePreview} alt="Preview" style={{ maxWidth: '200px' }} />
                )}
                {errors.image && <span style={{ color: 'red' }}>{errors.image.message}</span>}
            </div>

            <button type="submit" disabled={isSubmitting}>
                {isSubmitting ? 'Submitting...' : 'Submit'}
            </button>
        </form>
    )
}

export default CreateCatalog
